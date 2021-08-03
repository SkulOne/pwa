import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  themeForm = new FormGroup({
    toggle: new FormControl(false),
  });

  constructor() {
  }

  ngOnInit(): void {
    this.themeForm.valueChanges.subscribe(val => {
      console.log(val);
    });
  }

}
