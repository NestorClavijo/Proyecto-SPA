import { Album } from '../album';
import { Component,OnInit } from '@angular/core';
import { ArtistaService } from '../artista.service';

@Component({
  selector: 'app-lista-albums',
  templateUrl: './lista-albums.component.html',
  styleUrls: ['./lista-albums.component.css']
})
export class ListaAlbumsComponent implements OnInit{
  albums:Album[];
  constructor(private servicio:ArtistaService){

  }

  ngOnInit(): void {
    this.obtenerAlbums();

  }
  private obtenerAlbums(){
    this.servicio.obtenerListaDeAlbums().subscribe(dato =>{
      this.albums = dato;
    });
  }
}