import { Component } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { RemoteValuesService } from '../../services/remoteValues.service';

@Component({
    selector: 'hierarchical-grid-column-autosizing',
    styleUrls: ['./hgrid-column-autosizing.component.scss'],
    templateUrl: './hgrid-column-autosizing.component.html',
    providers: [RemoteValuesService]
})

export class HGridColumnAutoSizingSampleComponent {
    public years = 10;
    public localdata: any[];
    public col: IgxColumnComponent;
    public pWidth: string;
    public nWidth: string;
    public singers: any[];

    constructor(private remoteValuesService: RemoteValuesService) {
        this.singers = this.remoteValuesService.getSingersData();;
        for (const singer of this.singers) {
            this.getSales(singer);
        }
        this.localdata = this.singers;
    }

    public onResize(event) {
        this.col = event.column;
        this.pWidth = event.prevWidth;
        this.nWidth = event.newWidth;
    }

    public getSales(singer: any): any {
        singer['Sales'] = this.getSalesData(10);
    }

    public getSalesData(years?: number): any[] {
        if (years === undefined) {
            years = 20;
        }
        const sales: any[] = [];
        for (let y = 0; y < years; y++) {
            const value = this.getRandomNumber(0, 1000);
            // eslint-disable-next-line @typescript-eslint/naming-convention
            sales.push({Copies: value, Year: y});
        }
        return sales;
    }

    public  getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    public formatter = (a) => a;
}
