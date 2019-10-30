import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent, QuestionsComponent],
    imports: [BrowserModule, AppRoutingModule, FlexLayoutModule, MatIconModule, BrowserAnimationsModule ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
