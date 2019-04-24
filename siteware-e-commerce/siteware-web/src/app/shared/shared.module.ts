import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProductService } from 'src/app/shared/product.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [],
  entryComponents: [],
  providers: [ProductService]
})
export class SharedModule { }
