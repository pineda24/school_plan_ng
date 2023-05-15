import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CareerModel } from 'src/app/models/career.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent {
  careers: Array<CareerModel> = [];

  constructor(
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCareers();
  }

  async getCareers() {
    await this.data.find('/carreer').subscribe(
      (res) => {
        this.careers = res.carreers;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async deleteCareer(id: string) {
    await this.data.deleteOne('/carreer', `${id}`).subscribe(
      (res) => {
        this.getCareers();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
