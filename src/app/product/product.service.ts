import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';

@Injectable()
export class ProductService {

constructor(private http: Http) { }

getProducts(): Observable<Product[]> {
    return this.http.get("http://northwindapi.azurewebsites.net/api/products").map(response => response.json())
  }
  
}