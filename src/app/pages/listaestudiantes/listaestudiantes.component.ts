import { Component, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogoformularioComponent } from './dialogoformulario/dialogoformulario.component';

interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  curso: string;
  fecharegistro: Date;
}

@Component({
  selector: 'app-listaestudiantes',
  templateUrl: './listaestudiantes.component.html',
  styleUrls: ['./listaestudiantes.component.scss'],
})
export class ListaestudiantesComponent {
  estudiantes: Estudiante[] = [
    {
      id: 1036402631,
      nombre: 'Juliana',
      apellido: 'Quintero',
      curso: 'Inglés C1',
      fecharegistro: new Date(),
    },
    {
      id: 1039453161,
      nombre: 'Alejandro',
      apellido: 'Calderón',
      curso: 'Inglés B2',
      fecharegistro: new Date(),
    },
    {
      id: 1040887368,
      nombre: 'Gabriel',
      apellido: 'Calderón',
      curso: 'Inglés A1',
      fecharegistro: new Date(),
    },
  ];
  dataSource = new MatTableDataSource(this.estudiantes);

  displayedColumns: string[] = [
    'id',
    'nombre',
    'apellido',
    'curso',
    'fecharegistro',
  ];

  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue.trim().toLowerCase();
  }
  constructor(private matDialog: MatDialog, private cdr: ChangeDetectorRef) {}
  abrirDialogoFormulario(): void {
    const dialog = this.matDialog.open(DialogoformularioComponent);
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        console.log(this.dataSource.data);
        console.log(valor);
        this.dataSource.data = [...this.dataSource.data, valor];
        console.log(this.dataSource.data);
        this.cdr.markForCheck();
      }
    });
  }
}
