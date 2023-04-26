import { Component, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogoformularioComponent } from './dialogoformulario/dialogoformulario.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EstudianteService } from './services/estudiante.service';

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
  dataSource = new MatTableDataSource<Estudiante>();

  displayedColumns: string[] = [
    'id',
    'nombreCompleto',
    'curso',
    'email',
    'fecharegistro',
    'detail',
    'eliminar',
    'editar',
  ];

  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }

  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private estudianteService: EstudianteService
  ) {
    this.estudianteService.obtenerEstudiantes().subscribe((estudiantes) => {
      this.dataSource.data = estudiantes;
    });
  }

  irAlDetalle(estudiantesId: number): void {
    this.router.navigate([estudiantesId], {
      relativeTo: this.activatedRoute,
    });
  }

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
  editarEstudiante(editedEstudiante: Estudiante): void {
    const dialog = this.matDialog.open(DialogoformularioComponent, {
      data: {
        editedEstudiante,
      },
    });
    dialog.afterClosed().subscribe((editedEstudianteData) => {
      if (editedEstudianteData) {
        this.dataSource.data = this.dataSource.data.map((estudianteActual) =>
          estudianteActual.id === editedEstudiante.id
            ? { ...estudianteActual, ...editedEstudianteData }
            : estudianteActual
        );
      }
    });
  }
}
