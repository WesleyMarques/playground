import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwSidebarComponent } from './sw-sidebar/sw-sidebar.component';
import { MatToolbarModule, MatButtonModule, MatIconModule } from "@angular/material";

@NgModule({
  declarations: [SwSidebarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [SwSidebarComponent]
})
export class SidebarModule { }
