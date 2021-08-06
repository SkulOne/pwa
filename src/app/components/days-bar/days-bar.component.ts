import {Component, OnInit} from '@angular/core';
import {WeatherQuery} from '../day-info/state/weather.query';
import {DailyWeather} from '../day-info/state/weather.model';
import {WeatherService} from '../day-info/state/weather.service';

@Component({
  selector: 'app-days-bar',
  templateUrl: './days-bar.component.html',
  styleUrls: ['./days-bar.component.scss']
})
export class DaysBarComponent implements OnInit {

  weekWeather$ = this.weatherQuery.weekWeather$;

  constructor(private weatherQuery: WeatherQuery, private weatherService: WeatherService) {
  }

  ngOnInit(): void {
  }

  selectDay(day: DailyWeather): void {
    this.weatherService.selectDay(day);
  }
}
