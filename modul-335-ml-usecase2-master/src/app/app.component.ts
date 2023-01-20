import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    public appPages = [
        {
            title: 'Gallerie',
            url: '/gallerie',
            icon: 'images',
            titleColor: 'tertiary',
            iconColor: 'tertiary',
        },
        {
            title: 'Ferienorte',
            url: '/ferienorte',
            icon: 'airplane',
            titleColor: 'danger',
            iconColor: 'danger',
        },
    ];

    constructor(
        private platform: Platform,
        private router: Router,
        private menuCtrl: MenuController
    ) {
        this.initializeApp();
        this.checkSidemenuDisplay(router.url);
    }

    ngOnInit() {
        this.router.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationEnd) {
                this.checkSidemenuDisplay(event.url);
            }
        });
    }

    checkSidemenuDisplay(url: string) {
        const removeSidemenuForURLs = [
            '/login',
            '/registrierung',
            '/willkommen',
        ];
        if (removeSidemenuForURLs.includes(url)) {
            this.menuCtrl.enable(false);
        } else {
            this.menuCtrl.enable(true);
        }
    }

    initializeApp() {}
}
