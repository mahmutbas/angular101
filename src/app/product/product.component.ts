import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  products: Product[];
  selectedCategory:string;
  //selectedProduct:string;

  //burda new yapmak yerine yeni bir instance enjekte edilerek oluşturuluyor
  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private notificationsService:NotificationsService
  ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getProducts(params["seoUrl"])
      this.selectedCategory = params["seoUrl"]
    });
    //this.productService.getProducts().subscribe(p => this.products = p);
  }

  getProducts(seoUrl: string) {
    this.productService.getProducts(seoUrl).subscribe(p => {
      this.products = p
    })
  }

  addToChart(product:Product)
  {
    //this.selectedProduct=product.productName
    //alert("You added "+product.productName)
    this.notificationsService.success("Successful",product.productName+" added to card.")
  }

}
