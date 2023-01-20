import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';
import { Gallerie } from '../_types/gallerie.types';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-gallerie',
    templateUrl: './gallerie.page.html',
    styleUrls: ['./gallerie.page.scss'],
})
export class GalleriePage implements OnInit {
    gallerieCollection: AngularFirestoreCollection<Gallerie>;
    gallerie$: Observable<Gallerie[]>;

    constructor(public alertCtrl: AlertController,
        private afs: AngularFirestore,
        ) {
        this.gallerieCollection = afs
        .collection<Gallerie>('gallerie',
        (ref) =>
            ref
                .where('groupNumber', '==', environment.m335GroupNumber).orderBy('dateAdded', 'asc')
    );

    this.gallerie$ = this.gallerieCollection.valueChanges({
        idField: 'id',
    });
    }

    ngOnInit() {}
}
