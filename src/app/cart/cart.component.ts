import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CartService } from '../cart.service';
import { API_URL } from '../../environments/environment'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  checkoutForm: FormGroup;
  items;



  // checkoutForm;




  constructor(private cartService: CartService,

    private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.items = this.cartService.getItems()
    this.checkoutForm = this.formBuilder.group({
      'name': [null, [Validators.required, Validators.minLength(4)]],
      'address': [null, [Validators.required]]
    })
  }
  onDelete() {
    this.cartService.deleteItem(this.items)

  }
  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    this.cartService.onSubmit(customerData);
    console.warn('Your order has been submitted', customerData)

  }





}