import { Component } from '@angular/core';
import { CartService } from './cart.service';



import { RestService } from './rest.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  // firstName: string = ""
  // lastName: string = ""
  // email: string = ""
  // password: string = ""

  carId: number = null;

    

    carModel = {'model':''}
    
  constructor(private readonly rest: RestService, private cart: CartService) {}
  title = 'final-angular-prj-peter-george';



  
  // register() {
  //   this.rest.register({
  //     fname: this.firstName,
  //     lname: this.lastName,
  //     email: this.email,
  //     password: this.password
  //   })
  // }

  

  getCar() {
    this.rest.getCar(this.carId)
  }
  // getUserCars() {
  //   this.rest.getUserCars()
  // }
  
  update() {
  
    this.rest.update(this.carId, this.carModel)
  }
  

}
