import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Subject,
  Observable,
  map,
  catchError,
  throwError,
} from 'rxjs';
import { Estudiante } from 'src/app/admin/pages/listaestudiantes/listaestudiantes.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface LoginFormValue {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private authUser$ = new BehaviorSubject<Estudiante | null>(null);
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  obtenerUsuarioAutenticado(): Observable<Estudiante | null> {
    return this.authUser$.asObservable();
  }
  login(formValue: LoginFormValue): void {
    this.httpClient
      .get<Estudiante[]>(
        `http://localhost:3000/usuarios?email=${formValue.email}&password=${formValue.password}`
      )
      .subscribe({
        next: (estudiantes) => {
          const usuarioAutenticado = estudiantes[0];
          if (usuarioAutenticado) {
            localStorage.setItem('token', usuarioAutenticado.token);
            this.authUser$.next(usuarioAutenticado);
            this.router.navigate(['admin']);
          } else {
            this.snackBar.open('¡Usuario y contraseña incorrectos!', 'Cerrar', {
              duration: 3000,
            });
          }
        },
      });
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.authUser$.next(null);
    this.router.navigateByUrl('/auth/login');
  }
  verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return this.httpClient
      .get<Estudiante[]>(`http://localhost:3000/usuarios?token=${token}`, {
        headers: new HttpHeaders({
          Authorization: token || '',
        }),
      })
      .pipe(
        map((estudiantes) => {
          const estudianteAutenticado = estudiantes[0];
          if (estudianteAutenticado) {
            localStorage.setItem('token', estudianteAutenticado.token);
            this.authUser$.next(estudianteAutenticado);
          }
          return !!estudianteAutenticado;
        }),
        catchError((err) => {
          alert('Error al verificar el token');
          return throwError(() => err);
        })
      );
  }
}
