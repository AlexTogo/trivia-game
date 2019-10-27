import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [AppComponent, QuestionsComponent],
    imports: [BrowserModule, AppRoutingModule, FlexLayoutModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
