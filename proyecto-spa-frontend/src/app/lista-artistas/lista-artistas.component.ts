import { Artista } from '../artista';
import  swal from 'sweetalert2';
import { Component,OnInit } from '@angular/core';
import { ArtistaService } from '../artista.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-artistas',
  templateUrl: './lista-artistas.component.html',
  styleUrls: ['./lista-artistas.component.css']
})
export class ListaArtistasComponent implements OnInit{
    
  artistas:Artista[];
  constructor(private servicio:ArtistaService, private router:Router){

  }

  ngOnInit(): void {
    this.obtenerArtistas();

  }
  private obtenerArtistas(){
    this.servicio.obtenerListaDeArtistas().subscribe(dato =>{
      this.artistas = dato;
    });
  }
  
  //eliminarArtista(id:number){
  //  this.servicio.eliminarArtista(id).subscribe(dato =>{
  //    console.log(dato);
  //    this.obtenerArtistas();
  //  });
  //}

  editarArtista(id:number){
    this.router.navigate(['actualizar-artista',id]);
  }

  informacionArtista(id:number){
    this.router.navigate(['artista-detalles',id]);
  }

  eliminarArtista(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el artista",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.servicio.eliminarArtista(id).subscribe(dato => {
          console.log(dato);
          this.obtenerArtistas();
          swal(
            'Artista eliminado',
            'El artista ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }
}
