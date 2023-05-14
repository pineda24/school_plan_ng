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
    await this.data.find('/subjects').subscribe(
      (res) => {
        console.log(res);
        this.plans = res.prestamos;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async deletePlans(id: string) {
    await this.data.deleteOne('/prestamos', `${id}/`).subscribe(
      (res) => {
        console.log(res);
        this.getPlans();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
