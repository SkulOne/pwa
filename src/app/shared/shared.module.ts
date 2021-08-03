import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NightThemeComponent} from './components/night-theme/night-theme.component';

@NgModule({
  declarations: [NightThemeComponent],
  imports: [
    CommonModule
  ],
  exports: [NightThemeComponent],
})
export class SharedModule {
}
