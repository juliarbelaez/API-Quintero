import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaestudiantesComponent } from './listaestudiantes.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogoformularioModule } from './dialogoformulario/dialogoformulario.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from 'src/app/share/share.module';
import { PipesModule } from '../../share/pipes/pipes.module';
import { DirectivesModule } from '../../share/directives/directives.module';

@NgModule({
  declarations: [ListaestudiantesComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    DialogoformularioModule,
    ReactiveFormsModule,
    ShareModule,
    PipesModule,
    DirectivesModule,
  ],
  exports: [ListaestudiantesComponent],
})
export class ListaestudiantesModule {}
