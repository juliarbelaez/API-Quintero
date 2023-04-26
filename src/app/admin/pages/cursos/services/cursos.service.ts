import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Curso } from '../models';
import { CrearCursoPayload } from '../models/index';

const CURSOS_MOCKS: Curso[] = [
  {
    id: 11,
    nombre: 'INGLÉS A1',
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
  },
  {
    id: 12,
    nombre: 'INGLÉS A2',
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
  },
  {
    id: 21,
    nombre: 'INGLÉS B1',
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
  },
  {
    id: 22,
    nombre: 'INGLÉS B2',
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
  },
  {
    id: 31,
    nombre: 'INGLÉS C1',
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
  },
  {
    id: 41,
    nombre: 'FRANCÉS A1',
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
  },
  {
    id: 42,
    nombre: 'FRANCÉS A2',
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
  },
  {
    id: 51,
    nombre: 'FRANCÉS B1',
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
  },
  {
    id: 52,
    nombre: 'FRANCÉS B2',
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
  },
];

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursos$ = new BehaviorSubject<Curso[]>([]);
  constructor() {}

  obtenerCursos(): Observable<Curso[]> {
    this.cursos$.next(CURSOS_MOCKS);
    return this.cursos$.asObservable();
  }
  crearCursos(payload: CrearCursoPayload): Observable<Curso[]> {
    this.cursos$.pipe(take(1)).subscribe({
      next: (cursos) => {
        this.cursos$.next([
          ...cursos,
          {
            id: cursos.length + 1,
            ...payload,
          },
        ]);
      },
    });
    return this.cursos$.asObservable();
  }
}
