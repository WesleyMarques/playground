import { Promotion } from "src/app/shared/models/promotion.model";
import { Promotable } from "src/app/shared/interfaces/promotable.interface";


export class PromotionPayTake extends Promotion implements Promotable{
  discount_percent: number;

  constructor(quantidade: number, discount: number){
    super(quantidade, "Pague 1 e Leve 2");
    this.discount_percent = discount;
  }

  calcDiscount(){
    return 0;
  }
}
