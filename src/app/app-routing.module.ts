import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ListaestudiantesComponent } from './admin/pages/listaestudiantes/listaestudiantes.component';
import { CursosComponent } from './admin/pages/cursos/cursos.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { EstudianteDetalleComponent } from './admin/pages/listaestudiantes/pages/estudiante-detalle/estudiante-detalle.component';
import { CursosDetalleComponent } from './admin/pages/cursos/components/cursos-detalle/cursos-detalle.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InscripcionesComponent } from './admin/pages/inscripciones/inscripciones/inscripciones.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminComponent,
    children: [
      {
        path: 'homepage',
        component: HomepageComponent,
      },
      {
        path: 'estudiantes',
        component: ListaestudiantesComponent,
      },
      {
        path: 'estudiantes/:id',
        component: EstudianteDetalleComponent,
      },
      {
        path: 'cursos',
        component: CursosComponent,
      },
      {
        path: 'cursos/:id',
        component: CursosDetalleComponent,
      },
      {
        path: 'inscripciones',
        component: InscripcionesComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard/homepage',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
