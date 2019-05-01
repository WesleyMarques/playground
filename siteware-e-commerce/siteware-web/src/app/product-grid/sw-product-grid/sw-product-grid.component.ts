import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/shared/models/product.model';

import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-sw-product-grid',
  templateUrl: './sw-product-grid.component.html',
  styleUrls: ['./sw-product-grid.component.scss']
})
export class SwProductGridComponent implements OnInit {

  products: Product[];
  order: any;

  constructor(private _productService: ProductService,
    private _orderService: OrderService,
    private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.order = this._orderService.getCurrentOrder();
    this._productService.list().subscribe(data => {
      this.products = data;
    });
  }

  addItemToOrder(product: Product) {
    this._orderService.addItem(product);
    this.snackBar.open("+1 "+product.name, "Adicionado", {
      duration: 1000,
    });
  }

  buyProduct(product: Product) {
    this.addItemToOrder(product);
  }

}
