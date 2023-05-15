import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlanModel } from 'src/app/models/plan.model';
import { PlanView } from 'src/app/models/views/plan.view';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent {
  plans: Array<PlanView> = [];

  constructor(
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPlans();
  }

  async getPlans() {
    await this.data.find('/plan').subscribe(
      (res) => {
        this.plans = res.plans;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async deletePlans(idSubject: string, idCareer: string) {
    await this.data.deleteBySubjectAndCarreer('/plan', `${idSubject}`, `${idCareer}`).subscribe(
      (res) => {
        this.getPlans();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
