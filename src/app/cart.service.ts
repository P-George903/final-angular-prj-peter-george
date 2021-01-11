import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataPlanService } from './data-plan.service';


@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = []
  

  constructor(private http: HttpClient) { }
  addToCart(product) {
    this.items.push(product)
   
  }

  getItems() {
    
    return this.items
    
  }

  clearCart() {
    this.items = []
    return this.items
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json')
  }
  // getPlan(){
  // return this.services
  // }
  deleteItem(index: number) {
    this.items.splice(index, 1)

  }
}