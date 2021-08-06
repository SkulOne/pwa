import {GeoJsonProperties} from 'geojson';

export interface City extends GeoJsonProperties {
  address: Address;
  addresstype: string;
  category: string;
  display_name: string;
  importance: number;
  name: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  place_rank: number;
  type: string;
}

export interface Address {
  city: string;
  country: string;
  country_code: string;
  county: string;
  postcode: string;
  region: string;
  state: string;
}
