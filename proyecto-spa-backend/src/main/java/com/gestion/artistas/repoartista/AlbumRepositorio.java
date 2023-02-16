package com.gestion.artistas.repoartista;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.artistas.modelo.Album;

@Repository
public interface AlbumRepositorio extends JpaRepository<Album,Long>{

}
