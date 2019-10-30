import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';
import { StartingPageRoutingModule } from './starting-page.routing';
import { StartingPageComponent } from './starting-page/starting-page.component';

@NgModule({
    declarations: [StartingPageComponent],
    imports: [CommonModule, StartingPageRoutingModule, FlexLayoutModule, MatButtonModule]
})
export class StartingPageModule {}
