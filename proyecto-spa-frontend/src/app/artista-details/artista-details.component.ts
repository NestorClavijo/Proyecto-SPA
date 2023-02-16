import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artista } from '../artista';
import { ArtistaService } from '../artista.service';

@Component({
  selector: 'app-artista-details',
  templateUrl: './artista-details.component.html',
  styleUrls: ['./artista-details.component.css']
})
export class ArtistaDetailsComponent implements OnInit{

  id:number;
  artista:Artista;

  constructor(private servicio:ArtistaService,private route:ActivatedRoute,private router:Router) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.artista = new Artista();
    this.servicio.obtenerArtista(this.id).subscribe({
      next : dato => {
        this.artista = dato;
      },
      error : err => {
        console.log(err);
      }
    });
  }

  regresar(){
    this.router.navigate(['/']);
  }
}
