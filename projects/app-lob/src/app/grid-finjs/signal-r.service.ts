import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { BehaviorSubject } from 'rxjs';
import { FinancialData } from '../services/financialData';

@Injectable({
    providedIn: 'root'
})
export class SignalRService {
    public data: BehaviorSubject<any[]>;
    public hasRemoteConnection: boolean;
    private hubConnection: signalR.HubConnection;
    private financialData: FinancialData = new FinancialData();

    constructor(private zone: NgZone, private http: HttpClient) {
        this.data = new BehaviorSubject([]);
    }

    public startConnection = () => {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Trace)
            .withUrl('https://staging.infragistics.com/angular-apis/webapi/streamHub')
            .build();
        this.hubConnection
            .start()
            .then(() => {
                this.hasRemoteConnection = true;
                this.registerSignalEvents();
                this.broadcastParams(500, 1000, false);
            })
            .catch(() => {
                this.hasRemoteConnection = false;
                this.getData(1000);
            });
        /* this.http.get('https://localhost:5001/webapi')
            .subscribe(() => { }); */
    }

    public broadcastParams = (ms, volume, live) => {
        this.hubConnection.invoke('updateparameters', ms, volume, live)
            .then(() => console.log('requestLivedata', volume))
            .catch(err => console.error(err));
    }

    public stopLiveData = () => {
        this.hubConnection.invoke('StopTimer')
        .catch(err => console.error(err));
    }

    private registerSignalEvents() {
        this.hubConnection.onclose(() => {
            this.hasRemoteConnection = false;
        });
        this.hubConnection.on('transferdata', (data) => {
            this.data.next(data);
        })
    }

    public getData(count: number = 10) {
        this.data.next(this.financialData.generateData(count));
    }

    public updateAllPriceValues(data) {
        this.zone.runOutsideAngular(() =>  {
            const newData = this.financialData.updateAllPrices(data);
            this.data.next(newData);
        });
    }

    public updateRandomPriceValues(data) {
        this.zone.runOutsideAngular(() =>  {
            const newData = this.financialData.updateRandomPrices(data);
            this.data.next(newData);
        });
    }
}