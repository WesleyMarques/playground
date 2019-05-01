import { Promotion } from "src/app/shared/models/promotion.model";
import { Promotable } from "src/app/shared/interfaces/promotable.interface";

export class PromotionFixedValue extends Promotion implements Promotable{

  discount_fixed: number;

  constructor(quantidade: number, discount: number, label: string){
    super(quantidade, label);
    this.discount_fixed = discount/100.0;
  }

  calcDiscount(quantidade:number, price:number){
    const discountQuantity = Math.floor(quantidade/this.quantidade);
    const canApplyDiscount = (this.quantidade*price)>this.discount_fixed && discountQuantity > 0;
    const modQuantity = quantidade%this.quantidade;
    const dicountByGroup = (discountQuantity*this.discount_fixed)+(modQuantity*price)
    const realDiscount = canApplyDiscount?(quantidade*price)-dicountByGroup:0;
    return realDiscount;
  }
}
