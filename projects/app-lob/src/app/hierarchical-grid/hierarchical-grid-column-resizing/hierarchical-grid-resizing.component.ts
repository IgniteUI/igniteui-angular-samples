import { Component } from '@angular/core';
import { IgxColumnComponent, IgxHierarchicalGridComponent, IgxCellTemplateDirective, IgxRowIslandComponent } from 'igniteui-angular';
import { RemoteValuesService } from '../../services/remoteValues.service';
import { IgxPreventDocumentScrollDirective } from '../../../../../../src/app/directives/prevent-scroll.directive';
import { IgxSparklineCoreModule } from 'igniteui-angular-charts';

@Component({
    selector: 'app-hierarchical-grid-resizing',
    styleUrls: ['./hierarchical-grid-resizing.component.scss'],
    templateUrl: 'hierarchical-grid-resizing.component.html',
    providers: [RemoteValuesService],
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxSparklineCoreModule, IgxRowIslandComponent]
})

export class HGridColumnResizingSampleComponent {
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
