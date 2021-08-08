import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {CurrentWeather, DailyWeather} from './weather.model';

export interface WeatherState extends EntityState<DailyWeather> {
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
