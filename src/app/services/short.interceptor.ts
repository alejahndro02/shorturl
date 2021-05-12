import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = 'efc953ec94f85548aca0f9eea033f0214949af26';
    request = request.clone({setHeaders: {Authorization : 'Bearer ' + token}});
    return next.handle(request);
    //si se requiere manipular el error desde el interceptor
    // return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
    //   console.log(error);
    //   return throwError
    // }));

  }
}
