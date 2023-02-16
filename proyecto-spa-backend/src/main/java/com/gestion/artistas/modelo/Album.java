package com.gestion.artistas.modelo;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "albums")
public class Album {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_album;

	@Column(name = "genero", length = 40, nullable = false)
	private String genero;

	@Column(name = "discografica", length = 60, nullable = false)
	private String discografica;

	@Column(name = "nombre_album", length = 40, nullable = false)
	private String nombre_album;

	@Column(name = "fecha_public")
	private Date fecha_public;

	@ManyToOne
	@JoinColumn(name = "artista")
	private Artista artista;

	public Album() {

	}

	public Album(long id_album, String genero, String discografica, String nombre_album, Date fecha_public,
			Artista artista) {
		super();
		this.id_album = id_album;
		this.genero = genero;
		this.discografica = discografica;
		this.nombre_album = nombre_album;
		this.fecha_public = fecha_public;
		this.artista = artista;
	}

	public long getId_album() {
		return id_album;
	}

	public void setId_album(long id_album) {
		this.id_album = id_album;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getDiscografica() {
		return discografica;
	}

	public void setDiscografica(String discografica) {
		this.discografica = discografica;
	}

	public String getNombre_album() {
		return nombre_album;
	}

	public void setNombre_album(String nombre_album) {
		this.nombre_album = nombre_album;
	}

	public Date getFecha_public() {
		return fecha_public;
	}

	public void setFecha_public(Date fecha_public) {
		this.fecha_public = fecha_public;
	}

	public Artista getArtista() {
		return artista;
	}

	public void setArtista(Artista artista) {
		this.artista = artista;
	}

}
