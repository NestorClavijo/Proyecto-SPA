import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../album';
import { Artista } from '../artista';
import { ArtistaService } from '../artista.service';

@Component({
  selector: 'app-registrar-album',
  templateUrl: './registrar-album.component.html',
  styleUrls: ['./registrar-album.component.css']
})
export class RegistrarAlbumComponent implements OnInit{
  album:Album = new Album();
  artistas:Artista[];

  constructor(private servicio:ArtistaService,private router:Router){ }

  ngOnInit(): void {
    this.obtenerArtistas();
  }

  guardarAlbum(){
    this.servicio.registrarAlbum(this.album).subscribe({
      next : dato => {
        console.log(dato);
        this.router.navigate(['/artistas']);
      },
      error : err => {
        console.log(err);
      }
    });
  }

  albumSubmit(){
    this.guardarAlbum();
  }

  private obtenerArtistas(){
    this.servicio.obtenerListaDeArtistas().subscribe(dato =>{
      this.artistas = dato;
    });
  }
}
