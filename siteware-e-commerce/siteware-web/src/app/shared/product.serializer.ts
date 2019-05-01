import { Serializeble } from 'src/app/shared/interfaces/serializeble.interface';
import { Product } from 'src/app/shared/models/product.model';
import { PromotionSerializer } from 'src/app/shared/promotion.serializer';

export class ProductSerializer implements Serializeble{

  promotionSerializer:PromotionSerializer = new PromotionSerializer();
  fromJson(json: any):Product{
    if(!json) return undefined;
    const product = new Product();
    product.id = json._id;
    product.name = json.name;
    product.price = json.price/100;
    product.promotion = this.promotionSerializer.fromJson(json.promotion);
    return product;
  }

  toJson(product:Product):any{
    let productJson = {
      name: product.name,
      price: product.price*100,
      promotion: product.promotion && product.promotion.id
    };
    return productJson;
  }

}
