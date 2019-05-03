import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/product.service';
import { NewProductComponent } from 'src/app/dashboard/new-product/new-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private _productService: ProductService, public dialog: MatDialog) { }

  ngOnInit() {
    this.updateProductList();
  }

  updateProductList(){
    this._productService.list().subscribe(data => {
      this.products = data;
    });
  }

  deleteProduct(product:Product){
    this._productService.delete(product.id).subscribe(data => {
      this._productService.list().subscribe(data => {
        this.products = data;
      });
    });
  }

  editProductDialog(product:Product): void {
    const dialogRef = this.dialog.open(NewProductComponent, {
      height: '400px',
      width: '600px',
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
