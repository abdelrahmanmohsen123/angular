import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private commonURL = `http://localhost:3000/user/`
  constructor(private _http: HttpClient) {}

  userRegister (userData: Users):Observable<any> {
    return this._http.post(`${this.commonURL}register`, userData)
  }

  userLogin (userData: Users):Observable<any> {
    return this._http.post(`${this.commonURL}login`, userData)
  }

}
