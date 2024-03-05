package com.example.RetoSpringBoot.web.controller;

import com.example.RetoSpringBoot.domain.service.PlatoService;
import com.example.RetoSpringBoot.persistence.entity.Plato;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/plato") // localhost:8080/api/plato
@CrossOrigin("*")
public class PlatoController {
    private final PlatoService platoService;

    @Autowired
    public PlatoController(PlatoService platoService) {
        this.platoService = platoService;
    }

    @GetMapping
    public List<Plato> getAllPlatos() {
        return platoService.getAllPlatos();
    }

    @GetMapping("/{id}")
    public Plato getPlatoById(@PathVariable Long id) {
        return platoService.getPlatoById(id);
    }

    @PostMapping
    public Plato savePlato(@RequestBody Plato plato) {
        return platoService.savePlato(plato);
    }

    @DeleteMapping("/{id}")
    public void deletePlato(@PathVariable Long id) {
        platoService.deletePlato(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Plato> updatePlato(@PathVariable Long id, @RequestBody Plato plato) {
        Plato existingPlato = platoService.getPlatoById(id);
        if (existingPlato != null) {
            plato.setIdPlato(id); // Asegúrate de establecer el ID del plato con el ID proporcionado en la ruta
            Plato updatedPlato = platoService.savePlato(plato); // Esto actualiza el plato existente con los datos proporcionados
            return ResponseEntity.ok(updatedPlato);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}