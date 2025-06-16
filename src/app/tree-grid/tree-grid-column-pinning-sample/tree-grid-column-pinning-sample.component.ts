import { AfterViewInit, ChangeDetectorRef, Component, ViewChild, inject } from '@angular/core';
import { ColumnType, IgxIconService, IgxTreeGridComponent, IgxCellHeaderTemplateDirective, IgxIconComponent, IgxColumnComponent } from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { icons } from "../../services/svgIcons";
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

const FILTERING_ICONS_FONT_SET = "filtering-icons";
@Component({
    selector: 'app-tree-grid-column-pinning-sample',
    styleUrls: ['./tree-grid-column-pinning-sample.component.scss'],
    templateUrl: './tree-grid-column-pinning-sample.component.html',
    imports: [IgxCellHeaderTemplateDirective, IgxIconComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridColumnPinningSampleComponent implements AfterViewInit {
    private cdr = inject(ChangeDetectorRef);
    private iconService = inject(IgxIconService);

    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }

    public ngAfterViewInit() {
        const pinnedIcons = icons.filter(icon => icon.name === "pin" || icon.name === "unpin");
        pinnedIcons.forEach(icon => {
            if (!this.iconService.isSvgIconCached(icon.name, FILTERING_ICONS_FONT_SET)) {
                this.iconService.addSvgIconFromText(icon.name, icon.value, FILTERING_ICONS_FONT_SET);
            }
        });
    }

    public toggleColumn(column: ColumnType) {
        column.pinned ? column.unpin() : column.pin();
        this.cdr.detectChanges();
    }
}
