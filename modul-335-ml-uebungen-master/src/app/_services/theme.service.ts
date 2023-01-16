import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private darkMode: boolean = true;

    constructor(
        private platform: Platform,
        private storageService: StorageService
    ) {
        this.platform.ready().then(() => {
            const prefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)'
            );
            prefersDark.addListener((e) => {
                this.setAppTheme(e.matches);
            });

            this.storageService.get('darkMode').then((data) => {
                this.darkMode = data;
                this.checkDarkModeState();
            });
        });
    }

    toggleAppTheme() {
        this.darkMode = !this.darkMode;
        this.setAppTheme(this.darkMode);
    }

    setAppTheme(dark: boolean) {
        this.darkMode = dark;
        this.storageService.set('darkMode', this.darkMode);

        this.checkDarkModeState();
    }

    checkDarkModeState() {
        if (this.darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        return Promise.resolve(this.darkMode);
    }
}
