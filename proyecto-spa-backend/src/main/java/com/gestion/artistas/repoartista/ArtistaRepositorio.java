package com.gestion.artistas.repoartista;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.artistas.modelo.Artista;

@Repository
public interface ArtistaRepositorio extends JpaRepository<Artista,Long> {

}
