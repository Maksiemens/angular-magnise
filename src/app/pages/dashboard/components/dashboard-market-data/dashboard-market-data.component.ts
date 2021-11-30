import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-market-data',
  templateUrl: './dashboard-market-data.component.html',
  styleUrls: ['./dashboard-market-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardMarketDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
