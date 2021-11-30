import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSearchComponent } from './dashboard-search.component';

@NgModule({
  declarations: [
    DashboardSearchComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DashboardSearchComponent
  ]
})
export class DashboardSearchModule { }
