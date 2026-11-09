import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { ColumnPinningPosition } from 'igniteui-angular/core';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IPinningConfig, IgxCellTemplateDirective, IgxColumnComponent, RowPinningPosition, RowType } from 'igniteui-angular/grids/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { icons } from '../../services/svgIcons';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


const FILTERING_ICONS_FONT_SET = 'filtering-icons';

@Component({
    selector: 'app-tree-grid-row-pinning-extra-column',
    styleUrls: ['tree-grid-row-pinning-extra-column.component.scss'],
    templateUrl: 'tree-grid-row-pinning-extra-column.component.html',
    imports: [IgxSwitchComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxIconComponent]
})
export class TreeGridRowPinningExtraColumnSampleComponent implements OnInit, AfterViewInit {
    private iconService = inject(IgxIconService);


    @ViewChild('treeGrid', { static: true }) public treeGrid1: IgxTreeGridComponent;
    public data: IEmployee[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top, columns: ColumnPinningPosition.End };

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();

        this.columns = [
            { field: 'Name', label: 'Full Name', dataType: 'string' },
            { field: 'Age', label: 'Age', dataType: 'number' },
            { field: 'Title', label: 'Title', dataType: 'string' },
            { field: 'HireDate', label: 'Hire Date', dataType: 'date' }
        ];
    }

    public ngAfterViewInit() {
        const pinnedIcons = icons.filter(icon => icon.name === 'pin' || icon.name === 'unpin');
        pinnedIcons.forEach(icon => {
            if (!this.iconService.isSvgIconCached(icon.name, FILTERING_ICONS_FONT_SET)) {
                this.iconService.addSvgIconFromText(icon.name, icon.value, FILTERING_ICONS_FONT_SET);
            }
        });
    }

    public togglePinning(row: RowType, event) {
        event.preventDefault();
        if (row.pinned) {
            row.unpin();
        } else {
            row.pin();
        }
    }

    public changePinningPosition() {
        if (this.pinningConfig.rows === RowPinningPosition.Bottom) {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Top };
        } else {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Bottom };
        }
    }
}
