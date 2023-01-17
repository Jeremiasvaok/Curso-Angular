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
 habilitacionCuadro= false;
 usuarioRegistrado = false;
// empresa = 'Municipalidad de Ramallo'
textoRegistro= 'No hay nadie resgistrado'

getRegistro(){
  this.usuarioRegistrado=false;
}

setUsuarioRegistrado(event:Event){
  //alert('usuario resgistrado')
//   console.log(event)
//  this.textoRegistro ='Ya se esta resgistrado'
 (<HTMLInputElement>event.target).value === 'si' ? this.textoRegistro ='Ya esta resgistrado' : this.textoRegistro ='No esta resgistrado'
  // este event lo transformamos a un elemento html 
  
// if((<HTMLInputElement>event.target).value === 'si'){
//   this.textoRegistro ='ya esta resgistrado'
// }else{
//   this.textoRegistro ='no esta resgistrado'
// }
}

llamaEmpresa(value:String){}

}

