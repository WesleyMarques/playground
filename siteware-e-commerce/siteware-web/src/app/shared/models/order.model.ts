import * as _ from 'lodash';

import { Item } from 'src/app/shared/models/item.model';


export class Order{
  id:number;
  items:Item[];
  discount:number;

  constructor(){
    this.items = [];
  }

  isEmpty(){
    return this.size() == 0;
  }

  hasItem(item:Item){
    return this.findItem(item);
  }

  findIndexItem(item:Item){
    return _.findIndex(this.items, (currItem:Item) => currItem.getProduct().getId() == item.getProduct().getId());
  }

  findItem(item:Item){
    let itemPos = _.findIndex(this.items, (currItem:Item) => currItem.getProduct().getId() == item.getProduct().getId());
    return itemPos >= 0?this.items[itemPos]:undefined;
  }

  updateItem(item:Item){
    let itemToUpdate = this.findItem(item);
    _.merge(itemToUpdate,item);
  }

  removeItem(item:Item){
    let itemPos = this.findIndexItem(item);
    this.items.splice(itemPos,1);
  }

  size():number{
    return this.items.length;
  }

  getItems(){
    return this.items;
  }

  getAmountOfDiscount(){
    let amount = 0;
    for(let item of this.items){
      amount += item.getDiscount();
    }
    return amount;
  }

  getSubTotal(){
    let amount = 0;
    for(let item of this.items){
      amount += item.getTotal();
    }
    return amount;
  }

  getTotal(){
    return this.getSubTotal() - this.getAmountOfDiscount();
  }
}
