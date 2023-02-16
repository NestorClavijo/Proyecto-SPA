import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaArtistasComponent } from './lista-artistas/lista-artistas.component';
import { ListaAlbumsComponent } from './lista-albums/lista-albums.component';
import { RegistrarArtistaComponent } from './registrar-artista/registrar-artista.component';
import { RegistrarAlbumComponent } from './registrar-album/registrar-album.component';
import { RegistrarCancionComponent } from './registrar-cancion/registrar-cancion.component';
import { ActualizarArtistaComponent } from './actualizar-artista/actualizar-artista.component';
import { ArtistaDetailsComponent } from './artista-details/artista-details.component';

const routes: Routes = [
  {path:'artistas',component:ListaArtistasComponent},
  {path:'albums',component:ListaAlbumsComponent},
  {path:'' ,redirectTo:'artistas',pathMatch:'full'},
  {path:'registrar-artista', component:RegistrarArtistaComponent},
  {path:'registrar-album', component:RegistrarAlbumComponent},
  {path:'registrar-artista', component:RegistrarCancionComponent},
  {path:'actualizar-artista/:id', component:ActualizarArtistaComponent},
  {path:'artista-detalles/:id', component:ArtistaDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
