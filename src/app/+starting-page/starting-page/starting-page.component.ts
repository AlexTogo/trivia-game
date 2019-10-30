import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-starting-page',
    templateUrl: './starting-page.component.html',
    styleUrls: ['./starting-page.component.scss']
})
export class StartingPageComponent implements OnInit {
    constructor(private readonly router: Router) {}

    public ngOnInit(): void {}

    public redirectTo(url: string): void {
        this.router.navigate([url]);
    }
}
