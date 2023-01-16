import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./home/home.module').then((m) => m.HomePageModule),
    },
    {
        path: 'navigation',
        loadChildren: () =>
            import('./navigation/navigation.module').then(
                (m) => m.NavigationPageModule
            ),
    },
    {
        path: 'navigation-detail',
        loadChildren: () =>
            import('./navigation-detail/navigation-detail.module').then(
                (m) => m.NavigationDetailPageModule
            ),
    },
    {
        path: 'zahlen',
        loadChildren: () =>
            import('./zahlen/zahlen.module').then((m) => m.ZahlenPageModule),
    },
    {
        path: 'string',
        loadChildren: () =>
            import('./string/string.module').then((m) => m.StringPageModule),
    },
    {
        path: 'objekte',
        loadChildren: () =>
            import('./objekte/objekte.module').then((m) => m.ObjektePageModule),
    },
    {
        path: 'array',
        loadChildren: () =>
            import('./array/array.module').then((m) => m.ArrayPageModule),
    },
    {
        path: 'data-binding',
        loadChildren: () =>
            import('./data-binding/data-binding.module').then(
                (m) => m.DataBindingPageModule
            ),
    },
    {
        path: 'rechner',
        loadChildren: () =>
            import('./rechner/rechner.module').then((m) => m.RechnerPageModule),
    },
    {
        path: 'filter',
        loadChildren: () =>
            import('./filter/filter.module').then((m) => m.FilterPageModule),
    },
    {
        path: 'alert',
        loadChildren: () =>
            import('./alert/alert.module').then((m) => m.AlertPageModule),
    },
    {
        path: 'storage',
        loadChildren: () =>
            import('./storage/storage.module').then((m) => m.StoragePageModule),
    },
    {
        path: 'chat',
        loadChildren: () =>
            import('./chat/chat.module').then((m) => m.ChatPageModule),
    },
    {
        path: 'newsletter',
        loadChildren: () =>
            import('./newsletter/newsletter.module').then(
                (m) => m.NewsletterPageModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
