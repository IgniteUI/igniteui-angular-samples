import {
    DataChartAxisLocationsComponent
} from "../../src/app/charts/data-chart/data-chart-axis-locations/data-chart-axis-locations.component";
import {
    DataChartAxisSettingsComponent
} from "../../src/app/charts/data-chart/data-chart-axis-settings/data-chart-axis-settings.component";
import {
    DataChartAxisSharingComponent
} from "../../src/app/charts/data-chart/data-chart-axis-sharing/data-chart-axis-sharing.component";
import {
    DataChartAxisTypesComponent
} from "../../src/app/charts/data-chart/data-chart-axis-types/data-chart-axis-types.component";
import {
    DataChartLegendsComponent
} from "../../src/app/charts/data-chart/data-chart-legends/data-chart-legends.component";
import {
    DataChartNavigationComponent
} from "../../src/app/charts/data-chart/data-chart-navigation/data-chart-navigation.component";
import {
    DataChartOverviewComponent
} from "../../src/app/charts/data-chart/data-chart-overview/data-chart-overview.component";
import {
    DataChartPerformanceComponent
} from "../../src/app/charts/data-chart/data-chart-performance/data-chart-performance.component";
import {
    DataChartSeriesAnimationsComponent
} from "../../src/app/charts/data-chart/data-chart-series-animations/data-chart-series-animations.component";
import {
    DataChartSeriesAnnotationsComponent
} from "../../src/app/charts/data-chart/data-chart-series-annotations/data-chart-series-annotations.component";
import {
    DataChartSeriesHighlightingComponent
} from "../../src/app/charts/data-chart/data-chart-series-highlighting/data-chart-series-highlighting.component";
import {
    DataChartSeriesMarkersComponent
} from "../../src/app/charts/data-chart/data-chart-series-markers/data-chart-series-markers.component";
import {
    DataChartSeriesTooltipsComponent
} from "../../src/app/charts/data-chart/data-chart-series-tooltips/data-chart-series-tooltips.component";
import {
    DataChartSeriesTrendlinesComponent
} from "../../src/app/charts/data-chart/data-chart-series-trendlines/data-chart-series-trendlines.component";
import {
    DataChartSynchronizationComponent
} from "../../src/app/charts/data-chart/data-chart-synchronization/data-chart-synchronization.component";
import {
    DataChartTitlesComponent
} from "../../src/app/charts/data-chart/data-chart-titles/data-chart-titles.component";
import {
    DataChartTypeCategorySeriesComponent
} from "../../src/app/charts/data-chart/data-chart-type-category-series/data-chart-type-category-series.component";
import {
    DataChartTypeFinancialSeriesComponent
} from "../../src/app/charts/data-chart/data-chart-type-financial-series/data-chart-type-financial-series.component";
import {
    DataChartTypePolarSeriesComponent
} from "../../src/app/charts/data-chart/data-chart-type-polar-series/data-chart-type-polar-series.component";
import {
    DataChartTypeRadialSeriesComponent
} from "../../src/app/charts/data-chart/data-chart-type-radial-series/data-chart-type-radial-series.component";
import {
    DataChartTypeRangeSeriesComponent
} from "../../src/app/charts/data-chart/data-chart-type-range-series/data-chart-type-range-series.component";
import {
    DataChartTypeScatterAreaSeriesComponent
} from "../../src/app/charts/data-chart/data-chart-type-scatter-area-series/data-chart-type-scatter-area-series.component";
import {
    DataChartTypeScatterContourSeriesComponent
} from "../../src/app/charts/data-chart/data-chart-type-scatter-contour-series/data-chart-type-scatter-contour-series.component";
import {
    DataChartTypeScatterDensitySeriesComponent
} from "../../src/app/charts/data-chart/data-chart-type-scatter-density-series/data-chart-type-scatter-density-series.component";
import {
    DataChartTypeScatterSeriesComponent
} from "../../src/app/charts/data-chart/data-chart-type-scatter-series/data-chart-type-scatter-series.component";
import {
    DataChartTypeScatterShapeSeriesComponent
} from "../../src/app/charts/data-chart/data-chart-type-scatter-shape-series/data-chart-type-scatter-shape-series.component";
import {
    DataChartTypeStackedSeriesComponent
} from "../../src/app/charts/data-chart/data-chart-type-stacked-series/data-chart-type-stacked-series.component";
import {
    DataChartTypeValueOverlayComponent
} from "../../src/app/charts/data-chart/data-chart-type-value-overlay/data-chart-type-value-overlay.component";

