import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule, MatButtonModule, MatIconModule } from '@angular/material';

import { CheckoutListComponent } from './checkout-list.component';

describe('CheckoutListComponent', () => {
  let component: CheckoutListComponent;
  let fixture: ComponentFixture<CheckoutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutListComponent ],
      imports: [MatTableModule, MatButtonModule, MatIconModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
