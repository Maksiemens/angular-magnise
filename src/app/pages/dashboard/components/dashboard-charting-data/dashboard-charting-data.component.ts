import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-charting-data',
  templateUrl: './dashboard-charting-data.component.html',
  styleUrls: ['./dashboard-charting-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardChartingDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
