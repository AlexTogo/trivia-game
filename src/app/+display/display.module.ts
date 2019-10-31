import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { DisplayRoutingModule } from './display.routing';
import { QuestionsComponent } from './questions/questions.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [QuestionsComponent],
    imports: [CommonModule, DisplayRoutingModule, FlexLayoutModule, MatButtonModule, FormsModule],
    exports: []
})
export class DisplayModule {}
