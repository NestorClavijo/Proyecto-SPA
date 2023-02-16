package com.gestion.artistas.controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.artistas.repoartista.ArtistaRepositorio;
import com.gestion.artistas.repoartista.CancionRepositorio;
import com.gestion.artistas.repoartista.AlbumRepositorio;
import com.gestion.artistas.excepciones.ResourceNotFoundException;
import com.gestion.artistas.modelo.Album;
import com.gestion.artistas.modelo.Artista;
import com.gestion.artistas.modelo.Cancion;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins="http://localhost:4200")
public class ArtistaControlador {

	@Autowired
	private ArtistaRepositorio repositorioArtistas;
	@Autowired
	private AlbumRepositorio repositorioAlbum;
	@Autowired
	private CancionRepositorio repositorioCancion;

	@GetMapping("/artistas")
	public List<Artista> listarTodosLosArtistas() {
		return repositorioArtistas.findAll();
	}
	
	@GetMapping("/albums")
	public List<Album> listarTodosLosAlbums() {
		return repositorioAlbum.findAll();
	}
	
	@GetMapping("/canciones")
	public List<Cancion> listarTodasLasCanciones() {
		return repositorioCancion.findAll();
	}
	
	@PostMapping("/artistas")
	public Artista guardarArtista(@RequestBody Artista artista) {
		return repositorioArtistas.save(artista);
	}
	
	@PostMapping("/albums")
	public Album guardarAlbum(@RequestBody Album album) {
		return repositorioAlbum.save(album);
	}
	
	@PostMapping("/canciones")
	public Cancion guardarCancion(@RequestBody Cancion cancion) {
		return repositorioCancion.save(cancion);
	}
	@GetMapping("/artistas/{id}")
	public ResponseEntity<Artista> obtenerArtistaPorId(@PathVariable Long id){
		Artista artista = repositorioArtistas.findById(id)
				.orElseThrow(()->new ResourceNotFoundException(("No existe el empleado")));
		return ResponseEntity.ok(artista);
	}
	@PutMapping("/artistas/{id}")
	public ResponseEntity<Artista> actualizarArtistaPorId(@PathVariable Long id, @RequestBody Artista artistanuevo){
		Artista artista = repositorioArtistas.findById(id)
				.orElseThrow(()->new ResourceNotFoundException(("No existe el empleado")));
		
		artista.setNombre(artistanuevo.getNombre());
		artista.setNacionalidad(artistanuevo.getNacionalidad());
		artista.setReligion(artistanuevo.getReligion());
		artista.setFecha_nac(artistanuevo.getFecha_nac());
		
		Artista artistaActualizado = repositorioArtistas.save(artista);
		return ResponseEntity.ok(artistaActualizado);
	}
	@DeleteMapping("/artistas/{id}")
	public ResponseEntity<Map<String,Boolean>> eliminarArtista(@PathVariable Long id){
		Artista artista = repositorioArtistas.findById(id)
				            .orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el ID : " + id));
		
		repositorioArtistas.delete(artista);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar",Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
    }
	
}





