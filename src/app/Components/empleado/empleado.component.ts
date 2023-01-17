import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent {
 nombre = 'juan';
 apellido = 'vallejos';
  edad = 44;
 empresa = 'Municipalidad de Ramallo'

//   getEdad(){
//    return this.edad;
//  }
}

