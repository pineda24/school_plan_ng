import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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

//primeng
import { TabMenuModule } from 'primeng/tabmenu';
import { ChartModule } from 'primeng/chart';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DialogModule } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ImageModule } from 'primeng/image';
import { StepsModule } from 'primeng/steps';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DragDropModule } from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
