import { Component, OnInit } from '@angular/core';
import { faPaypal} from '@fortawesome/free-brands-svg-icons';
import { faGooglePay} from  '@fortawesome/free-brands-svg-icons';
import { faApplePay} from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
faPaypal = faPaypal;
faGooglePay = faGooglePay;
faApplePay = faApplePay;
userIcon = faUserCircle 
signIn = faSignInAlt
constructor() {}

  ngOnInit() {}

}