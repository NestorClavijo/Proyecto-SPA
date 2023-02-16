package com.gestion.artistas.repoartista;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.artistas.modelo.Cancion;

@Repository
public interface CancionRepositorio extends JpaRepository<Cancion,Long> {

}
