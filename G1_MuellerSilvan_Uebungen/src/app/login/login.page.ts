import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { User } from '../_types/user.types';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    user: User = { email: 'ionic@tomenz.ch', password: '', displayname: '' };
    loginForm: FormGroup = undefined as any;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
        });
    }
    loginFormSubmit() {
        if (this.loginForm.valid) {
            this.user.email = this.loginForm.get('email')?.value;
            this.user.password = this.loginForm.get('password')?.value;
            this.authService.loginWithEmailAndPassword(this.user, '/home');
        }
    }
}
