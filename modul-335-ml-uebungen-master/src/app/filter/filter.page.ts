import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.page.html',
    styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
    input: string;
    datum: any;
    fruechte: any = [
        { name: 'Orange' },
        { name: 'Banane' },
        { name: 'Apfel' },
        { name: 'Kiwi' },
        { name: 'Melone' },
        { name: 'Ananas' },
    ];

    constructor() {}

    ngOnInit() {}
}
