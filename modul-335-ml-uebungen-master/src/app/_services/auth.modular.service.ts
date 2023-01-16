import { Injectable, OnDestroy } from '@angular/core';
import {
    Auth,
    authState,
    signInWithEmailAndPassword,
    signOut,
    User,
} from '@angular/fire/auth';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public readonly user: Observable<User | null> = EMPTY;

    constructor(private auth: Auth) {
        if (auth) {
            this.user = authState(this.auth);
        }
    }

    async loginWithEmailAndPassword(user: User) {
        // TODO: Login für Benutzer ausprogrammieren
    }

    async createUserWithEmailAndPassword(user: User) {
        // TODO: Registrierung für den Benutzer ausprogrammieren
    }

    async logout() {
        return await signOut(this.auth);
    }
}
