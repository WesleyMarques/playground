import { Promotion } from "src/app/shared/models/promotion.model";
import { Promotable } from "src/app/shared/interfaces/promotable.interface";


export class PromotionPayTake extends Promotion implements Promotable{
  discount_percent: number;

  constructor(quantidade: number, discount: number, label: string){
    super(quantidade, label);
    this.discount_percent = discount;
  }

  calcDiscount(quantidade:number,price:number){
    const discountQuantity = Math.floor(quantidade/this.quantidade);
    const modQuantity = quantidade%this.quantidade;
    const dicountByGroup = (discountQuantity*this.quantidade*price*this.discount_percent)+(modQuantity*price)
    const realDiscount = discountQuantity>0?(quantidade*price)-dicountByGroup:0;
    return realDiscount;
  }
}
