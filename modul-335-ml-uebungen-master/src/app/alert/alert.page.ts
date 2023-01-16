import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.page.html',
    styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
    nickname: string;
    btnCounter: number = 0;

    constructor(private alertCtrl: AlertController) {}

    ngOnInit() {}

    showNicknameAlert() {
        this.alertCtrl
            .create({
                header: 'Bitte gib deinen Nicknamen ein',
                inputs: [
                    {
                        name: 'nickname',
                        placeholder: 'Ralphy',
                    },
                ],
                buttons: [
                    {
                        text: 'Abbrechen',
                        role: 'cancel',
                    },
                    {
                        text: 'Speichern',
                        handler: (data) => {
                            if (data.nickname) {
                                this.nickname = data.nickname;
                                return true;
                            } else {
                                return false;
                            }
                        },
                    },
                ],
            })
            .then((alert) => alert.present());
    }

    buttonPressed() {
        this.btnCounter++;
    }
}
