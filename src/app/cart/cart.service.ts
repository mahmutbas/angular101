import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { CartItemList } from './cart-item-list';
import { Product } from '../product/product';

@Injectable()
export class CartService {
    
    constructor() { }

    addToCard(product: Product) {
        //  alert("added from card service")
        var addedItem = CartItemList.find(t => t.product.productId == product.productId);

        if (addedItem) {
            addedItem.quantity += 1;
        } else {
            let cartItem = new CartItem();
            cartItem.product = product;
            cartItem.quantity = 1;
            CartItemList.push(cartItem);
        }
    }
    list():CartItem[]{
        return CartItemList;
    }
    clear()
    {
        CartItemList.splice(0,CartItemList.length);
    }
    removeFromCart(product:Product)
    {
        var addedItem = CartItemList.find(t => t.product.productId == product.productId);
        var indexNo = CartItemList.indexOf(addedItem);
        if(indexNo!=-1)
        {
            CartItemList.splice(indexNo,1); //splice kaç karakter silineceğini belirtir...Array çıkartma yapar. 
        }
    }

}

