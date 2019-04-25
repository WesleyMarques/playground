import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-sw-product-grid',
  templateUrl: './sw-product-grid.component.html',
  styleUrls: ['./sw-product-grid.component.scss']
})
export class SwProductGridComponent implements OnInit {

  products: Product[];

  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this._productService.list().subscribe(data => {
      this.products = data;
    });
  }

}
