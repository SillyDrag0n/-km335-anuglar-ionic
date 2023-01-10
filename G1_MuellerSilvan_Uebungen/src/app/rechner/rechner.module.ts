import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechnerPageRoutingModule } from './rechner-routing.module';

import { RechnerPage } from './rechner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechnerPageRoutingModule
  ],
  declarations: [RechnerPage]
})
export class RechnerPageModule {}
