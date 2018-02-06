import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item';
import { Product } from '../../product/product';


@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
  providers:[CartService]
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[];

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.cartItems=this.cartService.list();
  }

}
