import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {CurrentWeather, DailyWeather, Weather} from './weather.model';

export interface WeatherState extends EntityState<Weather> {
  selectedDay: DailyWeather;
  currentDay: CurrentWeather;
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'weather'})
export class WeatherStore extends EntityStore<WeatherState> {

  constructor() {
    super();
  }

}
