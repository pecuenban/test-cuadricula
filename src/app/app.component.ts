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
  cantidad = 10;
  alto = 5;
  ngOnInit() {
    this.http
      .get(
        'https://api.unsplash.com/photos/random?client_id=xk4oMBk4AZMJfcdCl_T0h2PNVerED0fdauHF6SxqgKg&count=' +
          this.cantidad
      )
      .subscribe(value => {
        this.conversion(value).forEach(element => {
          let imagen = {
            url: element.urls.small,
            alto: 1,
            ancho: 1,
            titulo: element.user.name
          };
          this.imagenes.push(imagen);
        });
      });
  }

  conversion(data) {
    return data;
  }
  //urls
}
