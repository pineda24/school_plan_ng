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

  action: any = 'edit';
  career: CareerModel = new CareerModel();

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  saveCollection() {

  }
}
