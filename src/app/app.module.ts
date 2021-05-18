import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouteListComponent} from "./routes/route-list-view/route-list/route-list.component"
import {ListElementComponent} from "./routes/route-list-view/list-element/list-element.component";
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module';
import { RouteListViewComponent } from './routes/route-list-view/route-list-view.component';
import { HeaderSectionComponent } from './routes/route-list-view/header-section/header-section.component';
import { TitleSectionComponent } from './routes/title-section/title-section.component';


@NgModule({
  declarations: [
    AppComponent,
    RouteListComponent,
    HeaderSectionComponent,
    ListElementComponent,
    RouteListViewComponent,
    TitleSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
