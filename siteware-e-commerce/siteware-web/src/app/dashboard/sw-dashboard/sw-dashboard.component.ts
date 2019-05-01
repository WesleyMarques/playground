import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { NewProductComponent } from 'src/app/dashboard/new-product/new-product.component';

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
      height: '350px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
