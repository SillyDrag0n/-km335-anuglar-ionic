import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-newsletter',
    templateUrl: './newsletter.page.html',
    styleUrls: ['./newsletter.page.scss'],
})
export class NewsletterPage implements OnInit {
    newsletterForm: FormGroup;

    constructor(private toastController: ToastController) {}

    ngOnInit() {
        this.newsletterForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
        });
    }

    async sendNewsletter() {
        const toast = await this.toastController.create({
            message:
                'Die Email ' +
                this.newsletterForm.get('email').value +
                ' erfolgreich für den Newsletter angemeldet.',
            duration: 2000,
        });
        toast.present();
        this.newsletterForm.reset();
    }
}
