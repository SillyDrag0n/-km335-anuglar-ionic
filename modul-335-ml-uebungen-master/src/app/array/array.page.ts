import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-array',
    templateUrl: './array.page.html',
    styleUrls: ['./array.page.scss'],
})
export class ArrayPage implements OnInit {
    fruechte: Frucht[] = [
        { name: 'Orange' },
        { name: 'Banane' },
        { name: 'Apfel' },
    ];

    // Erweitert mit Bild
    fruechte2: Frucht[] = [
        { name: 'Orange', imgUrl: '/assets/fruits/orange.svg' },
        { name: 'Banane', imgUrl: '/assets/fruits/banana.svg' },
        { name: 'Kokosnuss', imgUrl: '/assets/fruits/coconut.svg' },
        { name: 'Ananas', imgUrl: '/assets/fruits/pineapple.svg' },
    ];

    // Für Übung Navigation
    textFrom: string;

    constructor() {}

    ngOnInit() {}

    ionViewWillEnter() {}
}
interface Frucht {
    name: string;
    imgUrl?: string;
}

