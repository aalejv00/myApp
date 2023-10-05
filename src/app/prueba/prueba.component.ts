import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit{
  Nombre=" Juan";
  Apellido= "Pérez Fernández";
  DNI= "85745003G";
  Empresa= "NTT Data";

  <!--Dentro de esta función irán las instrucciones que queremos que realice-->
  llamaEmpresa(value: string) {
  }

  constructor(){}
  ngOnInit(): void{}
}
