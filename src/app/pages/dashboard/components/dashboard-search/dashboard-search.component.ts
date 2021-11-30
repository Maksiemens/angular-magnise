import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
