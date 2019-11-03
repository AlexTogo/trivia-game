import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import data from '../../data/data.json';
import { QuestionsModel } from '../models/questions.model';
import { SocketIOService, SocketModel } from '../../shared';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {
    public color: string = 'error';

    // public document: SocketModel;
    public errorBG: boolean = false;
    public buttonBG: boolean = false;

    public data: QuestionsModel[];
    public currentQuestionNum: number = 0;

    // public documents: Observable<string[]>;
    // private _docSub: Subscription;
    // private currentDoc: string;

    constructor() // private readonly documentService: SocketIOService
    {}

    public ngOnInit(): void {
        this.data = data;

        // this._docSub = this.documentService.currentDocument.pipe(startWith({ id: '1', doc: '1' })).subscribe((document) => {
        // this.document = document;
        // });

        // List
        // this.documents = this.documentService.documents;
        // this._docSub = this.documentService.currentDocument.subscribe((doc) => (this.currentDoc = doc.id));
        // this.documentService.getDocument('1');
        // this.documentService.getQuestions('1');
    }

    public ngOnDestroy(): void {
        // this.connection.unsubscribe();
    }

    // public sendMessage(): void {
    //     this.documentService.sendMessage(this.message);
    //     this.message = '';
    // }

    // public editDoc(docIn: string): void {
    //     this.documentService.editDocument({ id: '1', doc: docIn });
    // }

    // LIST
    // public loadDoc(id: string) {
    //     this.documentService.getDocument(id);
    // }

    // public newDoc() {
    //     this.documentService.newDocument();
    // }

    public nexQuestions(): void {
        if ((this.currentQuestionNum === 0 || this.currentQuestionNum > 0) && (this.currentQuestionNum + 1) < this.data.length) {
            this.currentQuestionNum++;
        }
    }

    public previousQuestions(): void {
        if (this.currentQuestionNum > 0 && (this.currentQuestionNum + 1) < this.data.length) {
            this.currentQuestionNum--;
        }
    }

    public setQuestions(input: number): void {
        this.currentQuestionNum = input;
    }
}
