import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LocationState, LocationStore} from './location.store';
import {Observable} from 'rxjs';
import {filter, map, switchMap, take} from 'rxjs/operators';
import {FeatureCollection, Point} from 'geojson';
import {City, Coords} from './city.interface';

@Injectable({providedIn: 'root'})
export class LocationService {


  constructor(private locationStore: LocationStore, private http: HttpClient) {
    this.initState();
  }

  setLocationByCityName(cityName: string): void {
    this.http.get<FeatureCollection<Point, City>>(`https://nominatim.openstreetmap.org/?city=${cityName}&addressdetails=1&format=geojson&limit=1`)
      .pipe(take(1))
      .subscribe((value) => {
        if (value.features?.length) {
          const location = this.convertGeoJsonToLocationState(value);
          if (location?.name.city === cityName) {
            this.locationStore.setError(null);
            this.locationStore.update(location);
            return;
          }
        }
        this.locationStore.setError('Город не найден');
      });
  }

  private getUserCoords(): Observable<Coords> {
    return new Observable((observer) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coords = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            } as Coords;
            observer.next(coords);
          },
          (error) => {
            observer.error(error);
          }
        );
      } else {
        observer.error('Geolocation not available');
      }
    });
  }

  private getLocationByCoords(coords: Coords): Observable<LocationState> {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=geojson&zoom=10`;
    return this.http.get<FeatureCollection<Point, City>>(url)
      .pipe(map((value) => {
        return this.convertGeoJsonToLocationState(value);
      }));
  }

  private convertGeoJsonToLocationState(geo: FeatureCollection<Point, City>): LocationState {
    const address = geo.features[0]?.properties.address;
    const coordinates = geo.features[0]?.geometry.coordinates;
    return {
      name: {
        city: address.city,
        state: address.state,
        country: address.country,
      },
      coords: {
        latitude: coordinates[1],
        longitude: coordinates[0],
      }
    } as LocationState;
  }

  private initState(): void {
    this.getUserCoords()
      .pipe(
        switchMap((coords) => this.getLocationByCoords(coords)),
        take(1),
      )
      .subscribe((value) => {
        this.setLocationByCityName(value.name.city);
      });
  }
}
