import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { CareersComponent } from './components/careers/careers.component';
import { PlansComponent } from './components/plans/plans.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "", component: MainComponent, children: [
      { path: 'subjects', component: SubjectsComponent },
      // { path: 'stores/create', component: StoreComponent },
      // { path: 'stores/:id', component: StoreComponent },
      { path: 'careers', component: CareersComponent },
      { path: 'plans', component: PlansComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
