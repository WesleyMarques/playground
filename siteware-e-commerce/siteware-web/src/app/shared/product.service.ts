import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from 'src/app/shared/models/product.model';
import { ResourceService } from 'src/app/shared/resource.service';
import { ProductSerializer } from 'src/app/shared/product.serializer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ResourceService<Product>{

  constructor(httpClient: HttpClient) {
    super(httpClient,
      environment.apiUrl,
      'product',
      new ProductSerializer()
    );
  }

}
