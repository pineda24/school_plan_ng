import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CareerModel } from 'src/app/models/career.model';
import { PlanModel } from 'src/app/models/plan.model';
import { SujectModel } from 'src/app/models/subject.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent {
  idPlan: any;
  action: any;
  plan: PlanModel = new PlanModel();
  arrayCarrers: Array<CareerModel> = [];
  arraySubjects: Array<SujectModel> = [];

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit() {
    this.idPlan = this.route.snapshot.paramMap.get('id');
    this.action = this.idPlan ? 'edit' : 'create';
    this.getSubjects();
    this.getCareers();
    if (this.action == 'edit') {
      this.data.findById('/prestamos', `${this.idPlan}/`).subscribe(
        (res: any) => {
          this.plan = res.prestamos[0];
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  saveCollection() {
    if (this.action == 'edit') {
      this.updateCollection();
    } else {
      this.createCollection();
    }
  }

  async createCollection() {
    this.data
      .insertOne('/prestamos', JSON.stringify(this.plan))
      .subscribe(
        (res: any) => {
          console.log(res);
          this.router.navigate(['..'], { relativeTo: this.route });
        },
        (err) => {
          console.log(err);
        }
      );
  }

  async updateCollection() {
    this.data
      .updateOnee('/prestamos', `${this.idPlan}/`, JSON.stringify(this.plan))
      .subscribe(
        (res: any) => {
          console.log(res);
          this.router.navigate(['..'], { relativeTo: this.route });
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getSubjects() {
    this.data.find('/subjects').subscribe(
      (res: any) => {
        this.arraySubjects = res.prestamos;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCareers() {
    this.data.find('/careers').subscribe(
      (res: any) => {
        this.arrayCarrers = res.prestamos;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
