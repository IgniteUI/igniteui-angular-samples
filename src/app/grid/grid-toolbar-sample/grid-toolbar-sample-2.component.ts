import { Component } from '@angular/core';
import { AbsoluteScrollStrategy, AutoPositionStrategy, GlobalPositionStrategy } from 'igniteui-angular/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { scaleInCenter, scaleOutCenter } from 'igniteui-angular/animations';
import { athletesData } from '../../data/athletesData';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-grid-toolbar-sample-2',
    styleUrls: ['./grid-toolbar-sample-2.component.scss'],
    templateUrl: './grid-toolbar-sample-2.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxSwitchComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent]
})
export class GridToolbarSample2Component {

    data: any[];
    toolbarTitle = 'Grid toolbar';
    enableHiding = true;
    enablePinning = true;
    enableExport = true;
    enableFiltering = true;
    public positionStrategyScaleCenter = new GlobalPositionStrategy({
        openAnimation: scaleInCenter,
        closeAnimation: scaleOutCenter
    });
    public overlaySettingsScaleCenter = {
        positionStrategy: this.positionStrategyScaleCenter,
        scrollStrategy: new AbsoluteScrollStrategy(),
        modal: true,
        closeOnEscape: true
    };

    public positionStrategyAuto = new AutoPositionStrategy();
    public overlaySettingsAuto = {
        positionStrategy: this.positionStrategyAuto,
        scrollStrategy: new AbsoluteScrollStrategy(),
        modal: false,
        closeOnEscape: false
    };

    constructor() {
        this.data = athletesData;
    }
}
