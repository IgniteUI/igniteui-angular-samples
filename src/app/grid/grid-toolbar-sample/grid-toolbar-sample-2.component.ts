import { Component } from '@angular/core';
import { GlobalPositionStrategy, AbsoluteScrollStrategy, AutoPositionStrategy, IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxSwitchComponent, IgxGridComponent, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent } from 'igniteui-angular';
import { scaleInCenter, scaleOutCenter } from 'igniteui-angular/animations';
import { athletesData } from '../../data/athletesData';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-grid-toolbar-sample-2',
    styleUrls: ['./grid-toolbar-sample-2.component.scss'],
    templateUrl: './grid-toolbar-sample-2.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxSwitchComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, NgIf, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent]
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
