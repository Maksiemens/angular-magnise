import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button'
import { DOCUMENT } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ErrorInterceptor } from '@app/core/interceptors/error.interceptor';
import { ResponseInterceptor } from '@app/core/interceptors/response.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,



    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    // !Global DOCUMENT
    {
      provide: Document,
      useExisting: DOCUMENT,
    },
    // !HTTP_INTERCEPTORS
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorInterceptor,
    //   multi: true,
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
