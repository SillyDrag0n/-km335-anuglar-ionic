import { Component, OnInit } from '@angular/core';
import { User } from '../_types/user.types';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import {
    FormBuilder,
    FormGroup,
    Validators,
    FormControl,
} from '@angular/forms';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {
    public loginForm: FormGroup;
    user = {} as User;

    constructor(
        private auth: AuthService,
        private router: Router,
        public formBuilder: FormBuilder,
        private menuCtrl: MenuController
    ) {
        this.loginForm = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }

    async doLogin() {
        if (this.loginForm.valid) {
            await this.auth.loginWithEmailAndPassword(
                {
                    email: this.loginForm.get('email').value,
                    password: this.loginForm.get('password').value,
                },
                '/gallerie'
            );
        }
    }

    gotoRegistrierung() {
        this.router.navigateByUrl('/registrierung');
    }
}
