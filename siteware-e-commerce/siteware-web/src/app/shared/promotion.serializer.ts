import { Serializeble } from 'src/app/shared/interfaces/serializeble.interface';
import { Promotion } from 'src/app/shared/models/promotion.model';
import { PromotionFixedValue } from 'src/app/shared/models/promotion-fixed-value.model';
import { PromotionPayTake } from 'src/app/shared/models/promotion-pay-take.model';

export class PromotionSerializer implements Serializeble{

  fromJson(json: any):Promotion{
    const promotion = this._getPromotionType(json);
    promotion.id = json._id;
    return promotion;
  }

  toJson(promotion:Promotion):any{
    const productJson = Object.assign({}, promotion);
    delete productJson.id;
    delete promotion.type;
    return productJson;
  }

  private _getPromotionType(promotion:any){
    console.log(promotion);
    if(!promotion) return undefined;
    if(promotion.discount_fixed){
      return new PromotionFixedValue(promotion.quantidade, promotion.discount_fixed);
    }else if(promotion.discount_percent){
      return new PromotionPayTake(promotion.quantidade, promotion.discount_percent);
    }
  }

}
