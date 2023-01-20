import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { StorageService } from '../_services/storage.service';

@Component({
    selector: 'app-willkommen',
    templateUrl: './willkommen.page.html',
    styleUrls: ['./willkommen.page.scss'],
})
export class WillkommenPage implements OnInit {
    groupNumber: number = environment.m335GroupNumber;
    constructor(private router: Router, private storageService: StorageService) {}

    ngOnInit() {}

    goToLogin(){
        this.storageService.set('WelcomeDone', true);
        this.router.navigate(['/login']);
        console.log('Moved from welcome to login. Set WelcomeDone to true.');
    }
}
