import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMarketDataComponent } from './dashboard-market-data.component';

@NgModule({
  declarations: [
    DashboardMarketDataComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DashboardMarketDataComponent
  ]
})
export class DashboardMarketDataModule { }
