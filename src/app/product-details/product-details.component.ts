import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { plans } from '../plans';
import { CartService } from '../cart.service';

import { RestService } from '../rest.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product
  plans = plans;


  email: string = ""
  password: string = ""


  constructor(private route: ActivatedRoute,
    private cartService: CartService,

    private readonly rest: RestService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')]
    });
  }
  addToCart(product) {
    this.cartService.addToCart(product);

    window.alert('Your product has been added to the cart!')
  }
  logIn() {
    this.rest.logIn({

      email: this.email,
      password: this.password
    })
  }
  logOut() {
    this.rest.logOut();
  }
  


}
