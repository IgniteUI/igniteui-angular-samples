import { Component, AfterViewInit, inject } from '@angular/core';
import { ColumnPinningPosition } from 'igniteui-angular/core';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IPinningConfig, IgxCellTemplateDirective, IgxColumnComponent, RowPinningPosition, RowType } from 'igniteui-angular/grids/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { icons } from '../../services/svgIcons';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

const FILTERING_ICONS_FONT_SET = 'filtering-icons';

@Component({
    selector: 'app-hierarchical-grid-row-pinning-extra-column',
    styleUrls: ['./hierarchical-grid-row-pinning-extra-column.component.scss'],
    templateUrl: 'hierarchical-grid-row-pinning-extra-column.component.html',
    imports: [IgxSwitchComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxIconComponent, IgxRowIslandComponent]
})

export class HGridRowPinningExtraColumnSampleComponent implements AfterViewInit{
    private iconService = inject(IgxIconService);

    public localData;
    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top, columns: ColumnPinningPosition.End };

    constructor() {
        this.localData = SINGERS;
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

    public formatter = (a) => a;
}
