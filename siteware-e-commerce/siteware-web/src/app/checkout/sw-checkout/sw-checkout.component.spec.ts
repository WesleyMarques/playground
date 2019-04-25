import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwCheckoutComponent } from './sw-checkout.component';

describe('SwCheckoutComponent', () => {
  let component: SwCheckoutComponent;
  let fixture: ComponentFixture<SwCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwCheckoutComponent ]
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
