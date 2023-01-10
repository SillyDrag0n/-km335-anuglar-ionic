import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StringPageRoutingModule } from './string-routing.module';

import { StringPage } from './string.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StringPageRoutingModule
  ],
  declarations: [StringPage]
})
export class StringPageModule {}
