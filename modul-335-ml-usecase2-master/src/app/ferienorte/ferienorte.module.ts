import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { FerienOrtePageRoutingModule } from './ferienorte-routing.module';
import { FerienortePage } from './ferienorte.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FerienOrtePageRoutingModule,
    ],
    declarations: [FerienortePage],
})
export class FerienortePageModule {}
