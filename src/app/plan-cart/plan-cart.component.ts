import { Component, OnInit } from '@angular/core';
import { DataPlanService} from '../data-plan.service';
@Component({
  selector: 'app-plan-cart',
  templateUrl: './plan-cart.component.html',
  styleUrls: ['./plan-cart.component.css']
})
export class PlanCartComponent implements OnInit {
services
  constructor(private dataPlanService: DataPlanService) { }

  ngOnInit(): void {
    this.services= this.dataPlanService.getPlan();
  }

}
