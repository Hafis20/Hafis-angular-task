import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel, LoginResponseModel } from '../models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(loginData:LoginModel):Observable<LoginResponseModel>{
    return this.http.post<LoginResponseModel>(`${environment.userAPI}/login`,loginData);
  }
}
