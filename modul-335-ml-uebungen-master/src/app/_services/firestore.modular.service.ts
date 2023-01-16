import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Timestamp } from 'firebase/firestore';
import {
    addDoc,
    collection,
    collectionData,
    deleteDoc,
    doc,
    docData,
    Firestore,
    updateDoc,
} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root',
})

// Example of a modular firestore service
export class FirestoreModularService {
    constructor(private firestore: Firestore) {}

    getChatMessages(groupNumber: string): Observable<ChatMessage[]> {
        const chatMessageRef = collection(this.firestore, 'chats', groupNumber);
        return collectionData(chatMessageRef, { idField: 'id' }) as Observable<
            ChatMessage[]
        >;
    }

    addChatMessage(chatMessage: ChatMessage) {
        const ChatMessagesRef = collection(this.firestore, 'chats');
        return addDoc(ChatMessagesRef, chatMessage);
    }

    deleteChatMessage(chatMessage: ChatMessage) {
        const ChatMessageDocRef = doc(
            this.firestore,
            `chats/${chatMessage.id}`
        );
        return deleteDoc(ChatMessageDocRef);
    }

    updateChatMessage(chatMessage: ChatMessage) {
        const ChatMessageDocRef = doc(
            this.firestore,
            `chats/${chatMessage.id}`
        );
        return updateDoc(ChatMessageDocRef, {
            title: chatMessage.author,
            text: chatMessage.text,
            dateCreated: chatMessage.dateCreated,
        });
    }
}

export interface ChatMessage {
    id?: string;
    author: string;
    text: string;
    dateCreated: Timestamp;
}
