import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
})
export class TarjetaComponent implements OnInit {
  @Input() ancho = 1;
  @Input() alto = 1;
  @Input() titulo = 'Titulo';
  @Input() imagen = 'Titulo';
  @Input() pulsado = false;
  @Output() despulsado = new EventEmitter<boolean>();
  @Output() siguiente = new EventEmitter<boolean>();
  @Output() anterior = new EventEmitter<boolean>();
  constructor() {}
  cerrar() {
    this.despulsado.emit(true);
  }
  ngOnInit() {}

  ant() {
    this.anterior.emit(true);
  }
  sig() {
    this.siguiente.emit(true);
  }
}
