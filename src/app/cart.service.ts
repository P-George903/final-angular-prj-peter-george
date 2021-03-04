import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtService } from './jwt.service'
import { API_URL } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = []

    constructor(private http: HttpClient,
    private readonly jwtService: JwtService) {}

  getItems() {
    return this.items
  }
  
  addToCart(product: any[]): Promise<any> {
    const jwt = this.jwtService.getJwt()
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
    const jwt = this.jwtService.getJwt()

    return this.http
      .post(
        `${API_URL}/shipping`,
        { customerData },
        { headers: { Authorization: `Bearer ${jwt}` } }
      ).toPromise();
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