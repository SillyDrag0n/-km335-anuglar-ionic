import { Component, OnInit } from '@angular/core';

import { ThemeService } from './_services/theme.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
    public selectedIndex = 0;
    public appPages = [
        { title: 'Home', url: '/home', icon: 'home' },
        { title: 'Navigation', url: '/navigation', icon: 'navigate' },
        {
            title: 'Navigation Detail',
            url: '/navigation-detail',
            icon: 'navigate',
        },
        { title: 'Zahlen', url: '/zahlen', icon: 'infinite' },
        { title: 'String', url: '/string', icon: 'link' },
        { title: 'Objekte', url: '/objekte', icon: 'planet' },
        { title: 'Array', url: '/array', icon: 'list' },
        { title: 'Data Binding', url: '/data-binding', icon: 'code-working' },
        { title: 'Rechner', url: '/rechner', icon: 'calculator' },
        { title: 'Filter', url: '/filter', icon: 'search' },
        { title: 'Alert', url: '/alert', icon: 'notifications' },
        { title: 'Newsletter', url: '/newsletter', icon: 'mail' },
        { title: 'Storage', url: '/storage', icon: 'save' },
        { title: 'Chat', url: '/chat', icon: 'send' },
    ];

    darkToggleState: boolean;

    constructor(private themeService: ThemeService) {
        this.initializeApp();
    }

    initializeApp() {
        this.themeService.checkDarkModeState().then((data) => {
            this.darkToggleState = data;
        });
    }

    ngOnInit() {
        // Pfad von split wurde gegenüber dem Ionic-Default-Projekt hier auf '/' anstatt 'folder/' angepasst
        const path = window.location.pathname.split('/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(
                (page) => page.title.toLowerCase() === path.toLowerCase()
            );
        }
    }

    toggleDarkMode() {
        this.themeService.toggleAppTheme();
    }
}
