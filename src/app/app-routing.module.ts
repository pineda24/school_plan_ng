import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { CareersComponent } from './components/careers/careers.component';
import { PlansComponent } from './components/plans/plans.component';
import { SubjectComponent } from './components/subjects/subject/subject.component';
import { CareerComponent } from './components/careers/career/career.component';

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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
