import { Component, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogoformularioComponent } from './dialogoformulario/dialogoformulario.component';

export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  curso: string;
  email: string;
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
      email: 'juliana@gmail.com',
      fecharegistro: new Date('2022-04-20'),
    },
    {
      id: 1039453161,
      nombre: 'Alejandro',
      apellido: 'Calderón',
      curso: 'Inglés B2',
      email: 'alejandro@gmail.com',
      fecharegistro: new Date('2021-01-20'),
    },
    {
      id: 1040887368,
      nombre: 'Gabriel',
      apellido: 'Calderón',
      curso: 'Inglés A1',
      email: 'gabriel@gmail.com',
      fecharegistro: new Date('2019-08-13'),
    },
    {
      id: 43467507,
      nombre: 'Alejandra',
      apellido: 'Martínez',
      curso: 'Inglés A1',
      email: 'alejandra@gmail.com',
      fecharegistro: new Date('2015-12-07'),
    },
    {
      id: 98736462,
      nombre: 'Claudia',
      apellido: 'Zapata',
      curso: 'Inglés A2',
      email: 'claudia@gmail.com',
      fecharegistro: new Date('2016-05-07'),
    },
    {
      id: 7654397,
      nombre: 'Emiliana',
      apellido: 'García',
      curso: 'Francés A1',
      email: 'emiliana@gmail.com',
      fecharegistro: new Date('2023-01-07'),
    },
    {
      id: 1035628744,
      nombre: 'Juan',
      apellido: 'Valdez',
      curso: 'Inglés B2',
      email: 'juan@gmail.com',
      fecharegistro: new Date('2018-03-21'),
    },
    {
      id: 1036402631,
      nombre: 'Andrés',
      apellido: 'Quintero',
      curso: 'Inglés C1',
      email: 'andres@gmail.com',
      fecharegistro: new Date('2018-03-21'),
    },
    {
      id: 1039453161,
      nombre: 'Andrea',
      apellido: 'Zapata',
      curso: 'Inglés B2',
      email: 'andrea@gmail.com',
      fecharegistro: new Date('2022-04-21'),
    },
    {
      id: 1040887368,
      nombre: 'Samantha',
      apellido: 'Ramirez',
      curso: 'Inglés A2',
      email: 'samanthal@gmail.com',
      fecharegistro: new Date('2021-06-20'),
    },
    {
      id: 43467507,
      nombre: 'Kim',
      apellido: 'Martínez',
      curso: 'Inglés B1',
      email: 'kim@gmail.com',
      fecharegistro: new Date('2020-03-20'),
    },
    {
      id: 98736462,
      nombre: 'Claudia',
      apellido: 'Garcia',
      curso: 'Inglés A2',
      email: 'claudia@gmail.com',
      fecharegistro: new Date('2023-03-20'),
    },
    {
      id: 7654397,
      nombre: 'Esteban',
      apellido: 'Arbeláez',
      curso: 'Francés A1',
      email: 'esteban@gmail.com',
      fecharegistro: new Date('2021-04-11'),
    },
    {
      id: 1035628744,
      nombre: 'Jorge',
      apellido: 'Valdez',
      curso: 'Inglés B2',
      email: 'jorge@gmail.com',
      fecharegistro: new Date('2018-05-11'),
    },
  ];

  dataSource = new MatTableDataSource(this.estudiantes);

  displayedColumns: string[] = [
    'id',
    'nombreCompleto',
    'curso',
    'email',
    'fecharegistro',
    'eliminar',
  ];

  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }

  constructor(private matDialog: MatDialog) {}

  abrirDialogoFormulario(): void {
    const dialog = this.matDialog.open(DialogoformularioComponent);
    dialog.afterClosed().subscribe((valor) => {
      console.log(valor);
      if (valor) {
        this.dataSource.data = [...this.dataSource.data, { ...valor }];
      }
    });
  }
  eliminarEstudiante(estudiante: Estudiante): void {
    const index = this.dataSource.data.indexOf(estudiante);
    if (index !== -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource.data = [...this.dataSource.data];
    }
  }
}
