import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';
// import * as io from 'socket.io-client';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
declare var $: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // socket = io('http://192.168.1.197:8080', {
  //   reconnect: true,
  //   transports: ['websocket'],
  // });
  title = 'app';

  constructor(public http: Http, public productService: ProductsService) {

  }
  ngOnInit(): void {
    $(document).ready(function () {
      $('.menu .item').tab();
      $('#clicker').click(function () {
        $('.ui.modal').modal('show');
        // alert('nice');
      });
    });
  //  this.productService.getItems().subscribe(data => console.log(data));
  }
}
