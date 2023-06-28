import {Component, OnInit} from '@angular/core';
import {NutritionalPlan} from "../nutritional-plan";

@Component({
  selector: 'app-lista-nutritional-plan',
  templateUrl: './lista-nutritional-plan.component.html',
  styleUrls: ['./lista-nutritional-plan.component.scss']
})
export class ListaNutritionalPlanComponent implements OnInit{
 nutriitional_plan:NutritionalPlan[];

constructor() {
}
  ngOnInit(): void {
  this.nutriitional_plan=[{
    "id_objetive": 1,
    "plan_name": "Nutritional_Plan_1",
    "description":"Plan del cliente 1- Perder peso",
    "client_id" :100,
  },
    {
      "id_objetive": 2,
      "plan_name": "Nutritional_Plan_2",
      "description":"Plan del cliente 2- Ganar musculo",
      "client_id":101,


    }
  ]
  }
}
