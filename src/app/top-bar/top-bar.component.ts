import { Component, OnInit } from '@angular/core';
import { faPaypal} from '@fortawesome/free-brands-svg-icons';
import { faGooglePay} from  '@fortawesome/free-brands-svg-icons';
import { faApplePay} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
faPaypal = faPaypal;
faGooglePay = faGooglePay;
faApplePay = faApplePay;
  
constructor() {}

  ngOnInit() {}

}