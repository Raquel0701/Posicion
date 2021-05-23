import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DIDI APP1';
  focusMethod() {
  
    //document.getElementById('posicion').style.color = 'red';
    console.log("estas aruqi")
  }

  tamanoVentanaNavegador() {
    var dimensiones = [];

    if (typeof window.innerWidth == 'number') {
      // No es IE
      dimensiones = [window.innerWidth, window.innerHeight];
      //console.log(dimensiones);
    } else if (
      document.documentElement &&
      (document.documentElement.clientWidth ||
        document.documentElement.clientHeight)
    ) {
      //IE 6 en modo estandar (no quirks)
      dimensiones = [
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
      ];
    } else if (
      document.body &&
      (document.body.clientWidth || document.body.clientHeight)
    ) {
      //IE en modo quirks
      dimensiones = [document.body.clientWidth, document.body.clientHeight];
    }
    console.log(dimensiones);
    return dimensiones;
  }
}
