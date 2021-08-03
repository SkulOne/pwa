import {ChangeDetectionStrategy, Component, Inject, ViewEncapsulation} from '@angular/core';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-elderly',
  styleUrls: ['./night-theme.component.scss'],
  template: '',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NightThemeComponent extends AbstractTuiThemeSwitcher {
  constructor(@Inject(DOCUMENT) documentRef: any) {
    super(documentRef as Document);
  }
}
