import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Curso } from '../models';
import { CrearCursoPayload } from '../models/index';
import { map } from 'rxjs';

const CURSOS_MOCKS: Curso[] = [
  {
    id: 11,
    nombre: 'INGLÉS A1',
    fechaInicio: new Date(),
    fechaFin: new Date(),
  },
  {
    id: 12,
    nombre: 'INGLÉS A2',
    fechaInicio: new Date(),
    fechaFin: new Date(),
  },
  {
    id: 21,
    nombre: 'INGLÉS B1',
    fechaInicio: new Date(),
    fechaFin: new Date(),
  },
  {
    id: 22,
    nombre: 'INGLÉS B2',
    fechaInicio: new Date(),
    fechaFin: new Date(),
  },
  {
    id: 31,
    nombre: 'INGLÉS C1',
    fechaInicio: new Date(),
    fechaFin: new Date(),
  },
  {
    id: 41,
    nombre: 'FRANCÉS A1',
    fechaInicio: new Date(),
    fechaFin: new Date(),
  },
  {
    id: 42,
    nombre: 'FRANCÉS A2',
    fechaInicio: new Date(),
    fechaFin: new Date(),
  },
  {
    id: 51,
    nombre: 'FRANCÉS B1',
    fechaInicio: new Date(),
    fechaFin: new Date(),
  },
  {
    id: 52,
    nombre: 'FRANCÉS B2',
    fechaInicio: new Date(),
    fechaFin: new Date(),
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
      complete: () => {},
      error: () => {},
    });
    return this.cursos$.asObservable();
  }
  editarCurso(
    cursoId: number,
    actualizacion: Partial<Curso>
  ): Observable<Curso[]> {
    this.cursos$.pipe(take(1)).subscribe({
      next: (cursos) => {
        const cursosActualizados = cursos.map((curso) => {
          if (curso.id === cursoId) {
            return {
              ...curso,
              ...actualizacion,
            };
          } else {
            return curso;
          }
        });

        this.cursos$.next(cursosActualizados);
      },
      complete: () => {},
      error: () => {},
    });

    return this.cursos$.asObservable();
  }
  eliminarCurso(cursoId: number): Observable<Curso[]> {
    this.cursos$.pipe(take(1)).subscribe({
      next: (cursos) => {
        const cursosActualizados = cursos.filter(
          (curso) => curso.id !== cursoId
        );
        this.cursos$.next(cursosActualizados);
      },
      complete: () => {},
      error: () => {},
    });

    return this.cursos$.asObservable();
  }

  getCursoById(cursoId: number): Observable<Curso | undefined> {
    return this.cursos$
      .asObservable()
      .pipe(map((cursos) => cursos.find((c) => c.id === cursoId)));
  }
}
