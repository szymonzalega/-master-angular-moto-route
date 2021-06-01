import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSectionComponent } from './route-list-view/header-section/header-section.component';
import { RouteListComponent } from './route-list-view/route-list/route-list.component';
import { ListElementComponent } from './route-list-view/list-element/list-element.component';
import { RouteListViewComponent } from './route-list-view/route-list-view.component';
import { MaterialModule } from '../material/material.module';
import { TitleSectionComponent } from './title-section/title-section.component';
import { RouteDetailsViewComponent } from './route-details-view/route-details-view.component';
import { DescriptionSectionComponent } from './route-details-view/description-section/description-section.component';
import { DetailsSectionComponent } from './route-details-view/details-section/details-section.component';
import { MapSectionComponent } from './route-details-view/map-section/map-section.component';
import { DetailsItemComponent } from './route-details-view/details-item/details-item.component';
import { RouteManageViewComponent } from './route-manage-view/route-manage-view.component';
import { FormSectionComponent } from './route-manage-view/form-section/form-section.component';
import { HomeViewComponent } from './home-view/home-view.component';



@NgModule({
  declarations: [
    HeaderSectionComponent,
    RouteListComponent,
    ListElementComponent,
    RouteListViewComponent,
    TitleSectionComponent,
    RouteDetailsViewComponent,
    DescriptionSectionComponent,
    DetailsSectionComponent,
    MapSectionComponent,
    DetailsItemComponent,
    RouteManageViewComponent,
    FormSectionComponent,
    HomeViewComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class RoutesModule { }
