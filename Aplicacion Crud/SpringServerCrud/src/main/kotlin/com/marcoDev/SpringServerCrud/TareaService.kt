package com.marcoDev.SpringServerCrud

import org.springframework.stereotype.Service

@Service
class TareaService(val db:TareaRepository) {

    fun guardarTarea(tarea:Tarea){

        if(!db.existsById(tarea.id)){
            db.save(tarea);
        }else{
            throw Exception("No se puede crear una tarea porque ya existe la tarea");
        }

    }
    fun actualizar(tarea:Tarea){

       if(db.existsById(tarea.id)){
           db.save(tarea);
       }else{
           throw Exception("No se puede actualizar porque no existe el id de la tarea")
       }
    }
    fun eliminarById(id:Int){
        if(db.existsById(id)){
            db.deleteById(id);
        }else{
            throw Exception("No existe el id");
        }
    }
}