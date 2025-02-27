import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, TreeGridFilteringStrategy, IgxButtonGroupComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-excel-style-filtering-sample-1',
    styleUrls: ['./tree-grid-excel-style-filtering-sample-1.component.scss'],
    templateUrl: 'tree-grid-excel-style-filtering-sample-1.component.html',
    imports: [IgxButtonGroupComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnComponent, IgxCellTemplateDirective]
})

export class TreeGridExcelStyleFilteringSample1Component implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;

    public data: any[];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    public filterStrategy = new TreeGridFilteringStrategy(['ID', 'Name']);

    public size = 'large';
    public sizes: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = ORDERS_DATA;
        this.sizes = [
            {
                label: 'small',
                selected: this.size === 'small',
                togglable: true
            },
            {
                label: 'medium',
                selected: this.size === 'medium',
                togglable: true
            },
            {
                label: 'large',
                selected: this.size === 'large',
                togglable: true
            }
        ];
    }

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }

    public selectSize(event: any) {
        this.size = this.sizes[event.index].label;
        this.treegrid1.reflow();
    }

    public formatDate(val) {
        if (val !== 'Select All') {
            return new Intl.DateTimeFormat('en-US').format(val);
        } else {
            return val;
        }
    }
}
