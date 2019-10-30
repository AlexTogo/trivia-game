import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayRoutingModule } from './display.routing';
import { QuestionsComponent } from './questions/questions.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [QuestionsComponent, DashboardComponent],
    imports: [CommonModule, DisplayRoutingModule, FlexLayoutModule, MatButtonModule],
    exports: [DashboardComponent]
})
export class DisplayModule {}
