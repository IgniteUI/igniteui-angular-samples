import { Component } from '@angular/core';
import { GlobalPositionStrategy, scaleInCenter, scaleOutCenter, AbsoluteScrollStrategy, AutoPositionStrategy } from 'igniteui-angular';
import { athletesData } from '../../data/athletesData';

@Component({
  selector: 'app-grid-toolbar-sample-2',
  styleUrls: ['./grid-toolbar-sample-2.component.scss'],
  templateUrl: './grid-toolbar-sample-2.component.html'
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
