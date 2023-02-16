package com.gestion.artistas.modelo;


import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="artistas") 
public class Artista {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "nombre",length=60,nullable=false)
	private String nombre;
	
	@Column(name = "nacionalidad",length=60,nullable=false)
	private String nacionalidad;
	
	@Column(name = "religion",length=60,nullable=false)
	private String religion;
	
	@Column(name = "fecha_nac",nullable=false)
	private Date fecha_nac;
	
	public Artista() {
		super();
	}

	public Artista(long id, String nombre, String nacionalidad, String religion, Date fecha_nac) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.nacionalidad = nacionalidad;
		this.religion = religion;
		this.fecha_nac = fecha_nac;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getNacionalidad() {
		return nacionalidad;
	}

	public void setNacionalidad(String nacionalidad) {
		this.nacionalidad = nacionalidad;
	}

	public String getReligion() {
		return religion;
	}

	public void setReligion(String religion) {
		this.religion = religion;
	}

	public Date getFecha_nac() {
		return fecha_nac;
	}

	public void setFecha_nac(Date fecha_nac) {
		this.fecha_nac = fecha_nac;
	}
}


