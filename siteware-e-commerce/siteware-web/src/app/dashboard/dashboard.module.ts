import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatCardModule, MatButtonModule, MatIconModule,
  MatDialogModule, MatFormFieldModule, MatInputModule,
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NewPromotionComponent } from './new-promotion/new-promotion.component';
import { SwDashboardComponent } from './sw-dashboard/sw-dashboard.component';

@NgModule({
  declarations: [ProductListComponent, NewProductComponent, NewPromotionComponent, SwDashboardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [SwDashboardComponent],
  entryComponents: [NewProductComponent, NewPromotionComponent]
})
export class DashboardModule { }
