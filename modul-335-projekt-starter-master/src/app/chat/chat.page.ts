import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChatMessage } from '../_types/chatmessage.types';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
    chatMessagesCollection: AngularFirestoreCollection<ChatMessage>;
    chatMessages$: Observable<ChatMessage[]>;
    currentAuthor: string = 'Roomies Ralph';
    constructor(
        private afs: AngularFirestore,
        private alertCtrl: AlertController) {
        this.chatMessagesCollection = afs.collection<ChatMessage>(
        'chats',
        (ref) =>
            ref
                .where('groupNumber', '==', environment.m335GroupNumber)
                .orderBy('dateCreated', 'asc')
        );
        
        this.chatMessages$ = this.chatMessagesCollection.valueChanges({
        idField: 'id',
        });}

    ngOnInit() {}

    isMyMessage(chatMessageAuthor: string): boolean {
      return chatMessageAuthor === this.currentAuthor;
    }
}
