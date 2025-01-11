export interface NoticeCreate {
  titulo: string;
  imagen: string;
  fechaPub?: Date;
  lugar: string;
  autor: string;
  contenido: string;
}

export interface Notice extends NoticeCreate {
  id: number;
}
