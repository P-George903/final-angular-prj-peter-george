import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})

export class CartService {
  jwtKey: string = 'user_jwt'
  items = []


  constructor(private http: HttpClient) { }

  addToCart(product: any[]): Promise<any> {
    const jwt = localStorage.getItem(this.jwtKey);
    this.items.push(product)

    return this.http
      .post(
        `${API_URL}/`,
        { product },
        { headers: { Authorization: `Bearer ${jwt}` } }
      )
      .toPromise();
  }

  onSubmit(customerData): Promise<any> {
    const jwt = localStorage.getItem(this.jwtKey);


    return this.http
      .post(
        `${API_URL}/shipping`,
        { customerData },
        { headers: { Authorization: `Bearer ${jwt}` } }
      )
      .toPromise();
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

  deleteItem(index: number) {
    this.items.splice(index, 1)

  }


}