import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.getCategories().subscribe(c=>this.categories = c);
  }

  getCategories():Observable<Category[]>
  {
    return this.http.get("http://northwindapi.azurewebsites.net/api/categories").map(response => response.json())
  }

}
