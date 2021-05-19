import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Route from '../route';
import { RoutesService } from '../routes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-route-details-view',
  templateUrl: './route-details-view.component.html',
  styleUrls: ['./route-details-view.component.scss']
})
export class RouteDetailsViewComponent implements OnInit {

  currentRoute!: Route
  selectedId!: string | null

  ngOnInit(): void {
    this.selectedId = this.route.snapshot.paramMap.get('id');
  }

  constructor(private route: ActivatedRoute, private routesService: RoutesService) {
    route.params.subscribe(
      (params) => {
        this.selectedId = params['id'];
        console.log("params.get('id')", params['id']);
        this.routesService.getRoute(this.selectedId).subscribe((value) => {
          this.currentRoute = value
        });
      });
  }
}

