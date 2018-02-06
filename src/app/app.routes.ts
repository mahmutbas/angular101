import { Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";

export const appRoutes: Routes = [{
    path: "",
    redirectTo: "products",
    pathMatch: "full"
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path:'products/:seoUrl',
    component:ProductComponent
  }];