import { Promotion } from "src/app/shared/models/promotion.model";
import { Promotable } from "src/app/shared/interfaces/promotable.interface";
import { Product } from 'src/app/shared/models/product.model';

export class PromotionFixedValue extends Promotion implements Promotable{

  discount: number;

  constructor(product: Product, quantidade: number, discount: number){
    super(product, quantidade);
    this.discount = discount;
  }

  calcDiscount(){
    return 0;
  }
}
