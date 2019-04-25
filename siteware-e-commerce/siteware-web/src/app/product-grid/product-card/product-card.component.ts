import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/shared/models/product.model';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  @Output() addProduct = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  buyProduct(product:Product){
    this.addProduct.emit(product);
  }


}
