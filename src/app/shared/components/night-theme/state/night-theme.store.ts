import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';

export interface NightThemeState extends EntityState {
  enable: boolean;
}

const initialState = {
  enable: false
};

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'night-theme'})
export class NightThemeStore extends EntityStore<NightThemeState> {

  constructor() {
    super(initialState);
  }

  updateTheme(enable: boolean): void {
    this.update({enable});
  }
}


