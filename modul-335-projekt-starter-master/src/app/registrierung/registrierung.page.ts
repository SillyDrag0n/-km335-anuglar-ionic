import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { User } from '../_types/user.types';

@Component({
    selector: 'app-registrierung',
    templateUrl: './registrierung.page.html',
    styleUrls: ['./registrierung.page.scss'],
})
export class RegistrierungPage implements OnInit {
    registerButtonDisabled: boolean = true;
    user = {} as User;
    registerForm: FormGroup = undefined as any;
    
    constructor(private toast: ToastController) {}

    ngOnInit() {
        this.registerForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
            controlPassword: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required),
        });
    }

    loginFormSubmit() {
        if (this.user.controlPassword === this.user.password)
        {

            this.toast
            .create({
                color: 'success',
                message: `Registrierung erfolgreich`,
                duration: 2000,
            })
            .then((toast) => toast.present());
        }
        else{
          this.toast
              .create({
                color: 'warning',
                  message: `Stellen sie sicher dass sie alles korrekt eingegeben haben und versuchen es erneut.`,
                  duration: 5000,
              })
              .then((toast) => toast.present());
        }
    }
}
