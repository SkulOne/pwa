import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {WeatherStore, WeatherState} from './weather.store';
import {filter} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class WeatherQuery extends QueryEntity<WeatherState> {

  currentDay$ = this.select('currentDay');
  selectedDay$ = this.select('selectedDay').pipe(filter(value => !!value));
  weekWeather$ = this.selectAll();

  constructor(protected store: WeatherStore) {
    super(store);
  }

}
