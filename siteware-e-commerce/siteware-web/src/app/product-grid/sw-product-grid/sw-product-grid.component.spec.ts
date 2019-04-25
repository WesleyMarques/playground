import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwProductGridComponent } from './sw-product-grid.component';

describe('SwProductGridComponent', () => {
  let component: SwProductGridComponent;
  let fixture: ComponentFixture<SwProductGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwProductGridComponent ]
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
