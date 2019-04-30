import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatCardModule, MatButtonModule, MatIconModule,
  MatDialogModule, MatFormFieldModule, MatInputModule,
  MatOptionModule, MatSelectModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { SwDashboardComponent } from './sw-dashboard/sw-dashboard.component';

@NgModule({
  declarations: [ProductListComponent, NewProductComponent, SwDashboardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatOptionModule,
    MatSelectModule,
    FlexLayoutModule
  ],
  exports: [SwDashboardComponent],
  entryComponents: [NewProductComponent]
})
export class DashboardModule { }
