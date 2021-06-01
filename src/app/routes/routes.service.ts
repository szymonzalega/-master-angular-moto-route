import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  routesList!: Observable<any[]>
  routesCollection!: AngularFirestoreCollection<any[]>

  getRoute(routeId: string | null) {
    return this.getRoutes().pipe(
      map(route => route.find(route => route.id === routeId))
    )
  }

  getRoutes() {
    this.routesCollection = this.firestore.collection('routes');
    this.routesList = this.routesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.routesList;
  }

 createRoute(route: any) {
    const savedRouteRef = this.firestore.collection("routes").add(route);
};

updateRoute(route: any) {
    this.firestore.collection("routes").doc(route.id).set(route);
};

removeRoute(routeId: string) {
    this.firestore.collection("routes").doc(routeId).delete();
};

  constructor(private firestore: AngularFirestore) { }
}
