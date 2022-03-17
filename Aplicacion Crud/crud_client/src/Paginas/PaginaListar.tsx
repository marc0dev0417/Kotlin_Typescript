import React from "react";

//Import componentes =>
import Listar from "../Componentes/Listar"
import Inicio from "../Paginas/Inicio"

const PaginaListar = ():JSX.Element =>{
    return(
        <div>
            <Inicio></Inicio>
            <Listar></Listar>
        </div>
    )
}
export default PaginaListar;