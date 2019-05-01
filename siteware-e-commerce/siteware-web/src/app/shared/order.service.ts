import { Injectable } from '@angular/core';

import { Order } from 'src/app/shared/models/order.model';
import { Item } from 'src/app/shared/models/item.model';
import { Product } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  currentOrder: Order;

  constructor() {
  }

  getCurrentOrder():Order{
    if(!this.currentOrder){
      this.currentOrder = new Order();
    }
    return this.currentOrder;
  }

  addItem(product:Product){
    let newItem = new Item(product);
    let itemInOrder = this.currentOrder.hasItem(newItem);
    if(itemInOrder){
      itemInOrder.increaseQuantidade();
      return this.updateItem(itemInOrder);
    }
    this.currentOrder.items.push(newItem);
  }

  updateItem(item:Item){
    this.currentOrder.updateItem(item);
  }

  calcDiscount(){
    let amount = 0;
    for(let item of this.currentOrder.getItems()){
      amount += item.getDiscount();
    }
    return amount;
  }

  payOrder(){
    this.currentOrder = new Order();
  }
}
