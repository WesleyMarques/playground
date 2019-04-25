import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardModule } from 'src/app/dashboard/dashboard.module';
import { ProductGridModule } from 'src/app/product-grid/product-grid.module';

import { SwDashboardComponent } from 'src/app/dashboard/sw-dashboard/sw-dashboard.component';
import { SwProductGridComponent } from 'src/app/product-grid/sw-product-grid/sw-product-grid.component';
import { SwCheckoutComponent } from 'src/app/checkout/sw-checkout/sw-checkout.component';

const routes: Routes = [
  { path: 'checkout', component: SwCheckoutComponent },
  { path: 'products', component: SwProductGridComponent },
  { path: 'dashboard', component: SwDashboardComponent },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    DashboardModule,
    ProductGridModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
