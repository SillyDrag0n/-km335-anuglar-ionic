import { Component, OnInit } from '@angular/core';
import { User } from '../_types/user.types';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-registrierung',
    templateUrl: './registrierung.page.html',
    styleUrls: ['./registrierung.page.scss'],
})
export class RegistrierungPage {
    public registerForm: FormGroup;
    user = {} as User;

    constructor(
        private router: Router,
        private auth: AuthService,
        private menuCtrl: MenuController
    ) {
        this.registerForm = new FormGroup({
            displayname: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }

    async register() {
        if (this.registerForm.valid) {
            this.auth.createUserWithEmailAndPassword(
                {
                    displayname: this.registerForm.get('displayname').value,
                    email: this.registerForm.get('email').value,
                    password: this.registerForm.get('password').value,
                },
                '/login'
            );
            this.registerForm.reset();
        }
    }

    goBackToLogin() {
        this.router.navigateByUrl('/login');
    }
}
