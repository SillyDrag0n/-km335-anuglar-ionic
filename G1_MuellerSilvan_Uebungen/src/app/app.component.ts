import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'navigation', url: '/navigation', icon: 'locate' },
    { title: 'navigationDetail', url: '/navigationdetail', icon: 'search' },
  ];
  constructor() {}
}
