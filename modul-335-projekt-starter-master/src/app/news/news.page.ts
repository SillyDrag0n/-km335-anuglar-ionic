import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewsDetailService } from '../_services/news-detail.service';
import { NewsMessage } from '../_types/news.types';

@Component({
    selector: 'app-news',
    templateUrl: './news.page.html',
    styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

    newsMessageCollection: AngularFirestoreCollection<NewsMessage>;
    newsEntry$: Observable<NewsMessage[]>;

    constructor(
        private router: Router,
        private newsMsgService: NewsDetailService,
        private afs: AngularFirestore
    ) {
        this.newsMessageCollection = afs.collection<NewsMessage>(
          'news',
          (ref) =>
              ref
                  .orderBy('dateCreated', 'asc')
        );
        
        this.newsEntry$ = this.newsMessageCollection.valueChanges({
          idField: 'id',  
        });
      }

    ngOnInit() {}
    onClickEvent(newsEntry: NewsMessage){
        this.newsMsgService.setNewsMessageDetail(newsEntry);
        this.router.navigate(['/news-detail']);
    }
}
