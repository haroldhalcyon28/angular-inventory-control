import { InventoryService } from './../../services/inventory.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-inventory-content',
  templateUrl: './inventory-content.component.html',
  styleUrls: ['./inventory-content.component.css']
})
export class InventoryContentComponent implements OnInit {
  inventory = {
    product: {
      item_name : '',
      barcode_id : 0,
      price: 0,
      description: '',
    },
    qty: 0,
    unit: '',
    createdAt: 0,
    comment: {
      msg: ''
    },
    photos: []

  };
  constructor(public route: ActivatedRoute, public inventoryService: InventoryService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.inventoryService.getInventory(param.id).subscribe(data => {
        console.log(data);
        if (data.success) {
          this.inventory = data.result;
        } else { alert(data.msg); }
      })
    })
  }

}
