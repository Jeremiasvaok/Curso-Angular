import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './Components/empleados/empleados.coponent';
import { EmpleadoComponent } from './Components/empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import { ComponentsComponent } from './directivas/components/components.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    ComponentsComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
