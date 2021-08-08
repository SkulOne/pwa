import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {WeatherQuery} from './components/day-info/state/weather.query';
import {filter, switchMap} from 'rxjs/operators';
import {LocationQuery} from './components/location-info/state/location.query';
import {WeatherService} from './components/day-info/state/weather.service';
import {TuiDialogService} from '@taiga-ui/core';
import {Inject} from '@angular/core';
import {UntilDestroy} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  @ViewChild('dialog') dialog;
  selectedDay$ = this.weatherQuery.selectedDay$;
  currentDay$ = this.weatherQuery.currentDay$;

  constructor(
    private updates: SwUpdate,
    private weatherQuery: WeatherQuery,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    private locationQuery: LocationQuery,
    private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.updates.available.subscribe(() => {
      this.updates.activateUpdate().then(() => document.location.reload());
    });

    this.weatherQuery.selectedDay$.subscribe(() => {
      this.dialogService.open(this.dialog).subscribe();
    });

    this.locationQuery.coords$.pipe(
      filter((value) => !!value),
      switchMap((coords) => this.weatherService.get(coords))
    ).subscribe();
  }

}
