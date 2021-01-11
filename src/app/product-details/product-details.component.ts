import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { products} from '../products';
import { plans} from '../plans';
import { CartService} from '../cart.service';
import { DataPlanService} from '../data-plan.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product;
plans;


  constructor(private route: ActivatedRoute,
  private cartService: CartService,
  private dataPlanService: DataPlanService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
    this.product = products[+params.get('productId')]
    });
    this.route.paramMap.subscribe(params => {
    this.plans = plans[+params.get('option')];
    });
  }
  addToCart(product){
    this.cartService.addToCart(product);
  
    window.alert('Your product has been added to the cart!')
  }
  // addToCheckOut(plans){
  //   this.dataPlanService.addToCheckOut(plans)
  //   window.alert('You have selected Unlimited talk, text, and Data!')
  // }
}
