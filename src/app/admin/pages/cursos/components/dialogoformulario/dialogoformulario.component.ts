import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogoformulario',
  templateUrl: './dialogoformulario.component.html',
  styleUrls: ['./dialogoformulario.component.scss'],
})
export class DialogoformularioComponent {
  curso: any[] = [];

  idControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(10),
  ]);
  nombreControl = new FormControl('', [Validators.required]);
  fechaInicio = new FormControl('', Validators.required);
  fechaFin = new FormControl('', Validators.required);

  cursosForm = new FormGroup({
    id: this.idControl,
    nombre: this.nombreControl,
    fechaInicio: this.fechaInicio,
    fechaFin: this.fechaFin,
  });

  constructor(private dialogRef: MatDialogRef<DialogoformularioComponent>) {}
  guardar(): void {
    if (this.cursosForm.valid) {
      this.dialogRef.close(this.cursosForm.value);
    } else {
      this.cursosForm.markAllAsTouched();
    }
  }
}
