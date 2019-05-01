import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/product.service';
import { PromotionService } from 'src/app/shared/promotion.service';
import { Promotion } from 'src/app/shared/models/promotion.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  product: Product;
  promotions: Promotion[];
  modeEdit: boolean = false;

  constructor(public dialogRef: MatDialogRef<NewProductComponent>,
    private _productService: ProductService,
    private _promotionService: PromotionService,
    @Inject(MAT_DIALOG_DATA) public data: Product) {
    if (data) {
      this.product = data;
      this.modeEdit = true;
    } else {
      this.product = new Product();
    }
  }

  ngOnInit() {
    this._promotionService.list().subscribe(data => {
      this.promotions = data;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createProduct(): void {
    this._productService.create(this.product).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  updateProduct() {
    this._productService.update(this.product).subscribe(data => {
      console.log("edited", data);
    })
  }

}
