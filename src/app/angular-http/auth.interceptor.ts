import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.method);
    const modifiedRequest = request.clone({headers:request.headers.append('Auth',['NTH','HTN','TNH','NHT'])});
    console.log(modifiedRequest.headers.set('Auth','Default').get('Auth'));
    return next.handle(modifiedRequest).pipe(tap((events:any)=>{
      console.log('Response is returning');
      if(events.type === HttpEventType.Response)
      {
        console.log(events.body)
        console.log('Response has arrived');
      }
    }));
  }
}

