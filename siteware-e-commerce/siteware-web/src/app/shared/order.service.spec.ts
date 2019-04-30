import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';

import { Order } from './models/order.model';
import { Item } from './models/item.model';
import { Product } from './models/product.model';

describe('OrderService', () => {
  let service: OrderService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getCurrentOrder after initializer service a new instance want be available', () => {
    expect(service.getCurrentOrder()).toBeInstanceOf(Order);
  });

  it('#addItem add new item to order list', () => {
    let items:Item[] = service.getCurrentOrder().items;
    expect(items.length).toEqual(0);
    let newProduct:Product = new Product();
    newProduct.name = "teste";
    service.addItem(newProduct);
    expect(items.length).toEqual(1);
    expect(items[0].quantidade).toEqual(1);
    expect(items[0].product.name).toEqual("teste");
  });

  it('#updateItem', () => {
    expect(1).toEqual(0);
  });
  it('#calcDiscount', () => {
    expect(1).toEqual(0);
  });
  it('#payOrder', () => {
    expect(1).toEqual(0);
  });
});
