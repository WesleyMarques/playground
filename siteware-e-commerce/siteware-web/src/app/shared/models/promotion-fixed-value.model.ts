import { Promotion } from "src/app/shared/models/promotion.model";
import { Promotable } from "src/app/shared/interfaces/promotable.interface";

export class PromotionFixedValue extends Promotion implements Promotable{

  discount_fixed: number;

  constructor(quantidade: number, discount: number){
    super(quantidade, "3 por 10");
    this.discount_fixed = discount/100.0;
  }

  calcDiscount(){

    return 0;
  }
}
