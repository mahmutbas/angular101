import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Category } from './category';

@Injectable()
export class CategoryService {

constructor(private http: Http) { }

getCategories():Observable<Category[]>
  {
    return this.http.get("http://northwindapi.azurewebsites.net/api/categories").map(response => response.json())
  }


}