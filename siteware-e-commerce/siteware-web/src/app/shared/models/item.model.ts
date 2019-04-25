import { Product } from 'src/app/shared/models/product.model';
import { Promotion } from 'src/app/shared/models/promotion.model';

export class Item {
  id: number;
  product: Product;
  quantidade: number;
  promotion: Promotion;

  constructor(product:Product){
    this.product = product;
    this.quantidade = 1;
  }

  updateItem(quantidade:number){
    this.quantidade = quantidade;
  }

  getProduct(){
    return this.product;
  }

  increaseQuantidade(){
    this.quantidade++;
  }
}
