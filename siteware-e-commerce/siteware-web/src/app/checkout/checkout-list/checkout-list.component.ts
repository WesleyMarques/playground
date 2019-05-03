import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material';

import { Order } from 'src/app/shared/models/order.model';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.scss']
})
export class CheckoutListComponent implements OnInit {

  @Input() order: Order;
  @ViewChild(MatTable) table: MatTable<any>;

  displayedColumns: string[] = ['name', 'quantidade', 'price', 'discount', 'total'];
  items: Item[] = [];

  constructor() {
    if(!this.order){
      this.order = new Order();
    }
  }

  ngOnInit() {
    this.items = this.order && this.order.getItems();
  }

  hasItems() {
    return this.items && this.items.length > 0;
  }

  removeItem(item: Item) {
    item.quantidade <= 0 && this.order.removeItem(item);
    this.table.renderRows();
  }
}
