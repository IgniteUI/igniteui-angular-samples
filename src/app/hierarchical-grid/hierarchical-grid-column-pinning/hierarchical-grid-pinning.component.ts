
import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { ColumnType, IgxIconService, IgxCellHeaderTemplateDirective, IgxIconComponent, IgxHierarchicalGridComponent, IgxColumnComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { icons } from "../../services/svgIcons";
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

const FILTERING_ICONS_FONT_SET = 'filtering-icons';
@Component({
    selector: 'app-hierarchical-grid-pinning',
    styleUrls: ['./hierarchical-grid-pinning.component.scss'],
    templateUrl: 'hierarchical-grid-pinning.component.html',
    imports: [IgxCellHeaderTemplateDirective, IgxIconComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})

export class HGridPinningSampleComponent implements AfterViewInit {
    public localdata;

    constructor(private cdr: ChangeDetectorRef, private iconService: IgxIconService) {
        this.localdata = CUSTOMERS;
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
