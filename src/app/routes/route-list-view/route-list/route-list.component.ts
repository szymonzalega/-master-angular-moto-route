import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../../routes.service';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss']
})
export class RouteListComponent implements OnInit {

  constructor(private routesService: RoutesService) { }

  routesList = this.routesService.routesList;

  ngOnInit(): void {
    // this.routesService.getRoutes();
    console.log(this.routesList);

  }

}
