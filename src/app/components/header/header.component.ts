import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UntilDestroy} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  themeForm = new FormGroup({
    enable: new FormControl(Number(localStorage.getItem('enable'))),
  });

  constructor() {
  }

  ngOnInit(): void {
    this.themeForm.get('enable').valueChanges.subscribe((value: boolean) => {
      localStorage.setItem('enable', Number(value).toString());
    });
  }
}

