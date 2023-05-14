import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// LAYOUT
import { CleanComponent } from './layout/clean/clean.component';
import { FooterComponent } from './layout/main/footer/footer.component';
import { HeaderComponent } from './layout/main/header/header.component';
import { MenuComponent } from './layout/main/menu/menu.component';
import { MainComponent } from './layout/main/main.component';
import { SideComponent } from './layout/main/side/side.component';
import { MenuVerticalComponent } from './layout/main/menu/menu-vertical/menu-vertical.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { PlansComponent } from './components/plans/plans.component';
import { CareersComponent } from './components/careers/careers.component';


@NgModule({
  declarations: [
    AppComponent,
    CleanComponent,
    MainComponent,
    MenuComponent,
    MenuVerticalComponent,
    FooterComponent,
    HeaderComponent,
    SideComponent,
    SubjectsComponent,
    PlansComponent,
    CareersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
