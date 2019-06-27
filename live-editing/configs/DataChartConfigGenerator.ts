/* tslint:disable:object-literal-sort-keys */
// tslint:disable:object-literal-shorthand
// tslint:disable:max-line-length
// tslint:disable:member-ordering
// tslint:disable:prefer-const
import { DataChartAxisLocationsComponent } from "../../src/app/charts/data-chart/data-chart-axis-locations/data-chart-axis-locations.component";
import { DataChartAxisSettingsComponent } from "../../src/app/charts/data-chart/data-chart-axis-settings/data-chart-axis-settings.component";
import { DataChartAxisSharingComponent } from "../../src/app/charts/data-chart/data-chart-axis-sharing/data-chart-axis-sharing.component";
import { DataChartAxisTypesComponent } from "../../src/app/charts/data-chart/data-chart-axis-types/data-chart-axis-types.component";
import { DataChartLegendsComponent } from "../../src/app/charts/data-chart/data-chart-legends/data-chart-legends.component";
import { DataChartNavigationComponent } from "../../src/app/charts/data-chart/data-chart-navigation/data-chart-navigation.component";
import { DataChartOverviewComponent } from "../../src/app/charts/data-chart/data-chart-overview/data-chart-overview.component";
import { DataChartPerformanceComponent } from "../../src/app/charts/data-chart/data-chart-performance/data-chart-performance.component";
import { DataChartSeriesAnimationsComponent } from "../../src/app/charts/data-chart/data-chart-series-animations/data-chart-series-animations.component";
import { DataChartSeriesAnnotationsComponent } from "../../src/app/charts/data-chart/data-chart-series-annotations/data-chart-series-annotations.component";
import { DataChartSeriesHighlightingComponent } from "../../src/app/charts/data-chart/data-chart-series-highlighting/data-chart-series-highlighting.component";
import { DataChartSeriesMarkersComponent } from "../../src/app/charts/data-chart/data-chart-series-markers/data-chart-series-markers.component";
import { DataChartSeriesTooltipsComponent } from "../../src/app/charts/data-chart/data-chart-series-tooltips/data-chart-series-tooltips.component";
import { DataChartSeriesTrendlinesComponent } from "../../src/app/charts/data-chart/data-chart-series-trendlines/data-chart-series-trendlines.component";
import { DataChartSynchronizationComponent } from "../../src/app/charts/data-chart/data-chart-synchronization/data-chart-synchronization.component";
import { DataChartTitlesComponent } from "../../src/app/charts/data-chart/data-chart-titles/data-chart-titles.component";
import { DataChartTypeCategorySeriesComponent } from "../../src/app/charts/data-chart/data-chart-type-category-series/data-chart-type-category-series.component";
import { DataChartTypeFinancialSeriesComponent } from "../../src/app/charts/data-chart/data-chart-type-financial-series/data-chart-type-financial-series.component";
import { DataChartTypePolarSeriesComponent } from "../../src/app/charts/data-chart/data-chart-type-polar-series/data-chart-type-polar-series.component";
import { DataChartTypeRadialSeriesComponent } from "../../src/app/charts/data-chart/data-chart-type-radial-series/data-chart-type-radial-series.component";
import { DataChartTypeRangeSeriesComponent } from "../../src/app/charts/data-chart/data-chart-type-range-series/data-chart-type-range-series.component";
import { DataChartTypeScatterAreaSeriesComponent } from "../../src/app/charts/data-chart/data-chart-type-scatter-area-series/data-chart-type-scatter-area-series.component";
import { DataChartTypeScatterContourSeriesComponent } from "../../src/app/charts/data-chart/data-chart-type-scatter-contour-series/data-chart-type-scatter-contour-series.component";
import { DataChartTypeScatterDensitySeriesComponent } from "../../src/app/charts/data-chart/data-chart-type-scatter-density-series/data-chart-type-scatter-density-series.component";
import { DataChartTypeScatterSeriesComponent } from "../../src/app/charts/data-chart/data-chart-type-scatter-series/data-chart-type-scatter-series.component";
import { DataChartTypeScatterShapeSeriesComponent } from "../../src/app/charts/data-chart/data-chart-type-scatter-shape-series/data-chart-type-scatter-shape-series.component";
import { DataChartTypeStackedSeriesComponent } from "../../src/app/charts/data-chart/data-chart-type-stacked-series/data-chart-type-stacked-series.component";
import { DataChartTypeValueOverlayComponent } from "../../src/app/charts/data-chart/data-chart-type-value-overlay/data-chart-type-value-overlay.component";

