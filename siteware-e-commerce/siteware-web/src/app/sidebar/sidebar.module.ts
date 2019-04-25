import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwSidebarComponent } from './sw-sidebar/sw-sidebar.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule, MatTooltipModule } from "@angular/material";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SwSidebarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  exports: [SwSidebarComponent]
})
export class SidebarModule { }
