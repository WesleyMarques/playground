import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';

import { Order } from './models/order.model';
import { Item } from './models/item.model';
import { Product } from './models/product.model';
import { PromotionPayTake } from 'src/app/shared/models/promotion-pay-take.model';
import { PromotionFixedValue } from 'src/app/shared/models/promotion-fixed-value.model';

describe('OrderService', () => {
  let service: OrderService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(OrderService);
    service.payOrder();
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

  it('#updateItem deve atualizar os atributos modificados do Item desejado', () => {
    let newProduct:Product = new Product();
    newProduct.name = "teste";
    service.getCurrentOrder();
    service.addItem(newProduct);
    let itemToUpdate:Item = new Item(newProduct);
    itemToUpdate.quantidade = 10;
    expect(service.getCurrentOrder().items[0].quantidade).toEqual(1);
    service.updateItem(itemToUpdate);
    expect(service.getCurrentOrder().items[0].quantidade).toEqual(10);
  });

  it('#calcDiscount deve calcular corretamente o desconto para promoção Pague 1, Leve 2', () => {
    let newProduct:Product = new Product();
    newProduct.name = "teste";
    newProduct.price = 10;
    newProduct.promotion = new PromotionPayTake(2, 0.5, "Pague 1, Leve 2");
    service.getCurrentOrder();
    service.addItem(newProduct);
    service.getCurrentOrder().items[0].quantidade = 10;
    let discount = service.calcDiscount();
    expect(discount).toEqual(50);
    let otherProduct:Product = new Product();
    otherProduct.name = "teste 2";
    otherProduct.price = 50;
    service.addItem(otherProduct);
    discount = service.calcDiscount();
    expect(discount).toEqual(50);
  });

  it('#calcDiscount deve calcular corretamente o desconto para promoção 3 por 10$', () => {
    let newProduct:Product = new Product();
    newProduct.name = "teste";
    newProduct.price = 5;
    newProduct.promotion = new PromotionFixedValue(3, 1000, "3 por 10");
    service.getCurrentOrder();
    service.addItem(newProduct);
    service.getCurrentOrder().items[0].quantidade = 9;
    let discount = service.calcDiscount();
    expect(discount).toEqual(15);
    let otherProduct:Product = new Product();
    otherProduct.name = "teste 2";
    otherProduct.price = 50;
    service.addItem(otherProduct);
    discount = service.calcDiscount();
    expect(discount).toEqual(15);
  });

  it('#payOrder de criar uma nova instância de Order', () => {
    let newProduct:Product = new Product();
    newProduct.name = "teste";
    service.getCurrentOrder();
    service.addItem(newProduct);
    let currentOrder = Object.assign({}, service.currentOrder);
    service.payOrder();
    expect(currentOrder).not.toEqual(service.currentOrder);
  });
});
