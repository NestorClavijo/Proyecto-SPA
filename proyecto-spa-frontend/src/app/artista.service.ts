import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './album';
import { Artista } from './artista';
import { Cancion } from './cancion';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  //Esta URL obtiene el listado de todos los artistas en el backend 
  private artistaURL = 'http://localhost:8080/api/v1/artistas';
  private albumURL = 'http://localhost:8080/api/v1/albums';
  private cancionURL = 'http://localhost:8080/api/v1/canciones';
  constructor(private httpClient:HttpClient) { }

  //Este metodo nos sirve para obtener los empleados en el backend
  obtenerListaDeArtistas():Observable<Artista[]>{
    return this.httpClient.get<Artista[]>(this.artistaURL);
  }
  //Este metodo nos sirve para obtener los albums en el backend
  obtenerListaDeAlbums():Observable<Album[]>{
    return this.httpClient.get<Album[]>(this.albumURL);
  }
  //Este metodo nos sirve para obtener las canciones en el backend
  obtenerListaDeCanciones():Observable<Cancion[]>{
    return this.httpClient.get<Cancion[]>(this.cancionURL);
  }

  //Este metodo nos sirve para registrar un artista 
  registrarArtista(artista:Artista):Observable<Object>{
    return this.httpClient.post<Artista>(this.artistaURL,artista);
  }

  registrarAlbum(album:Album):Observable<Object>{
    return this.httpClient.post<Album>(this.albumURL,album);
  }

  obtenerArtista(id:number):Observable<Artista>{
    return this.httpClient.get<Artista>(`${this.artistaURL}/${id}`);
  }

  actualizarArtista(id:number,artista:Artista):Observable<Object>{
    return this.httpClient.put(`${this.artistaURL}/${id}`,artista);
  }

  eliminarArtista(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.artistaURL}/${id}`);
  }
}
