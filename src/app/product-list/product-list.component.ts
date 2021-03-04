import { Component } from '@angular/core';
import { RestService } from '../rest.service'
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;

  constructor(private readonly rest: RestService) {}

  share() {
    window.alert('The product has been shared!');
  }
  
  onNotify() {
    this.rest.onNotify([
      { subject: 'Promotion', message: 'Send sale notification.' }
      ]);
    window.alert('You will be notified when the product goes on sale');
  }
  
  scrollTop() {
    window.scrollTo(0, 0)
  }
}