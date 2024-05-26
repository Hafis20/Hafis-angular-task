import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  isLoggedIn: boolean = false;

  get getIsLoggedIn(): Observable<boolean> {
    return new Observable(observer => {
      observer.next(this.isLoggedIn);
    })
  }

  setIsLoggedIn() {
    this.isLoggedIn = !this.isLoggedIn;
  }

}
