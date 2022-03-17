import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
//CSS =>
import  '../Estilos/listar.css';






interface TareaInterfaz{
    id:number,
    nombre:string,
    descripcion:string,
    diaSemana:string
}
  
    const Listar = ():JSX.Element => {

        const [lista, setLista] = useState<TareaInterfaz[]>([]);
       
        const [isVisible, setIsVisible] = useState<Boolean>(true);
        
          
        useEffect(() =>{

            let cancel:Boolean = false;

          const intervalo = setInterval(() =>{
            axios.get("http://localhost:8080/todos").then((datos) =>{
                setLista(datos.data);
                //setInterval(actualizarDatos,100);

                if(cancel)return;
                setIsVisible(false);
            });
          },1000);

            return () => { 
                clearInterval(intervalo);
                cancel = true;
               
                caches.keys().then((names) => {
                    names.forEach((name) => {
                      caches.delete(name);
                    });
                  });                
              }
        }, []);
            //Manejador de eventos Onclick =>

            const navega = useNavigate();
           
          
           const clickEliminar = (id:string) =>{
               console.log(id);
                axios.delete(`http://localhost:8080/eliminar/tarea/${id}`)
               //window.location.reload();
           };
    return(
<div>
    {lista.map((elemento:TareaInterfaz, index:number) =>{

       return(  
  <div className="card__container">
    <div className="card">
      <div className="card__content">
        <h3 className="card__header">{elemento.nombre}</h3>
        <p className="card__info">{elemento.descripcion}</p>
        <p className="card__info">{elemento.diaSemana}</p>
        <button className="card__button" onClick={() =>{
           navega("/editar");
                                                       
           localStorage.setItem("id", String(elemento.id));
           localStorage.setItem("nombre", elemento.nombre);
           localStorage.setItem("descripcion", elemento.descripcion);
           localStorage.setItem("dia", elemento.diaSemana);
        }}>Editar</button>
                                 
        <button className="card__button" onClick={() =>{
           clickEliminar(String(elemento.id));
        }}>Eliminar</button>
      </div>
    </div>
  </div>
       )
   })} 
</div>
    )
}
export default Listar;