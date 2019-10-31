import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './+dashboard/dashboard.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, FlexLayoutModule, BrowserAnimationsModule, DashboardModule, SocketIoModule.forRoot(config)],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
