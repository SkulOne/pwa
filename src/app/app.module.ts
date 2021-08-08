import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {TuiButtonModule, TuiDialogModule, TuiErrorModule, TuiModeModule, TuiRootModule} from '@taiga-ui/core';
import {TuiInputModule, TuiIslandModule, TuiToggleModule} from '@taiga-ui/kit';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './components/header/header.component';
import {SharedModule} from './shared/shared.module';
import {LocationInfoComponent} from './components/location-info/location-info.component';
import {DayInfoComponent} from './components/day-info/day-info.component';
import {LocationSearchComponent} from './components/location-search/location-search.component';
import {DaysBarComponent} from './components/days-bar/days-bar.component';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HistorySearchComponent } from './components/history-search/history-search.component';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocationInfoComponent,
    LocationSearchComponent,
    DaysBarComponent,
    DayInfoComponent,
    HistorySearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule,
    TuiRootModule,
    TuiToggleModule,
    TuiInputModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TuiModeModule,
    TuiIslandModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    TuiButtonModule,
    TuiErrorModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru-RU'}],
  bootstrap: [AppComponent],
  entryComponents: [
    DayInfoComponent,
  ]
})
export class AppModule {
}
