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

  constructor(private firestore: AngularFirestore) { }
}
