import {Component, Input, OnInit} from '@angular/core';
import {UntilDestroy} from '@ngneat/until-destroy';
import {CurrentWeather, DailyWeather, FeelsLike, Temp} from './state/weather.model';

@UntilDestroy()
@Component({
  selector: 'app-day-info',
  templateUrl: './day-info.component.html',
  styleUrls: ['./day-info.component.scss']
})
export class DayInfoComponent {

  @Input() day: CurrentWeather | DailyWeather;

  constructor() {
  }

  getTemp(temp: number | Temp): number {
    return typeof temp === 'number' ? temp : temp.day;
  }
}
