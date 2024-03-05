package com.example.RetoSpringBoot.domain.service;
import com.example.RetoSpringBoot.persistence.entity.Plato;

import java.util.List;

public interface PlatoService {

       List<Plato> getAllPlatos();
       Plato getPlatoById(Long id);
       Plato savePlato(Plato Plato);
       void deletePlato(Long id);

}
