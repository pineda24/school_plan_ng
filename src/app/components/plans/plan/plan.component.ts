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
  idSubject: any;
  idCareer: any;
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
    this.idSubject = this.route.snapshot.paramMap.get('sid');
    this.idCareer = this.route.snapshot.paramMap.get('cid');
    this.action = this.idSubject ? 'edit' : 'create';
    this.getSubjects();
    this.getCareers();
    if (this.action == 'edit') {
      this.data.findBySubjectAndCareer('/plan', `${this.idSubject}`, `${this.idCareer}`).subscribe(
        (res: any) => {
          this.plan = res.plan[0];
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
      .create('/plan', JSON.stringify(this.plan))
      .subscribe(
        (res: any) => {
          this.router.navigate(['..'], { relativeTo: this.route });
        },
        (err) => {
          console.log(err);
        }
      );
  }

  async updateCollection() {
    this.data
      .updateBySubjectAndCareer('/plan', `${this.idSubject}`, `${this.idCareer}`, JSON.stringify(this.plan))
      .subscribe(
        (res: any) => {
          this.router.navigate(['../..'], { relativeTo: this.route });
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getSubjects() {
    this.data.find('/subject').subscribe(
      (res: any) => {
        this.arraySubjects = res.subjects;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCareers() {
    this.data.find('/carreer').subscribe(
      (res: any) => {
        this.arrayCarrers = res.carreers;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
