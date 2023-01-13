import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinecraftPage } from './minecraft.page';

const routes: Routes = [
  {
    path: '',
    component: MinecraftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinecraftPageRoutingModule {}
