import {Injectable} from '@angular/core';
import {NightThemeStore} from './night-theme.store';

@Injectable({providedIn: 'root'})
export class NightThemeService {

  constructor(private nightThemeStore: NightThemeStore) {
  }

  changeTheme(enable: boolean): void {
    this.nightThemeStore.updateTheme(enable);
  }

}
