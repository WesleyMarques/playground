import { Product } from 'src/app/shared/models/product.model';
import { Promotion } from 'src/app/shared/models/promotion.model';

export class Item {
  id: number;
  product: Product;
  quantidade: number;
  promotion: Promotion;

  constructor(product: Product) {
    this.product = product;
    this.quantidade = 1;
  }

  updateItem(quantidade: number) {
    this.quantidade = quantidade;
  }

  getProduct() {
    return this.product;
  }

  increaseQuantidade() {
    this.quantidade++;
  }

  decreaseQuantidade() {
    this.quantidade--;
  }

  getDiscount(){
    if(!this.product.promotion) return 0;
    return this.product.promotion.calcDiscount(this.quantidade, this.product.price);
  }

  getTotal(){
    return this.quantidade*this.product.price;
  }
}
