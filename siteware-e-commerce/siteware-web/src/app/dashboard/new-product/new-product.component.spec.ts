import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import {
  MatCardModule, MatButtonModule, MatIconModule,
  MatDialogModule, MatFormFieldModule, MatInputModule,
  MatOptionModule, MatSelectModule, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar
} from '@angular/material';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { NewProductComponent } from './new-product.component';

class MdDialogMock {
  // When the component calls this.dialog.open(...) we'll return an object
  // with an afterClosed method that allows to subscribe to the dialog result observable.
  open() {
    return {
      afterClosed: () => { }
    };
  }
};

class MatSnackBarMock {
  open() {
    return {};
  }
};

describe('NewProductComponent', () => {
  let component: NewProductComponent;
  let fixture: ComponentFixture<NewProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewProductComponent],
      imports: [FormsModule, MatCardModule, MatButtonModule, MatIconModule,
        MatDialogModule, MatFormFieldModule, MatInputModule,
        MatOptionModule, MatSelectModule, HttpClientTestingModule, NoopAnimationsModule],
      providers: [
        {
          provide: MatDialogRef, useClass: MdDialogMock
        }, {
          provide: MAT_DIALOG_DATA,
          useValue: {} // Add any data you wish to test if it is passed/used correctly
        },{
          provide: MatSnackBar, useClass: MatSnackBarMock
        }
      ]
    })
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [NewProductComponent]
      }
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
