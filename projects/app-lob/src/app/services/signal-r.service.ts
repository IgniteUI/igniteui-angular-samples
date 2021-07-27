import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone, OnDestroy } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { FinancialData } from '../data/financialData';

@Injectable({
    providedIn: 'root'
})
export class SignalRService implements OnDestroy {
    public data: BehaviorSubject<any[]>;
    public hasRemoteConnection: boolean;
    private hubConnection: signalR.HubConnection;
    private _timer;

    constructor(private zone: NgZone, private http: HttpClient) {
        this.data = new BehaviorSubject([]);
    }

    public ngOnDestroy() {
        this.stopLiveData();
    }

    public startConnection = (interval = 500, volume = 1000, live = false, updateAll = true) => {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Trace)
            .withUrl('https://staging.infragistics.com/angular-apis/webapi/streamHub')
            .build();
        this.hubConnection
            .start()
            .then(() => {
                this.hasRemoteConnection = true;
                this.registerSignalEvents();
                this.broadcastParams(interval, volume, live, updateAll);
            })
            .catch(() => {
                this.hasRemoteConnection = false;
                if (this._timer) { this.stopFeed(); }
                const data = FinancialData.generateData(volume);
                live ? this._timer = setInterval(() => updateAll ?
                    this.updateAllPriceValues(data) : this.updateRandomPriceValues(data), interval) :
                        this.getData(volume);
            });
    };

    public broadcastParams = (frequency, volume, live, updateAll = true) => {
        this.hubConnection.invoke('updateparameters', frequency, volume, live, updateAll)
            .then(() => console.log('requestLiveData', volume))
            .catch(err => {
                console.error(err);
            });
    };

    public stopLiveData = () => {
        if (this.hasRemoteConnection) {
            this.hubConnection.invoke('StopTimer')
            .catch(err => console.error(err));
        } else {
            this.stopFeed();
        }
    };


    public getData(count: number = 10) {
        this.data.next(FinancialData.generateData(count));
    }

    public updateAllPriceValues(data) {
        this.zone.runOutsideAngular(() =>  {
            const newData = FinancialData.updateAllPrices(data);
            this.data.next(newData);
        });
    }

    public updateRandomPriceValues(data) {
        this.zone.runOutsideAngular(() =>  {
            const newData = FinancialData.updateRandomPrices(data);
            this.data.next(newData);
        });
    }

    private stopFeed() {
        if (this._timer) {
            clearInterval(this._timer);
        }
    }

    private registerSignalEvents() {
        this.hubConnection.onclose(() => {
            this.hasRemoteConnection = false;
        });
        this.hubConnection.on('transferdata', (data) => {
            this.data.next(data);
        });
    }
}
