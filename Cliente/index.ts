import axios from "axios";

interface tarea{
    id:number,
    nombre:string,
    descripcion:string,
    diaSemana:string
}

interface idTarea{
    nombre:string,
    descripcion:string,
    diaSemana:string
}

const id:string = "6";

const tarea1:idTarea = {
    nombre:"patata frita",
    descripcion:"mejor",
    diaSemana:"martes"
}
const tarea2:idTarea = {
    nombre:"iker frito",
    descripcion:"rojito",
    diaSemana:"viernes 13"
}

//axios.delete(`http://localhost:8080/eliminar/tarea/${id}`);


axios.post("http://localhost:8080/insertar/tarea", tarea1);
axios.post("http://localhost:8080/insertar/tarea", tarea2);

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


