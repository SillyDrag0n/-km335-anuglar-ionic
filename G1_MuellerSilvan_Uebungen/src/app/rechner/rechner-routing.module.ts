import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechnerPage } from './rechner.page';

const routes: Routes = [
  {
    path: '',
    component: RechnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechnerPageRoutingModule {}
