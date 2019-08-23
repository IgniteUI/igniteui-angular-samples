/* tslint:disable */

// Chart Modules
import { IgxDataChartAnnotationModule } from "igniteui-angular-charts/ES5/igx-data-chart-annotation-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
import { IgxDataChartCategoryCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-core-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
import { IgxDataChartScatterCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-core-module";
import { IgxDataChartScatterModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-module";
import { IgxCrosshairLayerModule } from "igniteui-angular-charts/ES5/igx-crosshair-layer-module";
import { IgxNumericXAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-module";
import { IgxNumericYAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-module";
import { IgxBubbleSeriesModule } from "igniteui-angular-charts/ES5/igx-bubble-series-module";

// import { IgxZoomSliderModule } from "igniteui-angular-charts/ES5/igx-zoom-slider-module";
import { IgxZoomSliderDynamicModule } from "igniteui-angular-charts/ES5/igx-zoom-slider-dynamic-module";

import { SampleScatterStats } from "../../src/app/charts/data-chart/SampleScatterStats";
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
            [IgxZoomSliderDynamicModule, IgxNumericYAxisModule, IgxNumericXAxisModule,
             IgxCrosshairLayerModule, IgxDataChartScatterModule, IgxDataChartScatterCoreModule,
             IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule,
             IgxDataChartAnnotationModule, IgxDataChartInteractivityModule,
             IgxBubbleSeriesModule],
            [SampleScatterStats], ["/src/app/charts/data-chart/SampleScatterStats.ts"]));

        return configs;
    }

}
