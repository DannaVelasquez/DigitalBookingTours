import React from "react";

const Home = () => {

    return(
        <body>
        <section className="search-bar">
            <h1>Busca experiencias, tours y mucho más</h1>
            <form className="search-form">
                <input placeholder="En que lugar quieres tu experiencia?" type="text"/>
                <input placeholder="Escoge las fechas de tu experiencia" type="text"/>
                <button className="button">Buscar</button>
            </form>            
        </section>
        <section className="search-category">
            <h3>Buscar por destinos </h3>            
        </section>
        <section className="search-recom">
            <h3>Recomendaciones</h3>            
        </section>
        </body>
    )
}

export default Home;