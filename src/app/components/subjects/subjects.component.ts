import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SujectModel } from 'src/app/models/subject.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  subjects: Array<SujectModel> = [];

  constructor(
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSubjects();
  }

  async getSubjects() {
    await this.data.find('/subject').subscribe(
      (res) => {
        this.subjects = res.subjects;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async deleteSubject(id: string) {
    await this.data.deleteOne('/subject', `${id}`).subscribe(
      (res) => {
        this.getSubjects();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
