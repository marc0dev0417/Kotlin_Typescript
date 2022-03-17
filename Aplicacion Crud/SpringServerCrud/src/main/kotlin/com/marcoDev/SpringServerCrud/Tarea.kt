package com.marcoDev.SpringServerCrud

import javax.persistence.*
@Entity
data class Tarea(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    val id:Int,
    @Column(nullable = false)
    val nombre:String,
    @Column(nullable = false)
    val descripcion:String,
    @Column(nullable = false)
    val diaSemana:String) {
}
