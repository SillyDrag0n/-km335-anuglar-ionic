import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-zahlen',
    templateUrl: './zahlen.page.html',
    styleUrls: ['./zahlen.page.scss'],
})
export class ZahlenPage implements OnInit {
    fuenfundzwanzig: number = 25;
    fuenf: number = 5;

    constructor() {}

    ngOnInit() {}
}
