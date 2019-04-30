import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  MatCardModule, MatButtonModule, MatIconModule,
  MatDialogModule, MatFormFieldModule, MatInputModule,
  MatOptionModule, MatSelectModule
} from '@angular/material';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [MatCardModule, MatButtonModule, MatIconModule,
        MatDialogModule, MatFormFieldModule, MatInputModule,
        MatOptionModule, MatSelectModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
