import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.page.html',
    styleUrls: ['./data-binding.page.scss'],
})
export class DataBindingPage implements OnInit {
    name: string;
    vorname: string;
    alter: number;

    constructor() {}

    ngOnInit() {}
}
