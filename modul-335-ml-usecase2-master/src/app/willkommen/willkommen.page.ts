import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StorageService } from '../_services/storage.service';
@Component({
    selector: 'app-willkommen',
    templateUrl: './willkommen.page.html',
    styleUrls: ['./willkommen.page.scss'],
})
export class WillkommenPage {
    constructor(
        private router: Router,
        private storageService: StorageService,
        private menuCtrl: MenuController
    ) {}

    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }

    welcomeDone() {
        this.storageService.set('WelcomeDone', true);
        this.router.navigateByUrl('/login');
    }
}
