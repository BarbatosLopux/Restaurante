package com.example.RetoSpringBoot.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.RetoSpringBoot.domain.repository.PlatoRepository;
import com.example.RetoSpringBoot.persistence.entity.Plato;

import java.util.List;

@Service
public class PlatoServiceImpl implements PlatoService {
    @Autowired
    private PlatoRepository platoRepository;


    @Override
    public List<Plato> getAllPlatos() {
        return platoRepository.findAll();
    }

    @Override
    public Plato getPlatoById(Long id) {
        Plato plato = platoRepository.findById(id).orElse(null);
        return plato;
    }

    @Override
    public Plato savePlato(Plato Plato) {
        return platoRepository.save(Plato);
    }

    @Override
    public void deletePlato(Long id) {
        platoRepository.deleteById(id);
    }
}