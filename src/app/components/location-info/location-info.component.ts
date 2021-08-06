import {Component} from '@angular/core';
import {LocationService} from './state/location.service';
import {LocationQuery} from './state/location.query';
import {UntilDestroy} from '@ngneat/until-destroy';
import {map} from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss']
})
export class LocationInfoComponent {
  locationName$ = this.localeQuery.locationName$.pipe(map(nameState => nameState.name));
  coords$ = this.localeQuery.coords$.pipe(map(coords => coords.coords));

  constructor(private localeService: LocationService, private localeQuery: LocationQuery) {
  }

}
