package com.example.RetoSpringBoot.persistence.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Plato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPlato;

    private String nombrePlato;
    private String descripcion;
    private double precio;
    private String categoriaPlato;
    private Boolean disponibilidad;
    private String tiempoPreparacion;

    // Constructor vacío
    public Plato() {
    }

    // Getters y Setters
    public Long getIdPlato() {
        return idPlato;
    }

    public void setIdPlato(Long idPlato) {
        this.idPlato = idPlato;
    }

    public String getNombrePlato() {
        return nombrePlato;
    }

    public void setNombrePlato(String nombrePlato) {
        this.nombrePlato = nombrePlato;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public String getCategoriaPlato() {
        return categoriaPlato;
    }

    public void setCategoriaPlato(String categoriaPlato) {
        this.categoriaPlato = categoriaPlato;
    }

    public Boolean getDisponibilidad() {
        return disponibilidad;
    }

    public void setDisponibilidad(Boolean disponibilidad) {
        this.disponibilidad = disponibilidad;
    }

    public String getTiempoPreparacion() {
        return tiempoPreparacion;
    }

    public void setTiempoPreparacion(String tiempoPreparacion) {
        this.tiempoPreparacion = tiempoPreparacion;
    }

    @Override
    public String toString() {
        return "Plato{" +
                "idPlato=" + idPlato +
                ", nombrePlato='" + nombrePlato + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", precio=" + precio +
                ", categoriaPlato='" + categoriaPlato + '\'' +
                ", disponibilidad=" + disponibilidad +
                ", tiempoPreparacion='" + tiempoPreparacion + '\'' +
                '}';
    }
}