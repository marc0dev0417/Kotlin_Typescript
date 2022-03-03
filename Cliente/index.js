"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var id = "6";
var tarea1 = {
    nombre: "patata frita",
    descripcion: "mejor",
    diaSemana: "martes"
};
var tarea2 = {
    nombre: "iker frito",
    descripcion: "rojito",
    diaSemana: "viernes 13"
};
//axios.delete(`http://localhost:8080/eliminar/tarea/${id}`);
axios_1["default"].post("http://localhost:8080/insertar/tarea", tarea1);
axios_1["default"].post("http://localhost:8080/insertar/tarea", tarea2);
/*
axios.get("http://localhost:8080/todos").then((e =>{

    e.data.map((elemento:tarea, i:number) =>{
        console.log(elemento.id);
        console.log(elemento.nombre);
        console.log(elemento.descripcion);
        console.log(elemento.diaSemana);
    });
        
    
}));

*/
