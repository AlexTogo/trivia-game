import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material';
import { DisplayModule } from './+display/display.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, FlexLayoutModule, BrowserAnimationsModule, MatButtonModule, DisplayModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
