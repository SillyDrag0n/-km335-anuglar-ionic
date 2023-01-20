import { Timestamp } from 'firebase/firestore';

export class NewsMessage {
    dateCreated?: Timestamp;
    description?: string;
    imgUrl?: string;
    slug?: string;
    title?: string;
}
