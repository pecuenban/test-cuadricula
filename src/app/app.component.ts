import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  constructor(private http: HttpClient) {}
  url;
  imagenes = [];
  cantidad = 15;
  alto = 5;
  bloques_ancho = 5;
  ngOnInit() {
    this.http
      .get(
        'https://api.unsplash.com/photos/random?client_id=xk4oMBk4AZMJfcdCl_T0h2PNVerED0fdauHF6SxqgKg&count=' +
          this.cantidad
      )
      .subscribe(value => {
        let linea = this.bloques_ancho;
        this.conversion(value).forEach(element => {
          console.log('linea: ' + linea);
          let empezar = false;
          let anch = linea - this.getRandomInt(1, this.bloques_ancho - 1);
          console.log('anch: ' + anch);
          if (anch < 1) {
            anch = linea;
            empezar = true;
          }
          console.log('anch 2: ' + anch);
          let imagen = {
            url: element.urls.small,
            alto: 1,
            ancho: anch,
            titulo: element.user.name
          };
          if (empezar) {
            linea = this.bloques_ancho;
          } else {
            linea = linea - anch;
          }
          this.imagenes.push(imagen);
        });
      });
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  conversion(data) {
    return data;
  }
  //urls
}
