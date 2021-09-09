import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
@Input() ancho=1;
@Input() alto=1;
@Input() titulo="Titulo";
@Input() imagen="Titulo";
  constructor() { }

  ngOnInit() {
  }

}