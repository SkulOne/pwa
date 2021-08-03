import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {WeatherClientService} from './services/weather-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Weather PWA';
  data: any;

  constructor(updates: SwUpdate, private weatherClient: WeatherClientService) {
    updates.available.subscribe(() => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit(): void {
    this.data = this.weatherClient.getWeather();
  }

}
