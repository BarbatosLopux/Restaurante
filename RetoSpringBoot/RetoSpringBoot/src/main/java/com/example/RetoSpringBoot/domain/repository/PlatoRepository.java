package com.example.RetoSpringBoot.domain.repository;

import com.example.RetoSpringBoot.persistence.entity.Plato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlatoRepository extends JpaRepository<Plato, Long> {

}
