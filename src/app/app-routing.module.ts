import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./+starting-page/starting-page.module').then((m) => m.StartingPageModule)
    },
    {
        path: 'display',
        loadChildren: () => import('./+display/display.module').then((mod) => mod.DisplayModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./+dashboard/dashboard.module').then((mod) => mod.DashboardModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            onSameUrlNavigation: 'reload',
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            initialNavigation: true
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
