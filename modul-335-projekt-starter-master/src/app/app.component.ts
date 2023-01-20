import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { User } from './_types/user.types';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    public appPages = [
    { title: 'chat', url: '/chat', icon: 'document'},
    { title: 'news', url: '/news', icon: 'chatbubbles'},
    ];
    user = {} as User;

    constructor(private platform: Platform) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {});
    }
}
