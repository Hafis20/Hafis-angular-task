import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  // Get the admin token
  get adminTokenFromLocalStorage(): string | null {
    return localStorage.getItem('adminToken');
  }

  // Get the user token
  get userTokenFromLocalStorage(): string | null {
    return localStorage.getItem('userToken');
  }
}
