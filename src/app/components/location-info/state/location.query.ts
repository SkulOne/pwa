import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {LocationStore, LocationState} from './location.store';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class LocationQuery extends QueryEntity<LocationState> {

  coords$ = this.select(['coords']).pipe(map(coords => coords.coords));
  locationName$ = this.select(['name']).pipe(map(nameState => nameState.name));
  cityNotFound$ = this.selectError();

  constructor(protected store: LocationStore) {
    super(store);
  }

}
