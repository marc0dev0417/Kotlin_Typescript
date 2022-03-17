package com.marcoDev.SpringServerCrud

import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody

import org.springframework.web.bind.annotation.RestController

@RestController
class Controller(val tareaRepository: TareaRepository, val service:TareaService){
    @CrossOrigin("http://localhost:3000")
    @GetMapping("/todos")
    fun index():ResponseEntity<List<Tarea>>  = ResponseEntity.ok(tareaRepository.findAll());

    @GetMapping("/id")
    fun byNumber():ResponseEntity<List<Tarea>> = ResponseEntity.ok(tareaRepository.findAllByNumber());

    @GetMapping("/nombre")
    fun  byName():ResponseEntity<List<String>> = ResponseEntity.ok(tareaRepository.findByName());

    @CrossOrigin("http://localhost:3000")
    @PostMapping("/insertar/tarea")
    fun post(@RequestBody tarea:Tarea){
        service.guardarTarea(tarea)
    }
    @CrossOrigin("http://localhost:3000")
    @PutMapping("/editar/tarea")
    fun editar(@RequestBody tarea:Tarea){
        service.actualizar(tarea);
    }
    @CrossOrigin("http://localhost:3000")
    @DeleteMapping("/eliminar/tarea/{id}")
    fun eliminar(@PathVariable id:Int){
        service.eliminarById(id);
    }

}