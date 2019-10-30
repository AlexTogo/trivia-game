import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title: string = 'trivia-game';

    constructor(private readonly router: Router) {}

    public redirectToPresent (): void {
        this.router.navigate(['/display']);
    }
}
