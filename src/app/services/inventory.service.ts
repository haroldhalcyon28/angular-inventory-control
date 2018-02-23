import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class InventoryService {

  basePath = 'http://192.168.1.197:8080';

  constructor(public http: Http) { }

  getInventories() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.basePath + '/inventory/items', { headers: headers })
      .map(res => res.json());
  }

  getInventory(id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.basePath + '/inventory/item/' + id, {headers: headers})
      .map(res => res.json());
  }

}
