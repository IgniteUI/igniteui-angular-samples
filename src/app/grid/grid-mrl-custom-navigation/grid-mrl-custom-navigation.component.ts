import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxGridComponent } from '@infragistics/igniteui-angular';
import { DATA } from '../../data/company-data';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-mrl-custom-navigation-sample',
    styleUrls: ['./grid-mrl-custom-navigation.component.scss'],
    templateUrl: './grid-mrl-custom-navigation.component.html'
})
export class GridMRLCustomNavigationComponent {
    @ViewChild(IgxGridComponent, { read: IgxGridComponent, static : true })
    public grid: IgxGridComponent;

    public sourceData = DATA;

    public customNavigation(args) {
        const target = args.target;
        if (args.event.key.toLowerCase() === 'enter') {
            args.event.preventDefault();
            args.cancel = true;
            const rowIndex = target.row.index === undefined ? target.index : target.row.index;
            this.grid.navigateTo(args.event.shiftKey ? rowIndex - 1 : rowIndex + 1, target.column.visibleIndex,
                 (obj) => {
                    obj.target.activate();
                });
        }
    }
}
