import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FerienortePage } from './ferienorte.page';

const routes: Routes = [
    {
        path: '',
        component: FerienortePage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FerienOrtePageRoutingModule {}
