import { Component, OnInit } from '@angular/core';
import data from '../data/data.json';
import { QuestionsModel } from './model/questions.model.js';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
    public data: QuestionsModel[];

    constructor() {}

    public ngOnInit(): void {
        this.data = data;
    }
}
