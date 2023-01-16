import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'navigation', url: '/navigation', icon: 'locate' },
    { title: 'navigationDetail', url: '/navigationdetail/:id', icon: 'search' },
    { title: 'numbers', url: '/numbers', icon: 'calculator' },
    { title: 'objects', url: '/objects', icon: 'briefcase' },
    { title: 'string', url: '/string', icon: 'text' },
    { title: 'array', url: '/array', icon: 'grid' },
    { title: 'dataBinding', url: '/data-binding', icon: 'grid' },
    { title: 'rechner', url: '/rechner', icon: 'calculator' },
    { title: 'alert', url: '/alert', icon: 'warning' },
    { title: 'silvanundpatricessuperduperuploadprojekt', url: '/silvanundpatricessuperduperuploadprojekt', icon: 'document' },
    { title: 'minecraft', url: '/minecraft', icon: 'document' },
    { title: 'newsletter', url: '/newsletter', icon: 'briefcase' },
    { title: 'login', url: '/login', icon: 'log-in' },
    { title: 'register', url: '/register', icon: 'person-add' },
    { title: 'storage', url: '/storage', icon: 'cube' },
    { title: 'chat', url: '/chat', icon: 'cube' },
  ];

  constructor() {}
}
