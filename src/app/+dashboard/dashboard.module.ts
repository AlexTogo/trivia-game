import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SocketIOService } from '../shared';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, DashboardRoutingModule, FlexLayoutModule, FormsModule, MatButtonModule],
    providers: [SocketIOService]
})
export class DashboardModule {}
