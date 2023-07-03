import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const accessToken = localStorage.getItem('token');

    // Clone the request and add the access token to the request headers
    const authRequest = request.clone({
      setHeaders: {
        "Authorization": `Bearer ${accessToken}`
      }
    });

    // Pass the cloned request to the next interceptor or the HttpClient if there are no more interceptors
    return next.handle(authRequest);
  }
}
