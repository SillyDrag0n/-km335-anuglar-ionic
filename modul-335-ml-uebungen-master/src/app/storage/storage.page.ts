import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';

@Component({
    selector: 'app-lokaler-storage',
    templateUrl: './storage.page.html',
    styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {
    name: string;
    pushToggle: boolean;
    newsletterToggle: boolean;

    constructor(private storageService: StorageService) {
        this.loadValuesFromStorage();
    }

    ngOnInit() {}
    loadValuesFromStorage() {
        this.storageService.get('name').then((val) => {
            this.name = val;
        });
        this.storageService.get('pushToggle').then((val) => {
            this.pushToggle = val;
        });
        this.storageService.get('newsletterToggle').then((val) => {
            this.newsletterToggle = val;
        });
    }

    speichereEinstellungen() {
        this.storageService.set('name', this.name);
        this.storageService.set('pushToggle', this.pushToggle);
        this.storageService.set('newsletterToggle', this.newsletterToggle);
    }
}
