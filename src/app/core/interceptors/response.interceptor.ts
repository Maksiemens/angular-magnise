import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(
        request.clone({
          setHeaders: {
            'X-CoinAPI-Key': environment.coin_api_key,
          },
        })
      )
      .pipe(
        filter((event: any) => event instanceof HttpResponse),
        map((event: HttpResponse<any>) => {
          return (event = event.clone({
            body: {
              ...event.body,
              status: event.status,
              statusText: event.statusText,
            },
          }));
        })
      );
  }
}
