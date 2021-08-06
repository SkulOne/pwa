import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';

export interface Coords {
  latitude: number;
  longitude: number;
}

export interface LocationName {
  city: string;
  state: string;
  country: string;
}

export interface LocationState extends EntityState {
  coords: Coords;
  name: LocationName;
  searchedCity: string;
}

const initialStore: LocationState = {
  coords: null,
  name: null,
  searchedCity: null,
};

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'location'})
export class LocationStore extends EntityStore<LocationState> {

  constructor() {
    super(initialStore);
  }

}
