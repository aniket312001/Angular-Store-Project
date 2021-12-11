// To set up ProductAlertsComponent to receive product data, first import Input from @angular/core.

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product-list/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product! : Product;  // ..type
  @Output() notify = new EventEmitter();
  
  constructor() {
    
  }
  
  ngOnInit(): void {
  }

}
