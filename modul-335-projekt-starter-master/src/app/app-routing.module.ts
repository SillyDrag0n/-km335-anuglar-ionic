import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    AngularFireAuthGuard,
    redirectUnauthorizedTo,
    redirectLoggedInTo,
} from '@angular/fire/compat/auth-guard';

// TODO: Standardverhalten definieren

// TODO: routes mit Guard schützen
const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'willkommen',
        loadChildren: () =>
            import('./willkommen/willkommen.module').then(
                (m) => m.WillkommenPageModule
            ),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./login/login.module').then((m) => m.LoginPageModule),
    },
    {
        path: 'registrierung',
        loadChildren: () =>
            import('./registrierung/registrierung.module').then(
                (m) => m.RegistrierungPageModule
            ),
    },
    {
        path: 'news',
        loadChildren: () =>
            import('./news/news.module').then((m) => m.NewsPageModule),
    },
    {
        path: 'news-detail',
        loadChildren: () =>
            import('./news-detail/news-detail.module').then(
                (m) => m.NewsDetailPageModule
            ),
    },
    {
        path: 'chat',
        loadChildren: () =>
            import('./chat/chat.module').then((m) => m.ChatPageModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
