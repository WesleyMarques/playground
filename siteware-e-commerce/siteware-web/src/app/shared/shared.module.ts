import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProductService } from 'src/app/shared/product.service';
import { OrderService } from 'src/app/shared/order.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [],
  entryComponents: [],
  providers: [ProductService, OrderService]
})
export class SharedModule { }
