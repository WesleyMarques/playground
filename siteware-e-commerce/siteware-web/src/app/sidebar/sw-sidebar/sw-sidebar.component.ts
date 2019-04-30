import { Component, OnInit } from '@angular/core';

import { OrderService } from 'src/app/shared/order.service';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-sw-sidebar',
  templateUrl: './sw-sidebar.component.html',
  styleUrls: ['./sw-sidebar.component.scss']
})
export class SwSidebarComponent implements OnInit {

  activeOrder:Order;
  constructor(private _orderService:OrderService) {
  }

  ngOnInit() {
    this.activeOrder = this._orderService.getCurrentOrder();
  }

  getOrderSize():number{
    return this.activeOrder.size();
  }

}
