import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }

  commonURL = 'http://localhost:3000/cat/'

  addCatsForm(data: any) {
    return this._http.post(`${this.commonURL}addCats`, data)
  }

  displayAllCats() {
    return this._http.get(`${this.commonURL}displayCats`)
  }
  addItemsForm(data: any) {
    return this._http.post(`${this.commonURL}addItems`, data)
  }

}
