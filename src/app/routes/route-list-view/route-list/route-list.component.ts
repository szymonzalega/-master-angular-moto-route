import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesService } from '../../routes.service';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss']
})
export class RouteListComponent implements OnInit {

  items!: Observable<any[]>;
  routesList!: any;


  ngOnInit(): void {
    this.routesService.getRoutes().subscribe((value) => {
      this.routesList = value
    })
  }

  constructor(private routesService: RoutesService) { }
}
