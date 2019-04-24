import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  product:Product;

  constructor(public dialogRef: MatDialogRef<NewProductComponent>, private _productService:ProductService) {
    this.product = new Product();
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createProduct():void{
    this._productService.create(this.product).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

}
