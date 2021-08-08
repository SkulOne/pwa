import {guid, ID} from '@datorama/akita';

export function createWeather(params: CurrentWeather | DailyWeather): DailyWeather {
  return {
    id: guid(),
    ...params,
  } as DailyWeather;
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
  id: ID;
  clouds: number;
  dew_point: number;
  dt: number | Date;
  humidity: number;
  pressure: number;
  sunrise: number | Date;
  sunset: number | Date;
  uvi: number;
  weather: WeatherAssets | string;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface CurrentWeather extends WeatherAbstract {
  visibility: number;
  feels_like: number;
  temp: number;
}

export interface DailyWeather extends WeatherAbstract {
  moon_phase: number;
  moonrise: number | Date;
  moonset: number | Date;
  feels_like: FeelsLike;
  temp: Temp;
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
