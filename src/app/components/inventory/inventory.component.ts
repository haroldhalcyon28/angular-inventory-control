import { SocketService } from './../../services/socket.service';
import { InventoryService } from './../../services/inventory.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


declare var $: any;
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {



  inventoryInfo = [] ;
  constructor(public inventoryService: InventoryService, public socketService: SocketService) { }

  ngOnInit() {


    this.inventoryService.getInventories().subscribe(data => {
        console.log('List of inventories', data.result);
        for (let i = 0; i < data.result.length; i++) {
          this.inventoryInfo.push(data.result[i]);
        }
      });

      this.socketService.socket.on('newComment', (data) => {
        this.updateObject(data);
      });

      this.socketService.socket.on('newPhoto', (data) => {
        this.updateObject(data);
      });

      this.socketService.socket.on('newInventory', (data) => {
        this.inventoryInfo.push(data);
      });


  }


  // To update specific object only
  updateObject(newItem) {
    const updateItem = this.inventoryInfo.find(this.findIndexToUpdate, newItem._id);
    const index = this.inventoryInfo.indexOf(updateItem);
    this.inventoryInfo[index] = newItem;
  }

  // Look for the index
  findIndexToUpdate(newItem) {
    return newItem._id === this;
  }

  details(id) {
    this.inventoryService.getInventory(id).subscribe(data => {
      console.log(data);
    });
  }


}



