import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime, filter} from 'rxjs/operators';
import {UntilDestroy} from '@ngneat/until-destroy';
import {LocationService} from '../location-info/state/location.service';
import {LocationQuery} from '../location-info/state/location.query';

@UntilDestroy()
@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent implements OnInit {
  searchForm = new FormGroup({
    search: new FormControl(null),
  });
  searchControl = this.searchForm.get('search');
  cityNotFound$ = this.locationQuery.cityNotFound$;

  constructor(private locationService: LocationService, private locationQuery: LocationQuery) {
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(750),
      filter((value) => !!value),
    ).subscribe((city) => {
      this.locationService.setLocationByCityName(city);
    });
  }

}
