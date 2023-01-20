import { Timestamp } from 'firebase/firestore';

export interface Gallerie {
    id?: string;
    groupNumber: number;
    imgUrl: string;
    dateAdded: Timestamp;
}
