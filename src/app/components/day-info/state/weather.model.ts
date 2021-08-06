import {guid, ID} from '@datorama/akita';

export function createWeather(params: Partial<DailyWeather>): Weather {
  return {
    id: guid(),
    ...params,
  } as Weather;
}


export interface Weather extends DailyWeather {
  id: ID;
}

export interface WeatherResponse {
  current: CurrentWeather;
  daily: DailyWeather[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}

interface WeatherAbstract {
  clouds: number;
  dew_point: number;
  dt: number | Date;
  feels_like: FeelsLike;
  humidity: number;
  pressure: number;
  sunrise: number | Date;
  sunset: number | Date;
  temp: Temp;
  uvi: number;
  weather: WeatherAssets;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface CurrentWeather extends WeatherAbstract {
  visibility: number;
}

export interface DailyWeather extends WeatherAbstract {
  moon_phase: number;
  moonrise: number | Date;
  moonset: number | Date;
}

export interface WeatherAssets {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}
