import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';

import { NewProductComponent } from 'src/app/dashboard/new-product/new-product.component';
import { ProductListComponent } from 'src/app/dashboard/product-list/product-list.component';

@Component({
  selector: 'app-sw-dashboard',
  templateUrl: './sw-dashboard.component.html',
  styleUrls: ['./sw-dashboard.component.scss']
})
export class SwDashboardComponent implements OnInit {

  @ViewChild(ProductListComponent) productList: ProductListComponent;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openProductDialog(): void {
    const dialogRef = this.dialog.open(NewProductComponent, {
      height: '350px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.productList.updateProductList();
    });
  }

}
