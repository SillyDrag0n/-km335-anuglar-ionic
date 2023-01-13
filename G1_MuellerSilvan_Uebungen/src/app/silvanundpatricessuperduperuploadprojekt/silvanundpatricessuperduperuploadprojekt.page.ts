import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { empty } from 'rxjs';

@Component({
  selector: 'app-silvanundpatricessuperduperuploadprojekt',
  templateUrl: './silvanundpatricessuperduperuploadprojekt.page.html',
  styleUrls: ['./silvanundpatricessuperduperuploadprojekt.page.scss'],
})
export class SilvanundpatricessuperduperuploadprojektPage implements OnInit {
  
  @ViewChild(IonModal) modal!: IonModal;

  filename: string = '';
  file = '';

  
  fruits: Fruits[] = [
    {name:'Miguel', image:''}
  ];

  constructor() { }

  ngOnInit() {
  }

  modalConfirm(){
    this.modal.dismiss(this.filename, 'confirm');    
  }

  modalCancel(){

  }

  modalOnWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.filename = String(ev.detail.data);
      console.table(this.filename);
      console.log(this.file);

      this.fruits.push({name: this.filename, image: this.file})
    }
  }
}

interface Fruits{
  name: string,
  image?: string
}