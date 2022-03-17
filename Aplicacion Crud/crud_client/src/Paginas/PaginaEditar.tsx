import React from "react";

//Componentes =>
import Editar from "../Componentes/Editar";

//Paginas =>
import Inicio from "../Paginas/Inicio";

const PaginaEditar = ():JSX.Element =>{
    return(
        <div>
            <Inicio></Inicio>
            <Editar></Editar>
        </div>
    )
}
export default PaginaEditar;