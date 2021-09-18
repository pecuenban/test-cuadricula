import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  constructor(private http: HttpClient) {}
  url;
  imagenes = [];
  cantidad = 5;
  alto = 5;
  bloques_ancho = 5;
  cargarImagenes() {
    this.http
      .get(
        'https://api.unsplash.com/photos/random?client_id=xk4oMBk4AZMJfcdCl_T0h2PNVerED0fdauHF6SxqgKg&count=' +
          this.cantidad
      )
      .subscribe((value) => {
        let linea = this.bloques_ancho;
        let contador = 1;
        this.conversion(value).forEach((element) => {
          let empezar = false;
          let anch = linea - this.getRandomInt(1, this.bloques_ancho - 1);

          if (anch < 1 || this.cantidad == contador) {
            anch = linea;
            empezar = true;
          }

          let imagen = {
            url: element.urls.small,
            alto: 1,
            ancho: anch,
            titulo: element.user.name,
            pulsado: false,
          };
          if (empezar) {
            linea = this.bloques_ancho;
          } else {
            linea = linea - anch;
          }
          this.imagenes.push(imagen);
          contador++;
        });
      });
  }
  activo = -1;
  pulsar(indice) {
    if (this.activo == -1) {
      this.imagenes[indice].pulsado = true;
      this.activo = indice;
    }
  }
  despulsar(evento, indice) {
    this.imagenes.forEach((element) => {
      element.pulsado = false;
    });
    setTimeout(() => {
      this.activo = -1;
    }, 100);
    /*if (evento) {
      
      this.imagenes[indice].pulsado = false;
      
    }*/
  }

  anterior($event, i) {
    this.imagenes[this.activo].pulsado = false;
    if (this.activo == 0) {
      this.activo = this.imagenes.length;
    }
    this.imagenes[this.activo - 1].pulsado = true;
    this.activo -= 1;
  }
  siguiente($event, i) {
    this.imagenes[this.activo].pulsado = false;
    if (this.activo == this.imagenes.length - 1) {
      this.activo = -1;
    }
    this.imagenes[this.activo + 1].pulsado = true;
    this.activo += 1;
  }

  ngOnInit() {
    this.cargarImagenes();
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  conversion(data) {
    return data;
  }
  //urls
}
