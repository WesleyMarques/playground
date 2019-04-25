import { Promotion } from "src/app/shared/models/promotion.model";
import { Promotable } from "src/app/shared/interfaces/promotable.interface";


export class PromotionPayTake extends Promotion implements Promotable{
  calcDiscount(){
    return 0;
  }
}
