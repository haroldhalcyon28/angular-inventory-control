import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ProductsService {

   basePath = 'http://localhost:8080';

  constructor(public http: Http) { }


  getItems() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

   return this.http.get(this.basePath + '/product/items', { headers: headers })
      .map(res => res.json());
  }

  getItemByBarcode(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.basePath + '/product/item/' + id, { headers: headers })
      .map(res => res.json());
  }

}
