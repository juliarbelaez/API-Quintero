import { Component, OnInit } from '@angular/core';
import { CursosService } from './services/cursos.service';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from './models/index';
import { MatDialog } from '@angular/material/dialog';
import { DialogoformularioComponent } from './components/dialogoformulario/dialogoformulario.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent {
  dataSource = new MatTableDataSource();
  constructor(
    private cursosService: CursosService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cursosService.obtenerCursos().subscribe({
      next: (cursos) => {
        this.dataSource.data = cursos;
      },
    });
  }

  abrirDialogoFormulario(): void {
    this.matDialog.open(DialogoformularioComponent);
  }
  aplicarFiltros(ev: Event): void {}
  irAlDetalle(cursoId: number): void {}
  eliminarCurso(curso: Curso): void {}
  editarCurso(curso: Curso): void {}

  displayedColumns: string[] = [
    'id',
    'nombreCurso',
    'fechaInicio',
    'fechaFin',
    'detail',
    'editar',
    'eliminar',
  ];
}
