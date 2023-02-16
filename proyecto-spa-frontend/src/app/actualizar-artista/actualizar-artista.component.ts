import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artista } from '../artista';
import { ArtistaService } from '../artista.service';

@Component({
  selector: 'app-actualizar-artista',
  templateUrl: './actualizar-artista.component.html',
  styleUrls: ['./actualizar-artista.component.css']
})
export class ActualizarArtistaComponent implements OnInit{

  id:number;
  artista:Artista = new Artista();
  constructor(private servicio:ArtistaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.servicio.obtenerArtista(this.id).subscribe(dato =>{
      this.artista = dato;
    },error => console.log(error));
  }

  irAlaListaDeArtistas(){
    this.router.navigate(['/artistas']);
  }

  onSubmit(){
    this.servicio.actualizarArtista(this.id,this.artista).subscribe(dato => {
      this.irAlaListaDeArtistas();
    },error => console.log(error));
  }

  regresar(){
    this.router.navigate(['/']);
  }

}
