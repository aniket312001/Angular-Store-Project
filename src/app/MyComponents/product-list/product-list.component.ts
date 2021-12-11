import { Component, OnInit } from '@angular/core';
import { StoreDataService } from 'src/app/MyService/store-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  data
 
  constructor(service:StoreDataService,) {
    this.data = service.getData()
    // console.log(this.data)   // data

   }

  ngOnInit(): void {
  }
  share(i:string){
    // console.log(i)
    alert(`${i} product has been shared`)
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
