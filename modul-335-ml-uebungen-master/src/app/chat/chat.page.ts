import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonContent } from '@ionic/angular';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Timestamp } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { ChatMessage } from '../_types/chatmessage.types';
import { environment } from 'src/environments/environment';

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

    /* TODO: Bitte anpassen */
    currentAuthor: string = 'Instruktor'; // Bsp. Ralph
    currentAuthorAvatarImageUrl: string =
        'https://www.w3schools.com/howto/img_avatar.png'; // Bsp. https://www.w3schools.com/howto/img_avatar.png

    // Zusatzaufgabe
    godMode: boolean = false;

    constructor(
        private afs: AngularFirestore,
        private alertCtrl: AlertController
    ) {
        // Firebase Compatbility mode
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
        this.chatForm = new FormGroup({
            message: new FormControl('', [
                Validators.required,
                Validators.minLength(1),
            ]),
        });
    }

    isMyMessage(chatMessageAuthor: string): boolean {
        return this.currentAuthor === chatMessageAuthor;
    }

    sendMessage() {
        if (this.chatForm.valid) {
            if (this.chatForm.get('message').value === '/godmode') {
                this.godMode = true;
                this.chatForm.get('message').reset();
            } else if (
                this.godMode &&
                this.chatForm.get('message').value === '/exit'
            ) {
                this.godMode = false;
                this.chatForm.get('message').reset();
            } else if (
                this.godMode &&
                this.chatForm.get('message').value === '/deleteall'
            ) {
                // Delete all chat messages
                this.alertCtrl
                    .create({
                        header: 'Nachrichten löschen',
                        message:
                            'Möchtest du wirklich alle Chatnachrichten löschen?',
                        buttons: [
                            {
                                text: 'Nein, abbrechen',
                                role: 'cancel',
                            },
                            {
                                text: 'Ja, alle löschen',
                                handler: () => {
                                    this.chatMessagesCollection
                                        .get()
                                        .subscribe((querySnapshot) => {
                                            querySnapshot.forEach(
                                                (chatMessage) => {
                                                    this.chatMessagesCollection
                                                        .doc(chatMessage.id)
                                                        .delete();
                                                }
                                            );
                                        });
                                    this.chatForm.get('message').reset();
                                },
                            },
                        ],
                    })
                    .then((alert) => alert.present());
            } else if (this.chatForm.get('message').value != '') {
                this.showSpinnerIcon = true;
                this.chatMessagesCollection
                    .add({
                        groupNumber: environment.m335GroupNumber,
                        author: this.currentAuthor,
                        text: this.chatForm.get('message').value,
                        dateCreated: Timestamp.now(),
                        avatarImageUrl: this.currentAuthorAvatarImageUrl,
                    })
                    .finally(() => {
                        this.showSpinnerIcon = false;
                    });

                this.chatForm.get('message').reset();
            }
        }
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
        await this.chatMessagesCollection.doc(id).update({ text: updatedText });
    }

    async deleteMessage(id: string) {
        await this.alertCtrl
            .create({
                header: 'Löschen bestätigen',
                message: 'Möchtest du die Nachricht wirklich löschen?',
                buttons: [
                    {
                        text: 'Nein, abbrechen',
                        role: 'cancel',
                    },
                    {
                        text: 'Ja, löschen',
                        handler: () => {
                            this.chatMessagesCollection.doc(id).delete();
                        },
                    },
                ],
            })
            .then((alert) => alert.present());
    }

    /* Hilfestellungen */
    ngAfterViewChecked() {
        this.scrollContent('bottom');
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
        } else {
            return '#000000';
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
