import React from 'react';
import './Estilos/App.css'
//Paginas =>
import PaginaInsertar from './Paginas/PaginaInsertar';
import PaginaListar from './Paginas/PaginaListar'
import PaginaEditar from './Paginas/PaginaEditar'

//React routhers =>
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route
        path="*"
        element={<Navigate to="/insertar"/>}
    />
        <Route path='insertar' element={<PaginaInsertar/>} />
        <Route path='listar' element={<PaginaListar/>} />
        <Route path='editar' element={<PaginaEditar/>} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
