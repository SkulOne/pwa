import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WeatherClientService {
  private readonly key = '825146f3081846c8a7e162238210208';
  private readonly URL = 'http://api.weatherapi.com/v1';

  constructor(private httpClient: HttpClient) {
  }

  getWeather(): any {
    return this.httpClient.get(`${this.URL}/forecast.json?key=${this.key}&q=43,47`);
  }
}
