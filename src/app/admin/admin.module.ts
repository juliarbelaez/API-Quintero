import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ListaestudiantesModule } from './pages/listaestudiantes/listaestudiantes.module';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { CursosModule } from './pages/cursos/cursos.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    ListaestudiantesModule,
    MatFormFieldModule,
    MatDividerModule,
    RouterModule,
    CursosModule,
    MatListModule,
  ],
  exports: [AdminComponent],
})
export class AdminModule {}
