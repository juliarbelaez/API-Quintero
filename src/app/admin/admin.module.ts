import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { ListaestudiantesModule } from '../pages/listaestudiantes/listaestudiantes.module';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ToolbarModule,
    MatTableModule,
    ListaestudiantesModule,
    MatFormFieldModule,
    MatDividerModule,
  ],
  exports: [AdminComponent],
})
export class AdminModule {}
