import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalR';
import { BehaviorSubject } from 'rxjs';
import { FinancialData } from '../services/financialData';

@Injectable({
    providedIn: 'root'
})
export class SignalRService {
    public data: BehaviorSubject<any[]>;
    private hubConnection: signalR.HubConnection;

    constructor() {
        this.data = new BehaviorSubject([]);
    }
    public startConnection = () => {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Debug)
            .withUrl('https://localhost:5001/streamHub')
            .build();
        this.hubConnection
            .start()
            .then(() => {
                console.log('Connection started');
                this.registerSignalEvents();
                this.broadcastParams(500, 1000);
            })
            .catch(err => console.log('Error while starting the connection:' + err))
    }

    public broadcastParams = (ms, volume) => {
        console.log("broadcasted volume: " + volume);
        console.log("broadcasted ms    : " + ms);
        this.hubConnection.invoke('updateparameters', ms, volume)
            .catch(err => console.error(err));
    }

    private registerSignalEvents() {
        this.hubConnection.on('transferdata', (data) => {
            this.data.next(data);
        })
    }
}