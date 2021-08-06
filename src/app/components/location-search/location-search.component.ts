import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {UntilDestroy} from '@ngneat/until-destroy';
import {LocationService} from '../location-info/state/location.service';

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

  constructor(private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.searchForm.get('search').valueChanges.pipe(debounceTime(750)).subscribe((city) => {
      this.locationService.setLocationByCityName(city);
    });
  }

}
