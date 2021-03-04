import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faGooglePay } from '@fortawesome/free-brands-svg-icons';
import { faApplePay } from '@fortawesome/free-brands-svg-icons';
import { faAmazonPay } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  checkoutForm: FormGroup;
  items;
  faPaypal = faPaypal;
  faGooglePay = faGooglePay;
  faApplePay = faApplePay;
  faAmazonPay = faAmazonPay;

 constructor(private cartService: CartService,
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.items = this.cartService.getItems()
    this.checkoutForm = this.formBuilder.group({
      'name': [null, [Validators.required, Validators.minLength(4)]],
      'address': [null, [Validators.required]],
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
}
}