import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './MyComponents/product-details/product-details.component';
import { ProductListComponent } from './MyComponents/product-list/product-list.component';
import { CartComponent } from './MyComponents/cart/cart.component';
import { ShippingComponent } from './MyComponents/shipping/shipping.component';


const routes: Routes = [ 
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
