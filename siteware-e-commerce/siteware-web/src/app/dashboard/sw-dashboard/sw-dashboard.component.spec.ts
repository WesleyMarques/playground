import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  MatCardModule, MatButtonModule, MatIconModule,
  MatDialogModule, MatFormFieldModule, MatInputModule,
  MatOptionModule, MatSelectModule
} from '@angular/material';

import { SwDashboardComponent } from './sw-dashboard.component';
import { ProductListComponent } from 'src/app/dashboard/product-list/product-list.component';

describe('SwDashboardComponent', () => {
  let component: SwDashboardComponent;
  let fixture: ComponentFixture<SwDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwDashboardComponent, ProductListComponent],
      imports: [MatCardModule, MatButtonModule, MatIconModule,
      MatDialogModule, MatFormFieldModule, MatInputModule,
      MatOptionModule, MatSelectModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
