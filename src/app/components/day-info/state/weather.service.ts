import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {createWeather, CurrentWeather, DailyWeather, WeatherAssets, WeatherResponse} from './weather.model';
import {WeatherStore} from './weather.store';
import {Observable} from 'rxjs';
import {Coords} from '../../location-info/state/city.interface';

@Injectable({providedIn: 'root'})
export class WeatherService {

  private readonly key = 'f9416005a7e363f41369fbe4fb069d52';
  private readonly URL = 'https://api.openweathermap.org/data/2.5/onecall';
  private readonly unixDateProperties = ['dt', 'moonrise', 'moonset', 'sunrise', 'sunset'];

  constructor(private weatherStore: WeatherStore, private http: HttpClient) {
  }

  get(coords: Coords): Observable<WeatherResponse> {
    const requestURL = `${this.URL}?lat=${coords.latitude}&lon=${coords.longitude}&exclude=minutely,hourly,alerts&appid=${this.key}&units=metric&lang=ru`;
    return this.http.get<WeatherResponse>(requestURL).pipe(tap((entities) => {
      entities.daily.shift();
      const entity = entities.daily.map((day) => createWeather(this.pipeDay(day)));
      entities.current = this.pipeDay(entities.current) as CurrentWeather;
      this.weatherStore.update({currentDay: entities.current});
      this.weatherStore.set(entity);
    }));
  }

  selectDay(day: DailyWeather): void {
    this.weatherStore.update({selectedDay: day});
  }

  private pipeDay(day: CurrentWeather | DailyWeather): CurrentWeather | DailyWeather {
    day.weather = (day.weather as WeatherAssets)[0]?.description;
    day.feels_like = typeof day.feels_like === 'number' ? day.feels_like : day.feels_like.day;
    this.unixDateProperties.forEach((property) => {
      if (day[property]) {
        day[property] = new Date(day[property] * 1000);
      }
    });
    return day;
  }

}
