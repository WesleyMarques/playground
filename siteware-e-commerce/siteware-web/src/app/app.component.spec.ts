import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule, MatTooltipModule } from "@angular/material";

import { SwSidebarComponent } from 'src/app/sidebar/sw-sidebar/sw-sidebar.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule, MatTooltipModule
      ],
      declarations: [
        AppComponent, SwSidebarComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'siteware-web'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('siteware-web');
  });

});
