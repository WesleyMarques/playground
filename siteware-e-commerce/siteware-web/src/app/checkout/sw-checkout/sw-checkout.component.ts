import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from 'src/app/shared/order.service';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-sw-checkout',
  templateUrl: './sw-checkout.component.html',
  styleUrls: ['./sw-checkout.component.scss']
})
export class SwCheckoutComponent implements OnInit {

  activedOrder:Order;

  constructor(private _orderService:OrderService, private router: Router) {
  }

  ngOnInit() {
    this.activedOrder = this._orderService.getCurrentOrder();
  }

  finishOrder(){
    this._orderService.payOrder();
    this.activedOrder = this._orderService.getCurrentOrder();
    this.router.navigate(['/']);
  }

}
