import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SwCheckoutComponent } from './sw-checkout/sw-checkout.component';
import { CheckoutListComponent } from './checkout-list/checkout-list.component';

@NgModule({
  declarations: [SwCheckoutComponent, CheckoutListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [SwCheckoutComponent]
})
export class CheckoutModule { }
