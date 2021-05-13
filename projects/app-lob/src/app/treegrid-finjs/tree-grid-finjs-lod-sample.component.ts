import { AfterViewInit, Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {
    AbsoluteScrollStrategy, ConnectedPositioningStrategy, HorizontalAlignment,
    IgxButtonGroupComponent, IgxOverlayOutletDirective, IgxSliderComponent, IgxTreeGridComponent, OverlaySettings,
    PositionSettings, SortingDirection, VerticalAlignment
} from 'igniteui-angular';
import { Contract, REGIONS } from '../services/financialData';
import { ITreeGridAggregation } from './tree-grid-grouping.pipe';
import { SignalRService } from '../services/signal-r.service';

@Component({
    providers: [SignalRService],
    selector: 'app-tree-grid-finjs-lod-sample',
    styleUrls: ['./tree-grid-finjs-lod-sample.component.scss'],
    templateUrl: './tree-grid-finjs-lod-sample.component.html'
})

export class TreeGridFinJSLoadOnDemandComponent implements AfterViewInit, OnInit {
    @ViewChild('grid1', { static: true }) public grid1: IgxTreeGridComponent;
    @ViewChild(IgxOverlayOutletDirective, { static: true }) public outlet: IgxOverlayOutletDirective;

    public showToolbar = true;
    public selectionMode = 'multiple';
    public theme = false;
    public volume = 1000;
    public frequency = 500;
    public data$: any;
    public overlaySettings: OverlaySettings = {
        modal: false
    };
    public groupColumns = ['category', 'type', 'contract'];
    public aggregations: ITreeGridAggregation[] = [
        {
            aggregate: (parent: any, data: any[]) => data.map((r) => r.change).reduce((ty, u) => ty + u, 0),
            field: 'change'
        },
        {
            aggregate: (parent: any, data: any[]) => data.map((r) => r.price).reduce((ty, u) => ty + u, 0),
            field: 'price'
        },
        {
            aggregate: (parent: any, data: any[]) => parent.change / (parent.price - parent.change) * 100,
            field: 'changeP'
        }
    ];
    public primaryKey = 'id';
    public childDataKey = 'children';
    public groupColumnKey = 'categories';

    public items: any[] = [{ field: 'Export native' }, { field: 'Export JS Excel' }];

    public _positionSettings: PositionSettings = {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    public _overlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
        scrollStrategy: new AbsoluteScrollStrategy()
    };

    public contracts = Contract;
    public regions = REGIONS;
    public isLoading = true;

    constructor(private elRef: ElementRef, public dataService: SignalRService) {
        this.dataService.startConnection();
        this.overlaySettings.outlet = this.outlet;
        this.data$ = this.dataService.data;
        this.dataService.getData(0);

        this.data$.subscribe((data) => {
            if (data.length !== 0) {
                this.isLoading = false;
            };
        });
    }

    public ngOnInit() {
        this.overlaySettings.outlet = this.outlet;
        this.grid1.sortingExpressions = [{ fieldName: this.groupColumnKey, dir: SortingDirection.Desc }];
    }

    public ngAfterViewInit() {
        this.groupColumns.forEach(col => {
            const column = this.grid1.getColumnByName(col);
            if (column) {
                column.hidden = !column.hidden;
            }
        });
        this.grid1.reflow();
    }

    public formatNumber(value: number) {
        return value ? value.toFixed(2) : '';
    }

    public percentage(value: number) {
        return value ? value.toFixed(2) + '%' : '';
    }

    public formatCurrency(value: number) {
        return value ? '$' + value.toFixed(3) : '';
    }

    private negative = (rowData: any): boolean => rowData['changeP'] < 0;
    private positive = (rowData: any): boolean => rowData['changeP'] > 0;
    private changeNegative = (rowData: any): boolean => rowData['changeP'] < 0 && rowData['changeP'] > -1;
    private changePositive = (rowData: any): boolean => rowData['changeP'] > 0 && rowData['changeP'] < 1;
    private strongPositive = (rowData: any): boolean => rowData['changeP'] >= 1;
    private strongNegative = (rowData: any, key: string): boolean => rowData['changeP'] <= -1;

    /* eslint-disable @typescript-eslint/member-ordering */
    public trends = {
        changeNeg: this.changeNegative,
        changePos: this.changePositive,
        negative: this.negative,
        positive: this.positive,
        strongNegative: this.strongNegative,
        strongPositive: this.strongPositive
    };

    public trendsChange = {
        changeNeg2: this.changeNegative,
        changePos2: this.changePositive,
        strongNegative2: this.strongNegative,
        strongPositive2: this.strongPositive
    };
    /* eslint-enable @typescript-eslint/member-ordering */
}
