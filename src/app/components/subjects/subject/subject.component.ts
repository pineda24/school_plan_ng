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

  action: any = 'edit';

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  saveCollection() {

  }
}
