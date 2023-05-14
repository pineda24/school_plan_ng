import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

  action: any = 'edit';

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  saveCollection() {

  }
}
