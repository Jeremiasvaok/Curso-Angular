import { Component } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent {
  //Property Binding
  urlImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
  texto = 'esto es un texto'
  desabilitar = false

  //Event Binding
   numero = 0

   Incrementar(){
    this.numero += 1
   }

   Decrementar(){
    if(this.numero > 0){
      this.numero -= 1
    }
   }

   Reiniciar(){
    this.numero = 0
   }

   //Two Way Binding

   numero1= 0
   numero2= 0
   resultado = 0

   Suma(){
    this.resultado = this.numero1 + this.numero2
   }
   Resta(){
    this.resultado = this.numero1 - this.numero2
   }
   Multiplicacion(){
    this.resultado = this.numero1 * this.numero2
   }

   division(){
    this.resultado = this.numero1 / this.numero2
   }
  Porcentaje(){
    let resultado2 = this.numero1 * this.numero2
    this.resultado = resultado2 / 100


  }
}

