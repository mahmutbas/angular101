import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {appRoutes} from './app.routes';
import {SimpleNotificationsModule, NotificationsService} from 'angular2-notifications';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CartComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    SimpleNotificationsModule.forRoot()
  ],
  providers: [NotificationsService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
