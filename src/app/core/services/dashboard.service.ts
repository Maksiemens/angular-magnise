import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  // !Exchanges
  loadListAllExchanges(): Observable<any[]> {
    return this.http.get<any>(`${environment.coinapi_rest_api}/v1/exchanges`);
  }

  loadExchangesById(exchange_id: string): Observable<any[]> {
    return this.http.get<any>(`${environment.coinapi_rest_api}/v1/exchanges/${exchange_id}`);
  }

  loadListFilteredExchanges(filter_exchange_id: string[]): Observable<any[]> {
    return this.http.get<any>(`${environment.coinapi_rest_api}/v1/exchanges`, {
      params: {
        filter_exchange_id: filter_exchange_id,
      },
    });
  }

  loadListAllExchangeIcons(iconSize: any): Observable<any[]> {
    return this.http.get<any>(`${environment.coinapi_rest_api}/v1/exchanges/icons/${iconSize}`);
  }

  // !Assets
  loadListAllAssets(): Observable<any[]> {
    return this.http.get<any>(`${environment.coinapi_rest_api}/v1/assets`);
  }

  loadAllAssetsById(asset_id: any): Observable<any[]> {
    return this.http.get<any>(`${environment.coinapi_rest_api}/v1/assets/${asset_id}`);
  }

  loadListFilteredAssets(filter_asset_id: string[]): Observable<any[]> {
    return this.http.get<any>(`${environment.coinapi_rest_api}/v1/assets`, {
      params: {
        filter_asset_id: filter_asset_id,
      },
    });
  }

  loadListAllAssetIcons(iconSize: any): Observable<any[]> {
    return this.http.get<any>(`${environment.coinapi_rest_api}/v1/assets/icons/${iconSize}`);
  }

  // !Symbols
  loadListAllSymbols(): Observable<any[]> {
    return this.http.get<any>(`${environment.coinapi_rest_api}/v1/symbols`);
  }

  loadListSymbolsById(exchange_id: any): Observable<any[]> {
    return this.http.get<any>(`${environment.coinapi_rest_api}/v1/symbols/${exchange_id}`);
  }

  loadListFilteredSymbols(filter_symbol: any): Observable<any[]> {
    return this.http.get<any>(`${environment.coinapi_rest_api}/v1/symbols`, {
      params: {
        filter_symbol_id: filter_symbol.filter_symbol_id,
        filter_exchange_id: filter_symbol.filter_exchange_id,
        filter_asset_id: filter_symbol.filter_asset_id,
      },
    });
  }

  // !Get all current rates
  loadAllCurrentRates(asset_id_base: string, invert = false): Observable<any> {
    return this.http.get<any>(`${environment.coinapi_rest_api}/v1/exchangerate/${asset_id_base}`, {
      params: { invert },
    });
  }

  // !Timeseries periods
  loadTimeseriesPeriods(): Observable<any[]> {
    return this.http.get<any>(`${environment.coinapi_rest_api}/v1/exchangerate/history/periods`);
  }

  // !Timeseries data
  loadTimeseriesData(asset_id_base: string, asset_id_quote: string): Observable<any[]> {
    return this.http.get<any>(`${environment.coinapi_rest_api}/v1/exchangerate/${asset_id_base}/${asset_id_quote}/history`, {
      params: {
        period_id: '1MIN',
        time_start: '2016-01-01T00:00:00',
        time_end: '2016-02-01T00:00:00',
      },
    });
  }

  // !Latest data
  loadLatestData(symbol_id: string): Observable<any[]> {
    return this.http.get<any>(`${environment.coinapi_rest_api}/v1/ohlcv/${'BITSTAMP_SPOT_BTC_USD'}/latest`, {
      params: {
        period_id: '1MIN',
      },
    });
  }

  // !Historical data
  loadHistoricalData(symbol_id: string): Observable<any[]> {
    console.log(new Date().toISOString());
    return this.http.get<any>(`${environment.coinapi_rest_api}/v1/ohlcv/${symbol_id}/history`, {
      params: {
        period_id: '1MIN',
        time_start: '2016-01-01T00:00:00',
      },
    });
  }
}
