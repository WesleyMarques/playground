import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatButtonModule, MatSnackBar } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SwProductGridComponent } from './sw-product-grid.component';
import { ProductCardComponent } from 'src/app/product-grid/product-card/product-card.component';

import { ProductService } from 'src/app/shared/product.service';
import { OrderService } from 'src/app/shared/order.service';

class MatSnackBarMock {
  open() {
    return {};
  }
};

describe('SwProductGridComponent', () => {
  let component: SwProductGridComponent;
  let fixture: ComponentFixture<SwProductGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwProductGridComponent, ProductCardComponent],
      imports: [MatCardModule, MatButtonModule, HttpClientTestingModule],
      providers: [ProductService, OrderService, {
        provide: MatSnackBar, useClass: MatSnackBarMock
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwProductGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
