import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Promotion } from 'src/app/shared/models/promotion.model';
import { ResourceService } from 'src/app/shared/resource.service';
import { PromotionSerializer } from 'src/app/shared/promotion.serializer';

@Injectable({
  providedIn: 'root'
})
export class PromotionService extends ResourceService<Promotion>{

  constructor(httpClient: HttpClient) {
    super(httpClient,
      'http://localhost:8080',
      'promotion',
      new PromotionSerializer()
    );
  }

}
