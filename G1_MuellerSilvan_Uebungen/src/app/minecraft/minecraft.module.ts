import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinecraftPageRoutingModule } from './minecraft-routing.module';

import { MinecraftPage } from './minecraft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinecraftPageRoutingModule
  ],
  declarations: [MinecraftPage]
})
export class MinecraftPageModule {}