import { Type } from "@angular/core";
import { DependenciesType } from "../services/DependenciesType";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

import { IgxCalloutLayerModule } from "igniteui-angular-charts/ES5/igx-callout-layer-module";
// import { IgxCategoryToolTipLayer } from "igniteui-angular-charts/ES5/igx-category-tool-tip-layer";
import { IgxCrosshairLayerModule } from "igniteui-angular-charts/ES5/igx-crosshair-layer-module";
// Chart Modules
import { IgxDataChartAnnotationModule } from "igniteui-angular-charts/ES5/igx-data-chart-annotation-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
import { IgxDataChartCategoryTrendLineModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-trend-line-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
import { IgxDataChartPolarCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-polar-core-module";
import { IgxDataChartPolarModule } from "igniteui-angular-charts/ES5/igx-data-chart-polar-module";
import { IgxDataChartRadialCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-radial-core-module";
import { IgxDataChartRadialModule } from "igniteui-angular-charts/ES5/igx-data-chart-radial-module";
import { IgxDataChartScatterCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-core-module";
import { IgxDataChartScatterModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-module";
import { IgxDataChartShapeCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-shape-core-module";
import { IgxDataChartShapeModule } from "igniteui-angular-charts/ES5/igx-data-chart-shape-module";

// Series Modules
import { IgxBarSeriesModule} from "igniteui-angular-charts/ES5/igx-bar-series-module";
import { IgxBubbleSeriesModule } from "igniteui-angular-charts/ES5/igx-bubble-series-module";
 // Axes
import { IgxCategoryAngleAxisModule } from "igniteui-angular-charts/ES5/igx-category-angle-axis-module";
import { IgxCategoryXAxisModule } from "igniteui-angular-charts/ES5/igx-category-x-axis-module";
import { IgxCategoryYAxisModule } from "igniteui-angular-charts/ES5/igx-category-y-axis-module";
import { IgxColumnSeriesModule } from "igniteui-angular-charts/ES5/igx-column-series-module";
import { IgxFinancialPriceSeriesModule } from "igniteui-angular-charts/ES5/igx-financial-price-series-module";
import { IgxIndicatorsModule } from "igniteui-angular-charts/ES5/igx-indicators-module";
import { IgxNumericAngleAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-angle-axis-module";
import { IgxNumericRadiusAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-radius-axis-module";
import { IgxNumericXAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-module";
import { IgxNumericYAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-module";
import { IgxPolarAreaSeriesModule } from "igniteui-angular-charts/ES5/igx-polar-area-series-module";
import { IgxPolarLineSeriesModule } from "igniteui-angular-charts/ES5/igx-polar-line-series-module";
import { IgxPolarScatterSeriesModule } from "igniteui-angular-charts/ES5/igx-polar-scatter-series-module";
import { IgxPolarSplineAreaSeriesModule } from "igniteui-angular-charts/ES5/igx-polar-spline-area-series-module";
import { IgxPolarSplineSeriesModule } from "igniteui-angular-charts/ES5/igx-polar-spline-series-module";
import { IgxRadialAreaSeriesModule } from "igniteui-angular-charts/ES5/igx-radial-area-series-module";
import { IgxRadialColumnSeriesModule } from "igniteui-angular-charts/ES5/igx-radial-column-series-module";
import { IgxRadialLineSeriesModule } from "igniteui-angular-charts/ES5/igx-radial-line-series-module";
import { IgxRadialPieSeriesModule } from "igniteui-angular-charts/ES5/igx-radial-pie-series-module";
import { IgxScatterAreaSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-area-series-module";
import { IgxScatterContourSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-contour-series-module";
import { IgxScatterLineSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-line-series-module";
import { IgxScatterPolygonSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-polygon-series-module";
import { IgxScatterPolylineSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-polyline-series-module";
import { IgxScatterSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-series-module";
import { IgxScatterSplineSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-spline-series-module";
import { IgxTimeXAxisModule } from "igniteui-angular-charts/ES5/igx-time-x-axis-module";

// other Modules
import { IgxFinalValueLayerModule } from "igniteui-angular-charts/ES5/igx-final-value-layer-module";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import { IgxNumberAbbreviatorModule } from "igniteui-angular-charts/ES5/igx-number-abbreviator-module";
// import { IgxItemToolTipLayer } from "igniteui-angular-charts/ES5/igx-item-tool-tip-layer";

import { SampleCategoryData } from "../../src/app/charts/data-chart/SampleCategoryData";
import { SampleDensityData } from "../../src/app/charts/data-chart/SampleDensityData";
import { SampleFinancialData } from "../../src/app/charts/data-chart/SampleFinancialData";
import { SamplePolarData } from "../../src/app/charts/data-chart/SamplePolarData";
import { SampleRadialData } from "../../src/app/charts/data-chart/SampleRadialData";
import { SampleRangeData } from "../../src/app/charts/data-chart/SampleRangeData";
import { SampleScatterData } from "../../src/app/charts/data-chart/SampleScatterData";
import { SampleScatterStats } from "../../src/app/charts/data-chart/SampleScatterStats";
import { SampleShapeData } from "../../src/app/charts/data-chart/SampleShapeData";
import { SharedData } from "../../src/app/charts/data-chart/SharedData";

export class DataChartConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // using simpler config instead of default/complex config
        configs.push(this.getConfig(
            DataChartAxisLocationsComponent,
            [IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule]));

        configs.push(this.getConfig(
            DataChartAxisSettingsComponent,
            [IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule, IgxNumberAbbreviatorModule],
            [SharedData], ["/src/app/charts/data-chart/SharedData.ts"]));

        configs.push(this.getConfig(
            DataChartAxisSharingComponent,
            [IgxDataChartCoreModule, IgxDataChartCategoryModule],
            [SampleFinancialData], ["/src/app/charts/data-chart/SampleFinancialData.ts"]));

        configs.push(this.getConfig(
            DataChartAxisTypesComponent,
            [IgxDataChartCoreModule, IgxDataChartCategoryModule,
             IgxDataChartScatterCoreModule, IgxDataChartScatterModule,
             IgxTimeXAxisModule, IgxCategoryXAxisModule, IgxCategoryYAxisModule,
             IgxNumericXAxisModule, IgxNumericYAxisModule,
             IgxNumericAngleAxisModule, IgxNumericRadiusAxisModule,
             IgxCategoryAngleAxisModule ],
            [SampleFinancialData, SampleCategoryData, SampleScatterData],
            ["/src/app/charts/data-chart/SampleCategoryData.ts",
             "/src/app/charts/data-chart/SampleFinancialData.ts",
             "/src/app/charts/data-chart/SampleScatterData.ts"]));

        configs.push(this.getConfig(
            DataChartLegendsComponent,
            [IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule, IgxNumberAbbreviatorModule],
            [SharedData], ["/src/app/charts/data-chart/SharedData.ts"]));

        configs.push(this.getConfig(
            DataChartNavigationComponent,
            [IgxDataChartCoreModule, IgxDataChartScatterCoreModule, IgxDataChartScatterModule,
             IgxNumberAbbreviatorModule, IgxDataChartInteractivityModule],
            [SampleScatterStats], ["/src/app/charts/data-chart/SampleScatterStats.ts"]));

        configs.push(this.getConfig(
            DataChartOverviewComponent,
            [IgxDataChartCoreModule, IgxDataChartScatterCoreModule, IgxDataChartScatterModule,
             IgxNumberAbbreviatorModule, IgxDataChartInteractivityModule, IgxLegendModule ],
            [SampleScatterStats], ["/src/app/charts/data-chart/SampleScatterStats.ts"]));
        // configs.push(new Config({
        //     additionalFiles: ["/src/app/charts/data-chart/SampleScatterStats.ts"],
        //     component: DataChartOverviewComponent,
        //     appModuleConfig: new AppModuleConfig({
        //         imports: [IgxDataChartCoreModule, DataChartOverviewComponent, SampleScatterStats],
        //         ngDeclarations: [DataChartOverviewComponent],
        //         ngImports: [IgxDataChartCoreModule]
        //     }),
        //     dependenciesType: DependenciesType.Charts,
        //     shortenComponentPathBy: "/charts/data-chart/"
        // }));

        configs.push(this.getConfig(
            DataChartPerformanceComponent,
            [IgxDataChartCoreModule, IgxDataChartCategoryModule],
            [SharedData], ["/src/app/charts/data-chart/SharedData.ts"]));

        configs.push(this.getConfig(
            DataChartSeriesAnimationsComponent,
            [IgxDataChartCoreModule, IgxDataChartCategoryModule],
            [SharedData], ["/src/app/charts/data-chart/SharedData.ts"]));

        configs.push(this.getConfig(
            DataChartSeriesAnnotationsComponent,
            [IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartAnnotationModule,
             IgxCalloutLayerModule, IgxCrosshairLayerModule, IgxFinalValueLayerModule,
             IgxDataChartInteractivityModule],
            [SharedData], ["/src/app/charts/data-chart/SharedData.ts"]));

        configs.push(this.getConfig(
            DataChartSeriesHighlightingComponent,
            [IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartInteractivityModule],
            [SharedData], ["/src/app/charts/data-chart/SharedData.ts"]));

        configs.push(this.getConfig(
            DataChartSeriesMarkersComponent,
            [IgxDataChartCoreModule, IgxDataChartCategoryModule,
             IgxDataChartScatterCoreModule, IgxDataChartScatterModule,
             IgxNumberAbbreviatorModule],
            [SharedData], ["/src/app/charts/data-chart/SharedData.ts"]));

        configs.push(this.getConfig(
            DataChartSeriesTooltipsComponent,
            [IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule,
             IgxDataChartInteractivityModule],
            [SharedData], ["/src/app/charts/data-chart/SharedData.ts"]));

        configs.push(this.getConfig(
            DataChartSeriesTrendlinesComponent,
            [IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule,
             IgxDataChartInteractivityModule, IgxDataChartCategoryTrendLineModule],
            [SampleFinancialData], ["/src/app/charts/data-chart/SampleFinancialData.ts"]));

        configs.push(this.getConfig(
            DataChartSynchronizationComponent,
            [IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule,
             IgxDataChartInteractivityModule],
            [SharedData], ["/src/app/charts/data-chart/SharedData.ts"]));

        configs.push(this.getConfig(
            DataChartTitlesComponent,
            [IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule],
            [SharedData], ["/src/app/charts/data-chart/SharedData.ts"]));

        configs.push(this.getConfig(
            DataChartTypeCategorySeriesComponent,
            [IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule,
             IgxDataChartInteractivityModule],
            [SampleCategoryData], ["/src/app/charts/data-chart/SampleCategoryData.ts"]));

        configs.push(this.getConfig(
            DataChartTypeFinancialSeriesComponent,
            [IgxDataChartCoreModule, IgxLegendModule, IgxIndicatorsModule, IgxFinancialPriceSeriesModule,
             IgxDataChartInteractivityModule],
            [SampleFinancialData], ["/src/app/charts/data-chart/SampleFinancialData.ts"]));

        configs.push(this.getConfig(
            DataChartTypePolarSeriesComponent,
            [IgxDataChartCoreModule, IgxLegendModule, IgxDataChartPolarModule, IgxDataChartPolarCoreModule,
             IgxDataChartInteractivityModule],
            [SamplePolarData], ["/src/app/charts/data-chart/SamplePolarData.ts"]));

        configs.push(this.getConfig(
            DataChartTypeRadialSeriesComponent,
            [IgxDataChartCoreModule, IgxLegendModule, IgxDataChartRadialModule, IgxDataChartRadialCoreModule,
             IgxDataChartInteractivityModule],
            [SampleRadialData], ["/src/app/charts/data-chart/SampleRadialData.ts"]));

        configs.push(this.getConfig(
            DataChartTypeRangeSeriesComponent,
            [IgxDataChartCoreModule, IgxLegendModule, IgxDataChartCategoryModule,
             IgxDataChartInteractivityModule],
            [SampleRangeData], ["/src/app/charts/data-chart/SampleRangeData.ts"]));

        configs.push(this.getConfig(
            DataChartTypeScatterAreaSeriesComponent,
            [IgxDataChartCoreModule, IgxDataChartScatterModule, IgxDataChartScatterCoreModule,
             IgxDataChartInteractivityModule],
            [SampleScatterData], ["/src/app/charts/data-chart/SampleScatterData.ts"]));

        configs.push(this.getConfig(
            DataChartTypeScatterContourSeriesComponent,
            [IgxDataChartCoreModule, IgxDataChartScatterModule, IgxDataChartScatterCoreModule,
             IgxScatterContourSeriesModule, IgxScatterAreaSeriesModule,
             IgxDataChartInteractivityModule],
            [SampleScatterData], ["/src/app/charts/data-chart/SampleScatterData.ts"]));

        configs.push(this.getConfig(
            DataChartTypeScatterDensitySeriesComponent,
            [IgxDataChartCoreModule, IgxDataChartScatterModule, IgxDataChartScatterCoreModule,
             IgxDataChartInteractivityModule],
            [SampleDensityData], ["/src/app/charts/data-chart/SampleDensityData.ts"]));

        configs.push(this.getConfig(
            DataChartTypeScatterSeriesComponent,
            [IgxDataChartCoreModule, IgxDataChartScatterModule, IgxDataChartScatterCoreModule,
             IgxDataChartInteractivityModule],
            [SampleScatterStats], ["/src/app/charts/data-chart/SampleScatterStats.ts"]));

        configs.push(this.getConfig(
            DataChartTypeScatterShapeSeriesComponent,
            [IgxDataChartCoreModule, IgxDataChartShapeModule, IgxDataChartShapeCoreModule,
             IgxDataChartInteractivityModule, IgxDataChartScatterModule],
            [SampleShapeData], ["/src/app/charts/data-chart/SampleShapeData.ts"]));

        configs.push(this.getConfig(
            DataChartTypeStackedSeriesComponent,
            [IgxDataChartCoreModule, IgxDataChartCategoryModule,
             IgxDataChartInteractivityModule],
            [SharedData], ["/src/app/charts/data-chart/SharedData.ts"]));

        configs.push(this.getConfig(
            DataChartTypeValueOverlayComponent,
            [IgxDataChartCoreModule, IgxDataChartCategoryModule],
            [SharedData], ["/src/app/charts/data-chart/SharedData.ts"]));

        return configs;
    }

    // TODO copy this function to other *ChartConfigGenerator classes
    public getConfig(component: Type<any>, modules: any[], dataSources?: any[], dataPaths?: string[]) {
        const imports: any[] = [];
        imports.push(component);  // add sample component for importing
        for (const m of modules) {
            imports.push(m); // add modules for importing
        }
        // add optional data sources
        if (dataSources !== undefined && dataSources.length > 0) {
            for (const ds of dataSources) {
                imports.push(ds);
            }
        }

        const fields = {
            additionalFiles: dataPaths,
            component: component,
            appModuleConfig: new AppModuleConfig({
                imports: imports,
                ngDeclarations: [component],
                ngImports: modules
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
            // shortenComponentPathBy: "/charts/"
        };
        return new Config(fields);
    }
}
