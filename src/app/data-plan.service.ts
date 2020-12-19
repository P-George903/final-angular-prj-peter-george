import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataPlanService {
items = []
constructor() { }


  addToCheckOut(plans){
    this.items.push(plans)
  }
  getPlan(){
    return this.items
  }

}
