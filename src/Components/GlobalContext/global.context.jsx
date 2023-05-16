import { createContext, useContext, useEffect, useReducer } from "react";

const ContextGlobal = createContext();

const initialTourState = { tourList: [], tourDetail: {}}

const tourReducer = (state, action) => {
    switch (action.type) {
        case "GET_TOURS":
            return {
                tourList: action.payload,
                tourDetail: state.tourDetail,
            };
        case "GET_TOURS_DETAIL":
            return {
                tourDetail: action.payload,
                tourList: state.tourList,
            }
        default:
            throw new Error()
    }
}

const ContextProvider = ({ children }) => {
    
    const [tourState, tourDispatch] = useReducer(
        tourReducer,
        initialTourState
    )

    console.log(tourState);

    const url = "https://hp-api.onrender.com/api/characters";

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => tourDispatch({type: "GET_TOURS", payload: data}));
    },[]);

    return (
        <ContextGlobal.Provider
        value={{
            tourState, tourDispatch
        }}
        >
            {children}
        </ContextGlobal.Provider>
    )
}

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);