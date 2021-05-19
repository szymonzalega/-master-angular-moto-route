import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {AngularFireModule} from 'angularfire'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteListComponent } from "./routes/route-list-view/route-list/route-list.component"
import { ListElementComponent } from "./routes/route-list-view/list-element/list-element.component";
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module';
import { RouteListViewComponent } from './routes/route-list-view/route-list-view.component';
import { HeaderSectionComponent } from './routes/route-list-view/header-section/header-section.component';
import { TitleSectionComponent } from './routes/title-section/title-section.component';
import { RouteDetailsViewComponent } from './routes/route-details-view/route-details-view.component';
import { DescriptionSectionComponent } from './routes/route-details-view/description-section/description-section.component';
import { DetailsSectionComponent } from './routes/route-details-view/details-section/details-section.component';
import { MapSectionComponent } from './routes/route-details-view/map-section/map-section.component';
import { DetailsItemComponent } from './routes/route-details-view/details-item/details-item.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    RouteListComponent,
    HeaderSectionComponent,
    ListElementComponent,
    RouteListViewComponent,
    TitleSectionComponent,
    RouteDetailsViewComponent,
    DescriptionSectionComponent,
    DetailsSectionComponent,
    MapSectionComponent,
    DetailsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
