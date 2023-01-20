import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { User } from '../_types/user.types';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    user = {} as User;
    
    loginButtonDisabled: boolean = true;

    constructor(private router: Router,
        private alertCtrl: AlertController,
        private authService: AuthService,
        private storageService: StorageService,
        private toast: ToastController) {}

    ngOnInit() {
        if (!this.storageService.get('WelcomeDone'))
        {
          this.router.navigate(['/willkommen']);
        }}

        async doLogin () {
          if (this.user.email != '' || this.user.password != ''){
            this.authService.loginWithEmailAndPassword(this.user, '/news');
            this.toast
                .create({
                    color: 'succes',
                    message: `Willkommen ` + this.user.displayname,
                    duration: 2000,
                })
                .then((toast) => toast.present());
          }
          else{
            this.toast
                .create({
                    message: `Bitte geben sie werte in die Felder ein!`,
                    duration: 5000,
                })
                .then((toast) => toast.present());
          }
        }
      
        gotoRegistrierung () {
          this.router.navigate(['/registrierung']);
        }
}
