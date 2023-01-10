import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationDetailPage } from './navigation-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NavigationDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationDetailPageRoutingModule {}
