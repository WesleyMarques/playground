import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSidebarComponent } from './sw-sidebar.component';

describe('SwSidebarComponent', () => {
  let component: SwSidebarComponent;
  let fixture: ComponentFixture<SwSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwSidebarComponent ]
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
