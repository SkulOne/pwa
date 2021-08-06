import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NightThemeService} from '../../shared/components/night-theme/state/night-theme.service';
import {UntilDestroy} from '@ngneat/until-destroy';
import {NightThemeQuery} from '../../shared/components/night-theme/state/night-theme.query';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  themeForm = new FormGroup({
    enable: new FormControl(false),
  });

  constructor(private themeService: NightThemeService, private themeQuery: NightThemeQuery) {
  }

  ngOnInit(): void {
    const themeFormControl = this.themeForm.get('enable');

    themeFormControl.valueChanges.subscribe((value) => {
      this.themeService.changeTheme(value);
    });

    this.themeQuery.selectNightTheme.subscribe((enable) => {
      themeFormControl.setValue(enable);
    });
  }
}

