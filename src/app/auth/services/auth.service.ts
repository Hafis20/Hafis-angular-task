import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpSuccessResponse, LoginModel, LoginResponseModel, RegisterModel } from '../models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(loginData:LoginModel):Observable<LoginResponseModel>{
    return this.http.post<LoginResponseModel>(`${environment.userAPI}/login`,loginData);
  }

  register(registeData:RegisterModel):Observable<HttpSuccessResponse>{
    return this.http.post<HttpSuccessResponse>(`${environment.userAPI}/register`,registeData);
  }
}
