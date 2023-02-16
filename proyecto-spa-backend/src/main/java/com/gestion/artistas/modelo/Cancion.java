package com.gestion.artistas.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "canciones")
public class Cancion {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_cancion;

	@Column(name = "nombre_cancion", length = 70, nullable = false)
	private String nombre_cancion;

	@ManyToOne
	@JoinColumn(name = "album")
	private Album album;

	public Cancion() {

	}

	public Cancion(long id_cancion, String nombre_cancion, Album album) {
		super();
		this.id_cancion = id_cancion;
		this.nombre_cancion = nombre_cancion;
		this.album = album;
	}

	public long getId_cancion() {
		return id_cancion;
	}

	public void setId_cancion(long id_cancion) {
		this.id_cancion = id_cancion;
	}

	public String getNombre_cancion() {
		return nombre_cancion;
	}

	public void setNombre_cancion(String nombre_cancion) {
		this.nombre_cancion = nombre_cancion;
	}

	public Album getAlbum() {
		return album;
	}

	public void setAlbum(Album album) {
		this.album = album;
	}

}




