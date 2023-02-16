import { Artista } from "./artista";

export class Album {
    id_album:number;
    nombre_album:string;
    discografica:string;
    genero:string;
    fecha_public:Date;
    artista:Artista;
}
