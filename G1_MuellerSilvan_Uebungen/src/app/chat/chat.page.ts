import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonContent } from '@ionic/angular';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Timestamp } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { ChatMessage } from '../_types/chatmessage.types';
import { environment } from 'src/environments/environment';
import { Time } from '@angular/common';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})

export class ChatPage implements OnInit {
    @ViewChild(IonContent) ionContent: IonContent;
    chatForm: FormGroup;
    showSpinnerIcon: boolean = false;
    showDates: boolean = false;
    chatMessagesCollection: AngularFirestoreCollection<ChatMessage>;
    chatMessages$: Observable<ChatMessage[]>;

    currentAuthor: string = 'Mr. Krabs'; // Bsp. Ralph
    currentAuthorAvatarImageUrl: string = 'https://steamuserimages-a.akamaihd.net/ugc/1732178858695755643/6EF7E333DFFF451A7F25295F7CCF681FF0DD56C6/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false';
    fallbackAuthorAvatarImageUrl: string = 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png';

    constructor(
        private afs: AngularFirestore,
        private alertCtrl: AlertController
    ) {
      this.chatMessagesCollection = afs.collection<ChatMessage>(
      'chats',
      (ref) =>
          ref
              .where('groupNumber', '==', environment.m335GroupNumber)
              .orderBy('dateCreated', 'asc')
      );
      
      this.chatMessages$ = this.chatMessagesCollection.valueChanges({
      idField: 'id',
      });
    }

    ngOnInit() {
        /* TODO: Formularfelder definieren */
        this.chatForm = new FormGroup({
            message: new FormControl('', [Validators.required, Validators.minLength(2)]),
        });
    }

    isMyMessage(chatMessageAuthor: string): boolean {
      return chatMessageAuthor === this.currentAuthor;
    }

    sendMessage() {
      if (this.chatForm.get('message').value != '') {
              if (this.chatForm.get('message').value != ''){
                this.showSpinnerIcon = true;
                this.chatMessagesCollection.add({
                  groupNumber: environment.m335GroupNumber,
                  author: this.currentAuthor,
                  text: this.chatForm.get('message').value,
                  dateCreated: Timestamp.now(),
                  avatarImageUrl: this.currentAuthorAvatarImageUrl
                });
              }
          }
      this.chatForm.get('message').reset();
      this.showSpinnerIcon = false;
    }

    /* Zusatzaufgabe */
    swipeEvent(swipe: any) {
        // 2  = Right to left swipe
        // 4  = Left to right swipe
        if (swipe.direction == 2 || swipe.direction == 4) {
            this.showDates = !this.showDates; // Toggle
        }
    }

    async updateMessage(id: string, updatedText: string) {
        /* TODO: ChatMessage updaten */

    }

    async deleteMessage(id: string) {
         /* TODO: ChatMessage löschen */
    }

    /* Hilfestellungen */
    ngAfterViewChecked() {
        this.scrollContent('bottom'); // Scrollt ans Ende
    }

    scrollContent(scroll: any) {
        if (scroll === 'top') {
            this.ionContent.scrollToTop(300);
        } else if (scroll === 'bottom') {
            this.ionContent.scrollToBottom(300);
        }
    }

    stringToColor(inputString: string) {
        if (inputString) {
            let hash = 0;
            for (let i = 0; i < inputString.length; i++) {
                hash = inputString.charCodeAt(i) + ((hash << 5) - hash);
            }
            let color = '#';
            for (let i = 0; i < 3; i++) {
                let value = (hash >> (i * 8)) & 0xff;
                color += ('00' + value.toString(16)).substr(-2);
            }
            return color;
        } 
        else{
          return 696969;
        }
    }

    getMessageBubbleWidth(text: string): string {
        const maxWidth = 300;
        const minWidth = 50;
        const measureElement = document.createElement('span');
        measureElement.style.visibility = 'hidden';
        measureElement.style.whiteSpace = 'pre';
        measureElement.innerText = text;
        document.body.appendChild(measureElement);
        const width = Math.max(measureElement.offsetWidth, minWidth);
        document.body.removeChild(measureElement);
        return Math.min(width, maxWidth) + 'px';
    }
  }