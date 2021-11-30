import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@app/core/services/dashboard.service';
import { SocketioService } from '@app/core/services/socketio.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {

  constructor(
    private dashboardService: DashboardService,
    private socketioService: SocketioService,

  ) { }

  ngOnInit(): void {
    // this.socketioService.onNewMessage();
    // this.dashboardService.loadListAllExchanges().subscribe((response) => {
    //   console.log(response);
    // });

    // this.dashboardService.loadTimeseriesData('BTC', 'USD').subscribe((response) => {
    //   console.log(response);
    // });

    // this.dashboardService.loadHistoricalData('KRAKENFTS_PERP_BTC_USD').subscribe((response) => {
    //   console.log(response);
    // });

    // loadTimeseriesData
  }

  sendButtonClick() {
    this.socketioService.sendMessage('asd');
  }
}
