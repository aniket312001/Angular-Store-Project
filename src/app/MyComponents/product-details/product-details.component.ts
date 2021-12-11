import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreDataService } from 'src/app/MyService/store-data.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from '../product-list/products';
import { CartService } from 'src/app/MyService/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product | undefined
  data;
 
  constructor(private route: ActivatedRoute,private cartService: CartService) {  //  service like this or create a new object
    let service = new StoreDataService()   // service
    this.data = service.getData()
  
   }
  
   addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }


  ngOnInit(): void {
    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = this.data.find(product => product.id === productIdFromRoute)
  }

}
