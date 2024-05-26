import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  // Getting admin token from local storage 
  get adminTokenFromLocalStorage():string | null{
    return localStorage.getItem('adminToken');
  }

  // Getting user token from local storage
  get userTokenFromLocalStorage():string | null {
    return localStorage.getItem('userToken');
  }
}
