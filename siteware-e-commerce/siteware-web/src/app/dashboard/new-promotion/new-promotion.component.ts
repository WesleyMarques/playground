import { Component, OnInit } from '@angular/core';

import { Promotion } from 'src/app/shared/models/promotion.model';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/product.service';
import { PromotionService } from 'src/app/shared/promotion.service';

@Component({
  selector: 'app-new-promotion',
  templateUrl: './new-promotion.component.html',
  styleUrls: ['./new-promotion.component.scss']
})
export class NewPromotionComponent implements OnInit {

  product: Product;
  promotion: Promotion;

  products: Product[];
  promotions: Promotion[];

  constructor(private _productService: ProductService,
    private _promotionService: PromotionService) { }

  ngOnInit() {
    this._productService.list().subscribe(data => {
      this.products = data;
    });
    this._promotionService.list().subscribe(data => {
      console.log(data);
      this.promotions = data;
    });
    console.log(this.promotions)
  }

}
