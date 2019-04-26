import { Serializeble } from 'src/app/shared/interfaces/serializeble.interface';
import { Product } from 'src/app/shared/models/product.model';
import { PromotionFixedValue } from 'src/app/shared/models/promotion-fixed-value.model';
import { PromotionPayTake } from 'src/app/shared/models/promotion-pay-take.model';

export class ProductSerializer implements Serializeble{

  fromJson(json: any):Product{
    const product = new Product();
    product.id = json._id;
    product.name = json.name;
    product.price = json.price/100;
    product.promotion = this._getPromotionType(json.promotion);
    return product;
  }

  toJson(product:Product):any{
    let productJson = {
      name: product.name,
      price: product.price*100,
      promotion: product.promotion
    };
    return productJson;
  }

  private _getPromotionType(promotion:any){
    if(!promotion) return undefined;
    if(promotion.discount_fixed){
      return new PromotionFixedValue(promotion.quantidade, promotion.discount_fixed);
    }else if(promotion.discount_percent){
      return new PromotionPayTake(promotion.quantidade, promotion.discount_fixed);
    }
  }

}
