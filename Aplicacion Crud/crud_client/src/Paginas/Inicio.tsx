import React from "react";

import { Outlet, Link, useNavigate } from "react-router-dom";

//BootStrap =>
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//CSS =>
import '../Estilos/Inicio.css'

const Inicio = (): JSX.Element => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Administrador de Tareas</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/insertar" className="links">Insertar</Link>
                        <Link to="/listar" className="links">Listar Tareas</Link>  
                    </Nav>
                </Container>
            </Navbar>
           

            <Outlet/>
            

        </div>
    )
}
export default Inicio;