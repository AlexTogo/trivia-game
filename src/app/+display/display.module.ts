import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayRoutingModule } from './display.routing';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
    declarations: [QuestionsComponent],
    imports: [CommonModule, DisplayRoutingModule]
})
export class DisplayModule {}
