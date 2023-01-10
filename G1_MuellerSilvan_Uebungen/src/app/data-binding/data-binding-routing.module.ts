import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataBindingPage } from './data-binding.page';

const routes: Routes = [
  {
    path: '',
    component: DataBindingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataBindingPageRoutingModule {}
