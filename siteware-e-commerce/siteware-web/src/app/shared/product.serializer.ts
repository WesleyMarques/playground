import { Serializeble } from 'src/app/shared/interfaces/serializeble.interface';
import { Product } from 'src/app/shared/models/product.model';

export class ProductSerializer implements Serializeble{

  fromJson(json: any):Product{
    const product = new Product();
    product.id = json._id;
    product.name = json.name;
    product.price = json.price/100;
    return product;
  }

  toJson(product:Product):any{
    let productJson = {
      name: product.name,
      price: product.price*100
    };
    return productJson;
  }

}
