import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanModel } from 'src/app/models/plan.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent {
  action: any = 'edit';
  plan: PlanModel = new PlanModel();

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  saveCollection() {

  }
}
