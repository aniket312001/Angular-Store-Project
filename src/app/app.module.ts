import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './MyComponents/product-list/product-list.component';
import { StoreDataService } from './MyService/store-data.service';
import { ProductAlertsComponent } from './MyComponents/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './MyComponents/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './MyComponents/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './MyComponents/shipping/shipping.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // RouterModule.forRoot([
    //   { path: '', component: ProductListComponent },
    //   { path: 'products/:productId', component: ProductDetailsComponent },
    // { path: 'cart', component: CartComponent },
    // ]),
  ],
  providers: [StoreDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
