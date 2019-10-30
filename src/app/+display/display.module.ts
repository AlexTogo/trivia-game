import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { DisplayRoutingModule } from './display.routing';
import { QuestionsComponent } from './questions/questions.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [QuestionsComponent],
    imports: [CommonModule, DisplayRoutingModule, FlexLayoutModule, MatButtonModule],
    exports: []
})
export class DisplayModule {}
