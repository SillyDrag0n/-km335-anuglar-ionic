import { Timestamp } from 'firebase/firestore';

export interface ChatMessage {
    id?: string;
    groupNumber: number;
    author: string;
    text: string;
    dateCreated: Timestamp;
    avatarImageUrl?: string;
}
