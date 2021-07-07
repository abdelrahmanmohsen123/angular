import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { Items } from '../interfaces/items';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public globalVar: any  = []

  constructor(private _http: HttpClient) { }

  commonURL = 'http://localhost:3000/cat/'

  addCatsForm(data: Category): Observable<any> {
    return this._http.post(`${this.commonURL}addCats`, data)
  }

  displayAllCats(): Observable<any> {
    return this._http.get(`${this.commonURL}displayCats`)
  }

  editCats(id: any, data: any): Observable<any> {
    return this._http.patch(`${this.commonURL}editCats/${id}`, data)
  }

  // Add item to category
  addItemsForm(data: FormData): Observable<any> {
    return this._http.post(`${this.commonURL}addItem`, data)
  }

  showAllItems(): Observable<any> {
    return this._http.get(`${this.commonURL}showAllItems`)
  }

  showSingleItem(id: any): Observable<any> {
    return this._http.get(`${this.commonURL}showItem/${id}`)
  }

}
