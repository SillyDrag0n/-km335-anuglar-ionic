import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewsDetailService } from '../_services/news-detail.service';
import { NewsMessage } from '../_types/news.types';

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.page.html',
    styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
    newsdetail: NewsMessage;
    

    newsMessageCollection: AngularFirestoreCollection<NewsMessage>;
    newsEntry$: Observable<NewsMessage[]>;

    constructor(private newsMsgService: NewsDetailService, 
        private route: ActivatedRoute,
        private router: Router,
        private afs: AngularFirestore) {
        // TODO: Getter von NewsDetailService verwenden um NewsMessage-Objekt zu laden
        
        this.newsdetail = this.newsMsgService.getNewsMessageDetail();

    }

    ngOnInit() {}
}
