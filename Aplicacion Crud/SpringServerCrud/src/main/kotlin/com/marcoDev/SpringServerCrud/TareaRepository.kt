package com.marcoDev.SpringServerCrud


import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query

interface TareaRepository : JpaRepository<Tarea, Int>{
    @Query("SELECT t FROM Tarea t WHERE id = 1")
    fun findAllByNumber():
            List<Tarea>

    @Query("SELECT t.nombre FROM Tarea t WHERE id = 1")
    fun findByName():
            List<String>


}
