import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { Items } from '../interfaces/items';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }

  commonURL = 'http://localhost:3000/cat/'

  addCatsForm(data: Category): Observable<any> {
    return this._http.post(`${this.commonURL}addCats`, data)
  }

  displayAllCats(): Observable<any> {
    return this._http.get(`${this.commonURL}displayCats`)
  }

  // Add item to category
  addItemsForm(data: Items): Observable<any> {
    return this._http.post(`${this.commonURL}addItem`, data)
  }

}
