import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { BusyService } from './busy.service';

@Injectable()
export class BusyInterceptor implements HttpInterceptor {

  constructor(private busy: BusyService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.busy.setBusy();

    request = request.clone({
  
    });


    return next
    .handle(request)
    .pipe(
      tap((ev: HttpEvent<any>) => {
        this.busy.unsetBusy();
      }),
      catchError(response => {
          this.busy.unsetBusy();

           if (response instanceof HttpErrorResponse) {
           }

           return _throw(response);
	        })
    );
  }
}
