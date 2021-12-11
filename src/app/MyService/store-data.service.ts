import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  constructor() { }

  getData(){
    return [
      {
        "id":1,
        "name" : "Samsung",
        "desc" : "this is the best phone",
        "price" : 12000,
      },
      {
        "id":2,
        "name" : "Apple",
        "desc" : "this is the best phone",
        "price" : 99000,
      },
      {
        "id":3,
        "name" : "Vivo",
        "desc" : "this is the best phone",
        "price" : 8000,
      },
      {
        "id":4,
        "name" : "Realme",
        "desc" : "this is the best phone",
        "price" : 28000,
      },
      {
        "id":5,
        "name" : "OnePlus",
        "desc" : "this is the best phone",
        "price" : 80000,
      },
    ]
  }


}
