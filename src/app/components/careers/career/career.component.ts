import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CareerModel } from 'src/app/models/career.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {

  idCareer: any;
  action: any;
  career: CareerModel = new CareerModel();

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit() {
    this.idCareer = this.route.snapshot.paramMap.get('id');
    this.action = this.idCareer ? 'edit' : 'create';
    if (this.action == 'edit') {
      this.data.findById('/carreer', `${this.idCareer}`).subscribe(
        (res: any) => {
          this.career = res.carreer[0];
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
      .create('/carreer', JSON.stringify(this.career))
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
      .update('/carreer', `${this.idCareer}`, JSON.stringify(this.career))
      .subscribe(
        (res: any) => {
          this.router.navigate(['..'], { relativeTo: this.route });
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
