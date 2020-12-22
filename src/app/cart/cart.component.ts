import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { CartService} from '../cart.service';
import { DataPlanService} from '../data-plan.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  services;
  checkoutForm;

  constructor(private cartService: CartService,
    private dataPlanService: DataPlanService,
    private formBuilder: FormBuilder) {
      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
      })
     }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  onSubmit(customerData){
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData)
  }

}