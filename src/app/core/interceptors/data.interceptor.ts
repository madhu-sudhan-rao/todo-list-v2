import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, every, tap } from 'rxjs';

@Injectable()
export class DataInterceptor implements HttpInterceptor {

  private response: any;
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isLoginOrRegister = request.url.includes('login') || request.url.includes('register');
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        console.log(event);
        if(event instanceof HttpResponse){
          // this.response = event.body;
          
        }
      })
    );
  }
}
