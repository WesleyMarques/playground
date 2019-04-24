import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardModule } from 'src/app/dashboard/dashboard.module';

import { SwDashboardComponent } from 'src/app/dashboard/sw-dashboard/sw-dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard', component: SwDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    DashboardModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
