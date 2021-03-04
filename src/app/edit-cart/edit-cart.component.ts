import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service'

@Component({
  selector: 'app-edit-cart',
  templateUrl: './edit-cart.component.html',
  styleUrls: ['./edit-cart.component.css']
})

export class EditCartComponent implements OnInit {
  getItem: number = null;
  selectedItem: any = {}
  editModel = { 'model': '' }

constructor(private readonly rest: RestService) {}

  ngOnInit(): void {
  }
  
  getPhone() {
     this.rest.getPhone(this.getItem).then(res => {
     this.selectedItem = res;
    })
  }
  update() {
     this.rest.update(this.getItem, this.editModel)
  }
  
  deletePhone() {
     this.rest.deletePhone(this.getItem)
     window.alert('Item Deleted!');
  }
}
