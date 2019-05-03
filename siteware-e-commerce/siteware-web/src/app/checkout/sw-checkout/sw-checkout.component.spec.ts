import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule, MatButtonModule, MatIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { SwCheckoutComponent } from './sw-checkout.component';
import { CheckoutListComponent } from 'src/app/checkout/checkout-list/checkout-list.component';
import { OrderService } from 'src/app/shared/order.service';
import { Order } from 'src/app/shared/models/order.model';
import { Item } from 'src/app/shared/models/item.model';
import { Product } from 'src/app/shared/models/product.model';

class OrderServiceMock{
  order:Order;
  getCurrentOrder(){
    if(this.order) return this.order;
    this.order = new Order();
    this.order.getItems().push(new Item(new Product()));
    return this.order;
  }
  payOrder(){
    this.order = new Order();
  }
}

describe('SwCheckoutComponent', () => {
  let component: SwCheckoutComponent;
  let fixture: ComponentFixture<SwCheckoutComponent>;
  let orderService:OrderService;
  let getCurrentOrderSpy;
  let router:Router;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwCheckoutComponent, CheckoutListComponent],
      imports: [MatTableModule, MatButtonModule, MatIconModule, RouterTestingModule],
      providers: [{
        provide: OrderService, useClass: OrderServiceMock
      }]
    })
      .compileComponents();

    orderService = TestBed.get(OrderService);
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    getCurrentOrderSpy = jest.spyOn(orderService, 'getCurrentOrder');
    expect(component).toBeTruthy();
    expect(getCurrentOrderSpy).toHaveBeenCalled;
  });

  it('#finishOrder deve criar uma nova instância de Order', () => {
    let navigateSpy = jest.spyOn(router, 'navigate');
    const currentOrder = Object.assign({}, component.activedOrder);
    component.finishOrder();
    expect(currentOrder).not.toEqual(component.activedOrder);
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });
});
