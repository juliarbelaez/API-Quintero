import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { EstudianteDetalleComponent } from './pages/listaestudiantes/pages/estudiante-detalle/estudiante-detalle.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, EstudianteDetalleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AdminModule,
    MatDividerModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
