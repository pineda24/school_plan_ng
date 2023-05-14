import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {

  action: any = 'edit';

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  saveCollection() {

  }
}
