import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NewsPage } from './news.page';
import { NewsPageRoutingModule } from './news-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, NewsPageRoutingModule],
    declarations: [NewsPage],
})
export class NewsPageModule {}
