import { Component, OnInit } from '@angular/core';

import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-sw-sidebar',
  templateUrl: './sw-sidebar.component.html',
  styleUrls: ['./sw-sidebar.component.scss']
})
export class SwSidebarComponent implements OnInit {

  constructor(private _orderService:OrderService) {
  }

  ngOnInit() {
  }

  getOrderSize():number{
    return this._orderService.getCurrentOrder().size();
  }

}
