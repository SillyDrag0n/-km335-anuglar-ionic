import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController, ToastController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuthGuardModule } from '@angular/fire/compat/auth-guard';
import { User } from '../_types/user.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private toast: ToastController,
    private menuCtrl: MenuController
) { }

  async loginWithEmailAndPassword (user: User, redirectToURL?: string) {
    // TODO: Login für Benutzer ausprogrammieren
   this.afAuth.signInWithEmailAndPassword(user.email, user.password);
  }

  async createUserWithEmailAndPassword (user: User, redirectToURL?: string) {
   // TODO: Registrierung für den Benutzer ausprogrammieren
        try {
          const result = await this.afAuth.createUserWithEmailAndPassword(
              user.email,
              user.password
          );

          if (result) {
              await (
                  await this.afAuth.currentUser
              )?.updateProfile({
                  displayName: user.displayname,
                  photoURL: '',
              });

              this.toast
                  .create({
                      message: `Benutzer ${result.user?.email} erfolgreich registriert!`,
                      duration: 3000,
                  })
                  .then((toast) => toast.present());
          }
          if (redirectToURL) {
              this.router.navigateByUrl(redirectToURL);
          }
      } catch (e) {
          console.log(e);
          this.toast
              .create({
                  message: `Registrierung fehlgeschlagen!`,
                  duration: 3000,
              })
              .then((toast) => toast.present());
      }
  }
  
  async logout() {
    // TODO: User ausloggen
  
  }
}