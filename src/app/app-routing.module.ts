import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "", component: MainComponent, children: [
      { path: 'subjects', component: SubjectsComponent },
      // { path: 'stores/create', component: StoreComponent },
      // { path: 'stores/:id', component: StoreComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
