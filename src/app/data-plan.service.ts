import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataPlanService {
services = []
constructor() { }


  // addToCheckOut(plans){
  //   this.services.push(plans)
  // }
  getPlan(){
    return this.services
  }

}
