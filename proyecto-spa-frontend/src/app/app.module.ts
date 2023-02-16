import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaArtistasComponent } from './lista-artistas/lista-artistas.component';
import { HttpClientModule} from '@angular/common/http';
import { ListaAlbumsComponent } from './lista-albums/lista-albums.component';
import { ListaCancionComponent } from './lista-cancion/lista-cancion.component';
import { RegistrarArtistaComponent } from './registrar-artista/registrar-artista.component';
import { FormsModule } from '@angular/forms';
import { ArtistaService } from './artista.service';
import { RegistrarAlbumComponent } from './registrar-album/registrar-album.component';
import { RegistrarCancionComponent } from './registrar-cancion/registrar-cancion.component';
import { ActualizarArtistaComponent } from './actualizar-artista/actualizar-artista.component';
import { ArtistaDetailsComponent } from './artista-details/artista-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaArtistasComponent,
    ListaAlbumsComponent,
    ListaCancionComponent,
    RegistrarArtistaComponent,
    RegistrarAlbumComponent,
    RegistrarCancionComponent,
    ActualizarArtistaComponent,
    ArtistaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ArtistaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
