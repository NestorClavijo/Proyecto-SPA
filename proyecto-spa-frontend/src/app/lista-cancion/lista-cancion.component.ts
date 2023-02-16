import { Cancion } from '../cancion';
import { Component,OnInit } from '@angular/core';
import { ArtistaService } from '../artista.service';

@Component({
  selector: 'app-lista-cancion',
  templateUrl: './lista-cancion.component.html',
  styleUrls: ['./lista-cancion.component.css']
})
export class ListaCancionComponent implements OnInit{
  canciones:Cancion[];
  constructor(private servicio:ArtistaService){

  }

  ngOnInit(): void {
    this.obtenerCanciones();

  }
  private obtenerCanciones(){
    this.servicio.obtenerListaDeCanciones().subscribe(dato =>{
      this.canciones = dato;
    });
  }
}

