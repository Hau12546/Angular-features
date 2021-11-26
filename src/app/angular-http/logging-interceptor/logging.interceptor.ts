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
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const loggingModifiedRequest = request.clone({headers:request.headers.append('Auth','password')});
    return next.handle(loggingModifiedRequest).pipe(tap((events:any)=>{
      console.log(loggingModifiedRequest.body);
      if(events.type === HttpEventType.Response){
        console.log(loggingModifiedRequest.headers.keys());
      }
    }));
  }
}
