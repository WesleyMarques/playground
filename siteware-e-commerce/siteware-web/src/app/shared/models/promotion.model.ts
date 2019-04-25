import { Product } from 'src/app/shared/models/product.model';

export abstract class Promotion {
  id: String;
  product: Product;
  quantidade: number;

  constructor(product: Product, quantidade: number) {
    this.product = product;
    this.quantidade = quantidade;
  }
}
