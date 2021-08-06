import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Weather PWA';
  data: any;

  constructor(private updates: SwUpdate) {}

  ngOnInit(): void {
    this.updates.available.subscribe(() => {
      this.updates.activateUpdate().then(() => document.location.reload());
    });
  }

}
