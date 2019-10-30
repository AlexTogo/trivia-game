import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./+display/display.module').then((mod) => mod.DisplayModule)
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
