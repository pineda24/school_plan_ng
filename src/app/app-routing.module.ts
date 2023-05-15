import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { CareersComponent } from './components/careers/careers.component';
import { PlansComponent } from './components/plans/plans.component';
import { SubjectComponent } from './components/subjects/subject/subject.component';
import { CareerComponent } from './components/careers/career/career.component';
import { PlanComponent } from './components/plans/plan/plan.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "", component: MainComponent, children: [
      { path: 'subjects', component: SubjectsComponent },
      { path: 'subjects/create', component: SubjectComponent },
      { path: 'subjects/:id', component: SubjectComponent },

      { path: 'careers', component: CareersComponent },
      { path: 'careers/create', component: CareerComponent },
      { path: 'careers/:id', component: CareerComponent },

      { path: 'plans', component: PlansComponent },
      { path: 'plans/create', component: PlanComponent },
      { path: 'plans/:sid/:cid', component: PlanComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
