import { Component, OnInit } from '@angular/core';
import { SocketModel, SocketIOService } from '../../shared';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public document: SocketModel;

    constructor(
        // private readonly documentService: SocketIOService
    ) {}

    public ngOnInit(): void {}

    // public editDoc(docIn: string): void {
        // this.documentService.editDocument({ id: '1', doc: docIn });
    // }
}
