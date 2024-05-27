import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../shared/services/localstorage.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  adminToken!: string | null;
  userToken!: string | null;
  constructor(private getTokenService: LocalstorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.adminToken = this.getTokenService.adminTokenFromLocalStorage;
    this.userToken = this.getTokenService.userTokenFromLocalStorage;

    if (window.location.pathname.includes('/admin') && this.adminToken) {
      console.log('Admin interceptor works')
      const authReq = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: `Admin-Bearer ${this.adminToken}`
        }
      });
      return next.handle(authReq);
    } else if (window.location.pathname.includes('/user') && this.userToken) {
      console.log('User interceptor works')
      const authReq = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: `User-Bearer ${this.userToken}`
        }
      });
      return next.handle(authReq);
    } else {
      return next.handle(request);
    }
  }
}
