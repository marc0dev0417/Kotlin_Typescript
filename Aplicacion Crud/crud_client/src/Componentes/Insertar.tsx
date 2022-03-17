import React, { useState} from 'react';
import axios from 'axios';

//React Boostrap =>

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

//CSS =>
import '../Estilos/insertar.css';
const Insertar = (): JSX.Element => {

        const [nombre, setNombre] = useState<string>();
        const [descripcion, setDescripcion] = useState<string>("");
        const [dia, setDia] = useState<string>("");

        const clickInsertar = () => {

                axios.post("http://localhost:8080/insertar/tarea", {
                        nombre: nombre,
                        descripcion: descripcion,
                        diaSemana: dia
                });
                console.log(nombre);
                console.log(descripcion);
                console.log(dia);
        }


        //axios.post('http://8080/insertar/tarea')
        return (
                <div id="contenedor_padre">
                        <div id="contenedor_form">
                            <h1>Añadir Tarea</h1>
                                <FloatingLabel
                                        controlId="floatingInput"
                                        label="Tarea"
                                        className="mb-3"
                                ><Form.Control type="tarea" placeholder="name@example.com" autoComplete='off' onChange={(e) => {
                                        setNombre(e.target.value);
                                }} /></FloatingLabel>
                               <FloatingLabel
                                        controlId="floatingInput"
                                        label="Descripción"
                                        className="mb-3"
                                ><Form.Control type="descripcion" placeholder="¿Qué realiza la tarea?" autoComplete="off" onChange={(e) => {
                                        setDescripcion(e.target.value);
                                }} /></FloatingLabel>
                               <FloatingLabel
                                        controlId="floatingInput"
                                        label="Dia de la semana"
                                        className="mb-3"
                                ><Form.Control type="dia" placeholder="lunes, martes, etc..." autoComplete="off" onChange={(e) => {
                                        setDia(e.target.value);
                                }} /></FloatingLabel>
                                <button className="button_insertar"  onClick={clickInsertar}>Añadir</button>
                                
                        </div>
                </div>
        );
}

export default Insertar;