import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [FormularioComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  exports: [FormularioComponent],
})
export class FormularioModule {}
