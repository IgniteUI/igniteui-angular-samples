import { Component, TemplateRef, ViewChild, inject } from '@angular/core';

import { IGridStateOptions, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxGridStateDirective } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { NoopSortingStrategy } from 'igniteui-angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { FinancialDataService } from '../../services/financial.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { AsyncPipe } from '@angular/common';

@Component({
    providers: [FinancialDataService],
    selector: 'app-grid-state-persistance-sample',
    styleUrls: ['./grid-state-persistance-sample.component.scss'],
    templateUrl: 'grid-state-persistance-sample.component.html',
    imports: [IgxButtonDirective, IgxIconComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridStateDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxCellHeaderTemplateDirective, IgxBadgeComponent, AsyncPipe]
})

export class GridStatePersistenceSampleComponent {
    private localService = inject(FinancialDataService);

    @ViewChild('grid', { static: true })
    public grid: IgxGridComponent;
    @ViewChild(IgxGridStateDirective, { static: true })
    public state!: IgxGridStateDirective;

    @ViewChild('price', { static: true }) public priceTemplate: TemplateRef<any>;
    @ViewChild('change', { static: true }) public changeTemplate: TemplateRef<any>;
    @ViewChild('buy', { static: true }) public buyTemplate: TemplateRef<any>;
    @ViewChild('sell', { static: true }) public sellTemplate: TemplateRef<any>;
    @ViewChild('spread', { static: true }) public spreadTemplate: TemplateRef<any>;
    @ViewChild('volume', { static: true }) public volumeTemplate: TemplateRef<any>;
    @ViewChild('highD', { static: true }) public highDTemplate: TemplateRef<any>;
    @ViewChild('lowD', { static: true }) public lowDTemplate: TemplateRef<any>;
    @ViewChild('highY', { static: true }) public highYTemplate: TemplateRef<any>;
    @ViewChild('lowY', { static: true }) public lowYTemplate: TemplateRef<any>;
    @ViewChild('startY', { static: true }) public startYTemplate: TemplateRef<any>;
    @ViewChild('changeOnYear', { static: true }) public changeOnYearTemplate: TemplateRef<any>;
    @ViewChild('changePercentage', { static: true }) public changePercentageTemplate: TemplateRef<any>;
    
    public data: Observable<any[]>;
    public customStrategy = NoopSortingStrategy.instance();
    public options: IGridStateOptions = {
        rowSelection: true,
        filtering: true,
        sorting: true,
        columnSelection: true
    };

    constructor() {
        this.localService.getData(100000);
        this.data = this.localService.records;
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

    public saveState() {
        const state = this.state.getState() as string;
        window.sessionStorage.setItem('grid-state', state);
    }

    public restoreState() {
        const state = window.sessionStorage.getItem('grid-state');
        this.state.stateParsed.pipe(take(1)).subscribe(parsedState => {
            parsedState.sorting.forEach(x => x.strategy = this.customStrategy);
        });
        this.state.setState(state);
    }

    public clearStorage() {
        window.sessionStorage.removeItem('grid-state');
    }

    public onColumnInit(column: IgxColumnComponent) {
        if (column.field === 'Price') {
            column.bodyTemplate = this.priceTemplate;
        }
        else if (column.field === 'Buy') {
            column.bodyTemplate = this.buyTemplate;
        }
        else if (column.field === 'Sell') {
            column.bodyTemplate = this.sellTemplate;
        }
        else if (column.field === 'Spread') {
            column.bodyTemplate = this.spreadTemplate;
        }
        else if (column.field === 'Volume') {
            column.bodyTemplate = this.volumeTemplate;
        }
        else if (column.field === 'High(D)') {
            column.bodyTemplate = this.highDTemplate;
        }
        else if (column.field === 'Low(D)') {
            column.bodyTemplate = this.lowDTemplate;
        }
        else if (column.field === 'High(Y)') {
            column.bodyTemplate = this.highYTemplate;
        }
        else if (column.field === 'Low(Y)') {
            column.bodyTemplate = this.lowYTemplate;
        }
        else if (column.field === 'Start(Y)') {
            column.bodyTemplate = this.startYTemplate;
        }
        else if (column.field === 'Change On Year(%)') {
            column.bodyTemplate = this.changeOnYearTemplate;
        }
        else if (column.field === 'Change(%)') {
            column.bodyTemplate = this.changeTemplate;
        }
        else if (column.field === 'Change') {
            column.bodyTemplate = this.changePercentageTemplate;
        }
    }

}
