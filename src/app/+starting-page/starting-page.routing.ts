import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartingPageComponent } from './starting-page/starting-page.component';

const routes: Routes = [
    {
        path: '',
        component: StartingPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StartingPageRoutingModule {}
