import {Component, OnInit} from '@angular/core';
import {WeatherService} from './state/weather.service';
import {LocationQuery} from '../location-info/state/location.query';
import {UntilDestroy} from '@ngneat/until-destroy';
import {filter, switchMap} from 'rxjs/operators';
import {WeatherQuery} from './state/weather.query';
import {Observable} from 'rxjs';
import {CurrentWeather} from './state/weather.model';

@UntilDestroy()
@Component({
  selector: 'app-day-info',
  templateUrl: './day-info.component.html',
  styleUrls: ['./day-info.component.scss']
})
export class DayInfoComponent implements OnInit {

  currentDayWeather$: Observable<CurrentWeather>;

  constructor(private weatherService: WeatherService, private locationQuery: LocationQuery, private weatherQuery: WeatherQuery) {
  }

  ngOnInit(): void {
    this.locationQuery.coords$.pipe(
      filter((value) => !!value.coords),
      switchMap((coords) => this.weatherService.get(coords.coords))
    ).subscribe();

    this.currentDayWeather$ = this.weatherQuery.currentDay$;
  }

}
