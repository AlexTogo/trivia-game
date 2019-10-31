import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SocketModel } from '../models';


@Injectable({
    providedIn: 'root'
})
export class SocketIOService {
    public currentDocument = this.socket.fromEvent<SocketModel>('document');
    public documents = this.socket.fromEvent<string[]>('documents');
    public connectionsID: number = 5;

    constructor(private socket: Socket) {}

    public getDocument(id: string) {
        this.socket.emit('getDoc', id);
    }

    // public newDocument() {
    //     this.socket.emit('addDoc', { id: this.connectionsID, doc: '' });
    // }

    public editDocument(document: SocketModel) {
        this.socket.emit('editDoc', document);
    }

    // private docId() {
    //     let text: string = '';
    //     const possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    //     for (let i = 0; i < 5; i++) {
    //         text += possible.charAt(Math.floor(Math.random() * possible.length));
    //     }
    //     return text;
    // }
}
