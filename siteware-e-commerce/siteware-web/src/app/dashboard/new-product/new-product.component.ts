import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';

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
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private snackBar: MatSnackBar) {
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
      this.snackBar.open(this.product.name, "Criado", {
        duration: 1000,
      });
    }, err => {
      let error = err.error.message;
      let errorParser = error.indexOf("[");
      this.snackBar.open(error.slice(errorParser, error.length), "Error", {
        duration: 3000,
      });
    });
  }

  updateProduct() {
    this._productService.update(this.product).subscribe(data => {
      console.log("edited", data);
    })
  }

}
