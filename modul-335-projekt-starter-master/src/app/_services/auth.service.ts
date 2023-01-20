import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../_types/user.types';
import { NavController, ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private afAuth: AngularFireAuth,
        private navCtrl: NavController,
        private toast: ToastController
    ) {}

    async loginWithEmailAndPassword(user: User, redirectToURL?: string) {
        try {
            //TODO: Login mit Firebase
        } catch (e) {
            //TODO: Toast anzeigen
        }
    }

    async createUserWithEmailAndPassword(user: User, redirectToURL?: string) {
        try {
            //TODO: Registrierung mit Firebase
        } catch (e) {
            //TODO: Toast anzeigen
        }
    }
    // Returns true if user is logged in
    get authenticated(): boolean {
        return this.afAuth.currentUser !== null;
    }

    logout() {
        //TODO: Logout
    }
}
