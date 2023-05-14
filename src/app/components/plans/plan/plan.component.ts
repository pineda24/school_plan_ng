import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent {
  action: any = 'edit';

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  saveCollection() {

  }
}