import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { DependenciesType } from "../services/DependenciesType";
import { IConfigGenerator } from "./core/IConfigGenerator";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";

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

        configs.push(new Config({
            component: DataChartAxisLocationsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartAxisLocationsComponent],
                ngDeclarations: [DataChartAxisLocationsComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartAxisSettingsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartAxisSettingsComponent, SharedData],
                ngDeclarations: [DataChartAxisSettingsComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartAxisSharingComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartAxisSharingComponent, SampleFinancialData],
                ngDeclarations: [DataChartAxisSharingComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartAxisTypesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule,
                    DataChartAxisTypesComponent,
                    SampleFinancialData,
                    SampleCategoryData,
                    SampleScatterData],
                ngDeclarations: [DataChartAxisTypesComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartLegendsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartLegendsComponent, SharedData],
                ngDeclarations: [DataChartLegendsComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartNavigationComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartNavigationComponent, SampleScatterStats],
                ngDeclarations: [DataChartNavigationComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartOverviewComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartOverviewComponent, SampleScatterStats],
                ngDeclarations: [DataChartOverviewComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartPerformanceComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartPerformanceComponent],
                ngDeclarations: [DataChartPerformanceComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartSeriesAnimationsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartSeriesAnimationsComponent],
                ngDeclarations: [DataChartSeriesAnimationsComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartSeriesAnnotationsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartSeriesAnnotationsComponent],
                ngDeclarations: [DataChartSeriesAnnotationsComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartSeriesHighlightingComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartSeriesHighlightingComponent],
                ngDeclarations: [DataChartSeriesHighlightingComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartSeriesMarkersComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartSeriesMarkersComponent],
                ngDeclarations: [DataChartSeriesMarkersComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartSeriesTooltipsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartSeriesTooltipsComponent],
                ngDeclarations: [DataChartSeriesTooltipsComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartSeriesTrendlinesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartSeriesTrendlinesComponent, SampleFinancialData],
                ngDeclarations: [DataChartSeriesTrendlinesComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));
        configs.push(new Config({
            component: DataChartSynchronizationComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartSynchronizationComponent],
                ngDeclarations: [DataChartSynchronizationComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartTitlesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartTitlesComponent, SharedData],
                ngDeclarations: [DataChartTitlesComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartTypeCategorySeriesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartTypeCategorySeriesComponent],
                ngDeclarations: [DataChartTypeCategorySeriesComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartTypeFinancialSeriesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartTypeFinancialSeriesComponent, SampleFinancialData],
                ngDeclarations: [DataChartTypeFinancialSeriesComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartTypePolarSeriesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartTypePolarSeriesComponent, SamplePolarData],
                ngDeclarations: [DataChartTypePolarSeriesComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartTypeRadialSeriesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartTypeRadialSeriesComponent, SampleRadialData],
                ngDeclarations: [DataChartTypeRadialSeriesComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartTypeRangeSeriesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartTypeRangeSeriesComponent, SampleRangeData],
                ngDeclarations: [DataChartTypeRangeSeriesComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartTypeScatterAreaSeriesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartTypeScatterAreaSeriesComponent, SampleScatterData],
                ngDeclarations: [DataChartTypeScatterAreaSeriesComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartTypeScatterContourSeriesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartTypeScatterContourSeriesComponent, SampleScatterData],
                ngDeclarations: [DataChartTypeScatterContourSeriesComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartTypeScatterDensitySeriesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartTypeScatterDensitySeriesComponent, SampleDensityData],
                ngDeclarations: [DataChartTypeScatterDensitySeriesComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartTypeScatterSeriesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartTypeScatterSeriesComponent, SampleScatterStats],
                ngDeclarations: [DataChartTypeScatterSeriesComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartTypeScatterShapeSeriesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartTypeScatterShapeSeriesComponent, SampleShapeData],
                ngDeclarations: [DataChartTypeScatterShapeSeriesComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartTypeStackedSeriesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartTypeStackedSeriesComponent],
                ngDeclarations: [DataChartTypeStackedSeriesComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        configs.push(new Config({
            component: DataChartTypeValueOverlayComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDataChartCoreModule, DataChartTypeValueOverlayComponent],
                ngDeclarations: [DataChartTypeValueOverlayComponent],
                ngImports: [IgxDataChartCoreModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/data-chart/"
        }));

        return configs;
    }
}
