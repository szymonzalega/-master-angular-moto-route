import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSectionComponent } from './route-list-view/header-section/header-section.component';
import { RouteListComponent } from './route-list-view/route-list/route-list.component';
import { ListElementComponent } from './route-list-view/list-element/list-element.component';
import { RouteListViewComponent } from './route-list-view/route-list-view.component';
import { MaterialModule } from '../material/material.module';
import { TitleSectionComponent } from './title-section/title-section.component';



@NgModule({
  declarations: [
    HeaderSectionComponent,
    RouteListComponent,
    ListElementComponent,
    RouteListViewComponent,
    TitleSectionComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class RoutesModule { }
