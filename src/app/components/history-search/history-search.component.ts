import {Component, Input, OnInit} from '@angular/core';
import {LocationQuery} from '../location-info/state/location.query';
import {LocationService} from '../location-info/state/location.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-history-search',
  templateUrl: './history-search.component.html',
  styleUrls: ['./history-search.component.scss']
})
export class HistorySearchComponent implements OnInit {

  cities: string[] = [];

  constructor(private locationQuery: LocationQuery, private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.locationQuery.locationName$.pipe(filter(value => !!value)).subscribe((location) => {
      this.cities.push(location?.city);
      if (this.cities.length > 10) {
        this.cities.shift();
      }
    });
  }

  selectCity(city: string): void {
    if (city !== this.cities[this.cities.length - 1]) {
      this.locationService.setLocationByCityName(city);
    }
  }
}
