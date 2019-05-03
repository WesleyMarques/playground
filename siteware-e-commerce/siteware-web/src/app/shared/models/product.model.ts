import { Resource } from '../resource';
import { Promotion } from 'src/app/shared/models/promotion.model';

export class Product extends Resource {
  name: string;
  price: number;
  promotion: Promotion;

  hasPromotion(){
    return Boolean(this.promotion);
  }
}
