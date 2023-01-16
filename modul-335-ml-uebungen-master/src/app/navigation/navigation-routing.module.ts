import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationPage } from './navigation.page';

const routes: Routes = [
    {
        path: '',
        component: NavigationPage,
    },
    {
        path: 'detail',
        loadChildren: () =>
            import(
                '../navigation-detail/navigation-detail-routing.module'
            ).then((m) => m.NavigationDetailPageRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NavigationPageRoutingModule {}
