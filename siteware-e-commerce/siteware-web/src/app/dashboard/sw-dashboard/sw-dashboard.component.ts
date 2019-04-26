import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { NewProductComponent } from 'src/app/dashboard/new-product/new-product.component';
import { NewPromotionComponent } from 'src/app/dashboard/new-promotion/new-promotion.component';

@Component({
  selector: 'app-sw-dashboard',
  templateUrl: './sw-dashboard.component.html',
  styleUrls: ['./sw-dashboard.component.scss']
})
export class SwDashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openProductDialog(): void {
    const dialogRef = this.dialog.open(NewProductComponent, {
      height: '400px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  openPromotionDialog(): void {
    const dialogRef = this.dialog.open(NewPromotionComponent, {
      height: '400px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
