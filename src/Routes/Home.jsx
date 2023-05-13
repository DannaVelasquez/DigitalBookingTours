import React from "react";
import Category from "../Components/Category/Category";
import Searchbar from "../Components/Search-Bar/Searchbar";
import Recom from "../Components/Recomendations/Recom";

const Home = () => {
  return (
    <body>
      <Searchbar />
      <Category />
      <Recom />
    </body>
  );
};

export default Home;
