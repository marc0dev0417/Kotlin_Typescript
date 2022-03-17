import axios from "axios";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom"


import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from 'react-bootstrap/Form';

import '../Estilos/insertar.css';

interface Tarea{
    id:number,
    nombre:string,
    descripcion:string,
    diaSemana:string
}

const Editar = (): JSX.Element => {

    const navegar = useNavigate();

    const [id, setId] = useState<number>(localStorage.id);
    const [nombre, setNombre] = useState<string>(localStorage.nombre);
    const [descripcion, setDescripcion] = useState<string>(localStorage.descripcion);
    const [diaSemana, setDiaSemana] = useState<string>(localStorage.dia);

        const dameValores = () =>{
                axios.put("http://localhost:8080/editar/tarea", {
                    id:id,
                    nombre:nombre,
                    descripcion:descripcion,
                    diaSemana:diaSemana
                });

                console.log(id);
                console.log(nombre);
                console.log(descripcion);
                console.log(diaSemana);

                navegar("/listar");
        };
    return (
        <div id="contenedor_padre">
            <div id="contenedor_form">
            <h1>Editar Tarea</h1>
                                <FloatingLabel
                                        controlId="floatingInput"
                                        label="Tarea"
                                        className="mb-3"
                                ><Form.Control type="tarea" placeholder="name@example.com" autoComplete='off' defaultValue={localStorage.nombre} onChange={(e) => {
                                        setNombre(e.target.value);
                                }} /></FloatingLabel>
                               <FloatingLabel
                                        controlId="floatingInput"
                                        label="Descripción"
                                        className="mb-3"
                                ><Form.Control type="descripcion" placeholder="¿Qué realiza la tarea?" autoComplete="off" defaultValue={localStorage.descripcion} onChange={(e) => {
                                        setDescripcion(e.target.value);
                                }} /></FloatingLabel>
                               <FloatingLabel
                                        controlId="floatingInput"
                                        label="Dia de la semana"
                                        className="mb-3"
                                ><Form.Control type="dia" placeholder="lunes, martes, etc..." autoComplete="off" defaultValue={localStorage.dia} onChange={(e) => {
                                        setDiaSemana(e.target.value);
                                }} /></FloatingLabel>
            <button className="button_insertar" onClick={dameValores}>Guardar</button>
            </div>
        </div>
    )
}
export default Editar;