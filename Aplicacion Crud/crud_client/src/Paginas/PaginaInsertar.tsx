import React from "react";
import Insertar from "../Componentes/Insertar"
import Inicio from "../Paginas/Inicio"

//CSS =>
import '../Estilos/paginaInsertar.css';
const PaginaInsertar = ():JSX.Element =>{
    return(
            <div id="contenedor_pagina_listar">
                <Inicio />
                <Insertar></Insertar>
            </div>
        )
}

export default PaginaInsertar;