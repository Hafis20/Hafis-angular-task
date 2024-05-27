import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { Router } from '@angular/router';
import { LocalstorageService } from '../shared/services/localstorage.service';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  constructor(private router:Router,private getTokenService:LocalstorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error.status);
        if(error.status === 401){
          localStorage.clear();
          this.router.navigate(['/auth/login']);
        }
        throw error;
      })
    );
  }
}
