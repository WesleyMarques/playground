import { Component, OnInit } from '@angular/core';

import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.scss']
})
export class CheckoutListComponent implements OnInit {

  activeOrder:Order;

  constructor(private _orderService:OrderService) {
    this.activeOrder = this._orderService.getCurrentOrder();
  }

  ngOnInit() {
  }

  displayedColumns: string[] = ['item', 'quantidade', 'cost'];
  transactions: any[] = [
    { item: 'Beach ball', quantidade:1, cost: 4 },
    { item: 'Towel', quantidade:1, cost: 5 },
    { item: 'Frisbee', quantidade:1, cost: 2 },
    { item: 'Sunscreen', quantidade:1, cost: 4 },
    { item: 'Cooler', quantidade:1, cost: 25 },
    { item: 'Swim suit', quantidade:1, cost: 15 },
  ];

}
