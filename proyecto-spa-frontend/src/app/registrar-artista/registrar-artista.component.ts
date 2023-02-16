import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artista } from '../artista';
import { ArtistaService } from '../artista.service';

@Component({
  selector: 'app-registrar-artista',
  templateUrl: './registrar-artista.component.html',
  styleUrls: ['./registrar-artista.component.css']
})
export class RegistrarArtistaComponent implements OnInit{

  artista:Artista = new Artista();

  constructor(private servicio:ArtistaService,private router:Router){ }

  ngOnInit(): void {
    
  }

  guardarArtista(){
    this.servicio.registrarArtista(this.artista).subscribe({
      next : dato => {
        console.log(dato);
        this.router.navigate(['/artistas']);
      },
      error : err => {
        console.log(err);
      }
    });
  }

  artistaSubmit(){
    this.guardarArtista();
  }

  regresar(){
    this.router.navigate(['/']);
  }
}
