/* tslint:disable */

// Chart Modules
import { IgxDataChartAnnotationModule } from "igniteui-angular-charts/ES5/igx-data-chart-annotation-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
import { IgxDataChartCategoryCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-core-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
import { IgxCategoryXAxisModule } from "igniteui-angular-charts/ES5/igx-category-x-axis-module";
import { IgxCalloutLayerModule } from "igniteui-angular-charts/ES5/igx-callout-layer-module";
import { IgxCrosshairLayerModule } from "igniteui-angular-charts/ES5/igx-crosshair-layer-module";
import { IgxFinancialPriceSeriesModule } from "igniteui-angular-charts/ES5/igx-financial-price-series-module";
import { IgxOrdinalTimeXAxisModule } from "igniteui-angular-charts/ES5/igx-ordinal-time-x-axis-module";
import { IgxNumericYAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-module";

// import { IgxZoomSliderModule } from "igniteui-angular-charts/ES5/igx-zoom-slider-module";
import { IgxZoomSliderDynamicModule } from "igniteui-angular-charts/ES5/igx-zoom-slider-dynamic-module";

import { StockDataService } from "../../src/app/charts/financial-chart/services/stock-data.service";
import { ZoomSliderOverviewComponent } from "../../src/app/charts/zoomslider/zoomslider-overview/zoomslider-overview.component";

import { DependenciesType } from "../services/DependenciesType";
import { BaseConfigGenerator } from "./core/BaseConfigGenerator";
import { Config } from "./core/Config";

export class ZoomSliderConfigGenerator extends BaseConfigGenerator {

    constructor() {
        super(DependenciesType.Charts, "/charts/zoomslider/");
    }

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // using simpler config instead of default/complex config

        configs.push(this.getConfig(
            ZoomSliderOverviewComponent,
            [IgxZoomSliderDynamicModule, IgxNumericYAxisModule, IgxOrdinalTimeXAxisModule,
             IgxCrosshairLayerModule, IgxCategoryXAxisModule, IgxCalloutLayerModule,
             IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule,
             IgxDataChartAnnotationModule, IgxDataChartInteractivityModule,
             IgxFinancialPriceSeriesModule],
            [StockDataService], ["/src/app/charts/financial-chart/services/stock-data.service.ts"]));

        return configs;
    }

}
