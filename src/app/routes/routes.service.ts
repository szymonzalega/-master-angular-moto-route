import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { Level, RouteType } from "./route";
import Route from "./route"

@Injectable({
  providedIn: 'root'
})
export class RoutesService {


  // routesList = new BehaviorSubject<Route[]>([]);
  routesList = [new Route("1", "route 1", "desc", 12, RouteType.ENDURO, "asdsd", Level.EASY)] as Route[]

  getRoutes() {
    let route1 = new Route("1", "route 1", "desc", 12, RouteType.ENDURO, "asdsd", Level.EASY);
    console.log("xxx")

    // this.routesList.next([...this.routesList.getValue(), route1])
  }

  constructor() { }
}
