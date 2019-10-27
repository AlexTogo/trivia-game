import { Component, OnInit } from '@angular/core';
import data from '../data/data.json';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
    public data: any = data;

    constructor() {}

    public ngOnInit(): void {}
}
