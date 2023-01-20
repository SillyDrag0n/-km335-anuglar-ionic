import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NewsDetailPage } from './news-detail.page';
import { NewsDetailPageRoutingModule } from './news-detail-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewsDetailPageRoutingModule,
    ],
    declarations: [NewsDetailPage],
})
export class NewsDetailPageModule {}
