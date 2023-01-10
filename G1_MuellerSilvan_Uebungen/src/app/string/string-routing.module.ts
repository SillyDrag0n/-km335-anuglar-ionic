import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StringPage } from './string.page';

const routes: Routes = [
  {
    path: '',
    component: StringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StringPageRoutingModule {}
