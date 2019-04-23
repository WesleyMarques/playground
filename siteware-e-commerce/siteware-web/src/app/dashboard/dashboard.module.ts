import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NewPromotionComponent } from './new-promotion/new-promotion.component';

@NgModule({
  declarations: [ProductListComponent, NewProductComponent, NewPromotionComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
