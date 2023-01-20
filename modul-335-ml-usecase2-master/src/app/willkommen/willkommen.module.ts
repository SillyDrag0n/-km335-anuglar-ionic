import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { WillkommenPage } from './willkommen.page';
import { WillkommenPageRoutingModule } from './willkommen-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WillkommenPageRoutingModule,
    ],
    declarations: [WillkommenPage],
})
export class WillkommenPageModule {}
