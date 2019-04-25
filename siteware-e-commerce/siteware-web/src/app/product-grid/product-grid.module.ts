import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SwProductGridComponent } from './sw-product-grid/sw-product-grid.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [SwProductGridComponent, ProductCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports: [SwProductGridComponent]
})
export class ProductGridModule { }
