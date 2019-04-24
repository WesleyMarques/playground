import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwSidebarComponent } from './sw-sidebar/sw-sidebar.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule } from "@angular/material";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SwSidebarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatBadgeModule
  ],
  exports: [SwSidebarComponent]
})
export class SidebarModule { }
