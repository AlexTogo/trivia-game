import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [AppComponent, QuestionsComponent],
    imports: [BrowserModule, AppRoutingModule, FlexLayoutModule, BrowserAnimationsModule, MatButtonModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
