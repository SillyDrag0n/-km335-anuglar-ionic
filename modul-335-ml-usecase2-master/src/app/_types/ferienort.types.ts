import { Timestamp } from 'firebase/firestore';

export interface Ferienort {
    id?: string;
    groupNumber: number;
    name: string;
    dateAdded: Timestamp;
}
