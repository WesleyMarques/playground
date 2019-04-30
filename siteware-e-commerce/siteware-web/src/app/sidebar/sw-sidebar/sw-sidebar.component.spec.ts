import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule, MatBadgeModule, MatToolbarModule } from '@angular/material';

import { SwSidebarComponent } from './sw-sidebar.component';
import { OrderService } from 'src/app/shared/order.service';

describe('SwSidebarComponent', () => {
  let component: SwSidebarComponent;
  let fixture: ComponentFixture<SwSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwSidebarComponent],
      providers: [OrderService],
      imports:[RouterTestingModule,
      MatIconModule, MatBadgeModule, MatToolbarModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
