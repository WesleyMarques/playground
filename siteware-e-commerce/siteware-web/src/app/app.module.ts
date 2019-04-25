import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { SidebarModule } from 'src/app/sidebar/sidebar.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckoutModule } from 'src/app/checkout/checkout.module';
import { ProductGridModule } from 'src/app/product-grid/product-grid.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    FlexLayoutModule,
    SharedModule,
    ProductGridModule,
    CheckoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
