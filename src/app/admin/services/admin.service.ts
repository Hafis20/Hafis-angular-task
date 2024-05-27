import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsersListModel } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<UsersListModel[]>{
    return this.http.get<UsersListModel[]>(`${environment.api}/getUsers`);
  }
}
