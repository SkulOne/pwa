import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { NightThemeStore, NightThemeState } from './night-theme.store';

@Injectable({ providedIn: 'root' })
export class NightThemeQuery extends QueryEntity<NightThemeState> {

  selectNightTheme = this.select(state => state.enable);

  constructor(protected store: NightThemeStore) {
    super(store);
  }

}
