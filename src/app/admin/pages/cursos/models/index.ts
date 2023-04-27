export interface Curso {
  id: number;
  nombre: string;
  fechaInicio: Date;
  fechaFin: Date;
}

export interface CrearCursoPayload {
  nombre: string;
  fechaInicio: Date;
  fechaFin: Date;
}
