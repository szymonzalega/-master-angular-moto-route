import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './routes/home-view/home-view.component';
import { RouteDetailsViewComponent } from './routes/route-details-view/route-details-view.component';
import { RouteManageViewComponent } from './routes/route-manage-view/route-manage-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent, pathMatch: 'full' },
  { path: 'details/:id', component: RouteDetailsViewComponent },
  { path: 'add', component: RouteManageViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
