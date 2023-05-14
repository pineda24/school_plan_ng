import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SujectModel } from 'src/app/models/subject.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  subject: SujectModel = new SujectModel();

  action: any;
  idSubject: any;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit() {
    this.idSubject = this.route.snapshot.paramMap.get('id');
    this.action = this.idSubject ? 'edit' : 'create';
    if (this.action == 'edit') {
      this.data.findById('/prestamos', `${this.idSubject}/`).subscribe(
        (res: any) => {
          this.subject = res.prestamos[0];
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
      .insertOne('/prestamos', JSON.stringify(this.subject))
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
      .updateOnee('/prestamos', `${this.idSubject}/`, JSON.stringify(this.subject))
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
}
