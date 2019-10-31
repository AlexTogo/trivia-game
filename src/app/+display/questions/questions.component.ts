import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import data from '../../data/data.json';
import { SocketIOService, SocketModel } from '../../shared/';
import { QuestionsModel } from '../models/questions.model';


@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
    public document: SocketModel;

    public errorBG: boolean = false;
    public data: QuestionsModel[];

    public documents: Observable<string[]>;
    private _docSub: Subscription;
    private currentDoc: string;

    constructor(private readonly documentService: SocketIOService) {}

    public ngOnInit(): void {
        this.data = data;
        this._docSub = this.documentService.currentDocument
            .pipe(startWith({ id: '', doc: 'Select an existing document or create a new one to get started' }))
            .subscribe((document) => (this.document = document));

        // List
        // this.documents = this.documentService.documents;
        // this._docSub = this.documentService.currentDocument.subscribe((doc) => (this.currentDoc = doc.id));
        // this.documentService.getDocument('5');
    }

    public editDoc(docIn: string): void {
        this.documentService.editDocument({'id': '5', 'doc': docIn});
    }




    // LIST
    // public loadDoc(id: string) {
    //     this.documentService.getDocument(id);
    // }

    // public newDoc() {
    //     this.documentService.newDocument();
    // }
}
