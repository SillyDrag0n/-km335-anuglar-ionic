import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { GalleriePage } from './gallerie.page';
import { GalleriePageRoutingModule } from './gallerie-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GalleriePageRoutingModule,
    ],
    declarations: [GalleriePage],
})
export class GalleriePageModule {}
