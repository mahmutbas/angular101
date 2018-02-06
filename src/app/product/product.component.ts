import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  products:Product[];

  //burda new yapmak yerine yeni bir instance enjekte edilerek oluşturuluyor
  constructor(private productService:ProductService) {

  }

  ngOnInit() {
      this.productService.getProducts().subscribe(p=>this.products = p);
  }



}
