import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { SocketIOService } from '../shared';
import { DisplayRoutingModule } from './display.routing';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
    declarations: [QuestionsComponent],
    imports: [CommonModule, DisplayRoutingModule, FlexLayoutModule, MatButtonModule, FormsModule],
    exports: [],
    providers: [SocketIOService]
})
export class DisplayModule {}
