import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WillkommenPage } from './willkommen.page';

const routes: Routes = [
    {
        path: '',
        component: WillkommenPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WillkommenPageRoutingModule {}
