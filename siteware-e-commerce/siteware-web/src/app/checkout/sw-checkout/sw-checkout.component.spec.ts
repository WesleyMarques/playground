import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule, MatButtonModule, MatIconModule } from '@angular/material';

import { SwCheckoutComponent } from './sw-checkout.component';
import { CheckoutListComponent } from 'src/app/checkout/checkout-list/checkout-list.component';

describe('SwCheckoutComponent', () => {
  let component: SwCheckoutComponent;
  let fixture: ComponentFixture<SwCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwCheckoutComponent, CheckoutListComponent],
      imports: [MatTableModule, MatButtonModule, MatIconModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
