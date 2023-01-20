import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Ferienort } from '../_types/ferienort.types';
import { environment } from 'src/environments/environment';
import { Timestamp } from 'firebase/firestore';

@Component({
    selector: 'app-ferienorte',
    templateUrl: './ferienorte.page.html',
    styleUrls: ['./ferienorte.page.scss'],
})
export class FerienortePage implements OnInit {
    ferienorteCollection: AngularFirestoreCollection<Ferienort>;
    ferienorte$: Observable<Ferienort[]>;

    constructor(public alertCtrl: AlertController, private afs: AngularFirestore,
        ) {
        this.ferienorteCollection = afs
        .collection<Ferienort>('ferienorte',
        (ref) =>
            ref
                .where('groupNumber', '==', environment.m335GroupNumber).orderBy('dateAdded', 'asc')
    );
        this.ferienorte$ = this.ferienorteCollection.valueChanges({
            idField: 'id',
        });
    }

    ngOnInit() {}

    addFerienort() {
        this.alertCtrl
            .create({
                header: 'FERIENORT HINZUFÜGEN',
                inputs: [
                    {
                        name: 'name',
                        placeholder: 'NAME FERIENORT',
                    },
                ],
                buttons: [
                    {
                        text: 'ABBRECHEN',
                        role: 'cancel',
                        handler: (data) => {
                            console.log('Cancel clicked');
                        },
                    },
                    {
                        text: 'HINZUFÜGEN',
                        handler: (data) => {
                            if (data.name != '') {
                                this.ferienorteCollection.add({
                                    groupNumber: environment.m335GroupNumber,
                                    name: data.name,
                                    dateAdded: Timestamp.now(),
                                });

                            } else {
                                return false;
                            }
                        },
                    },
                ],
            })
            .then((alert) => alert.present());
    }
}
