import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteDetailsViewComponent } from './routes/route-details-view/route-details-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'routes', pathMatch: 'full'},
  {path: 'details/:id', component: RouteDetailsViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
