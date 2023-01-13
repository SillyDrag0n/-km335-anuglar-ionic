import { Component, OnInit } from '@angular/core';
import { AlertController, AlertInput } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  nickname: string = '';
  showNickname: boolean = false;
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  
  async onClick(){
    this.showNickname = false;
    const alert = await this.alertController.create({
      header: 'Please enter your nickname',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: (alertData) => {
            if(alertData.nickname)
            {
              this.saveNickname(alertData.nickname);
              return true;
            }
            else
            {
              return false;
            }
            
          },
        },
      ],
      inputs: [
        {
          name: 'nickname',
          placeholder: 'Nickname',
          attributes: {
            minlength: 1,
          },
        },
      ],
    });

    await alert.present();
  }

  saveNickname(alertData: string)
  {
    this.nickname = alertData;
    this.showNickname = true;
    console.log(this.nickname, this.showNickname);
  }
}
