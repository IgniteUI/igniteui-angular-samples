/* tslint:disable:object-literal-sort-keys */
import { IgxButtonGroupModule, IgxButtonModule, IgxCsvExporterService,
      IgxDialogModule, IgxExcelExporterService, IgxGridModule,
      IgxIconModule, IgxRippleModule, IgxSliderModule, IgxSwitchModule, IgxToggleModule } from "igniteui-angular";
import { IgxBollingerBandsOverlayModule } from "igniteui-angular-charts/ES5/igx-bollinger-bands-overlay-module";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { IgxCategoryXAxisModule } from "igniteui-angular-charts/ES5/igx-category-x-axis-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
import { IgxFinancialPriceSeriesModule } from "igniteui-angular-charts/ES5/igx-financial-price-series-module";
import { IgxIndicatorsModule } from "igniteui-angular-charts/ES5/igx-indicators-module";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import { IgxNumericXAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-module";
import { IgxNumericYAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-module";
import { FinJSDemoComponent } from "../../src/app/grid-finjs/grid-finjs-demo.component";
import { LocalDataService } from "../../src/app/grid-finjs/localData.service";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class GridFinjsConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: FinJSDemoComponent,
            additionalFiles: ["/src/app/grid-finjs/localData.service.ts",
                "/src/app/grid/services/financialData.ts"],
            additionalDependencies: ["igniteui-angular-charts", "igniteui-angular-core"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxButtonGroupModule, IgxIconModule, IgxSliderModule, IgxToggleModule,
                    IgxButtonModule, IgxExcelExporterService, IgxCsvExporterService, IgxSwitchModule,
                    IgxRippleModule, FinJSDemoComponent,
                    LocalDataService, IgxDialogModule,
                    IgxCategoryChartModule,
                    IgxDataChartCategoryModule,
                    IgxDataChartCoreModule,
                    IgxLegendModule,
                    IgxIndicatorsModule,
                    IgxFinancialPriceSeriesModule,
                    IgxDataChartInteractivityModule,
                    IgxBollingerBandsOverlayModule,
                    IgxNumericXAxisModule,
                    IgxNumericYAxisModule,
                    IgxCategoryXAxisModule],
                ngDeclarations: [FinJSDemoComponent],
                ngImports: [IgxGridModule, IgxButtonGroupModule, IgxIconModule, IgxSliderModule, IgxToggleModule,
                    IgxButtonModule, IgxSwitchModule, IgxRippleModule, IgxGridModule, IgxDialogModule,
                    IgxCategoryChartModule,
                    IgxDataChartCategoryModule,
                    IgxDataChartCoreModule,
                    IgxLegendModule,
                    IgxIndicatorsModule,
                    IgxFinancialPriceSeriesModule,
                    IgxDataChartInteractivityModule,
                    IgxBollingerBandsOverlayModule,
                    IgxNumericXAxisModule,
                    IgxNumericYAxisModule,
                    IgxCategoryXAxisModule],
                ngProviders: [LocalDataService, IgxExcelExporterService, IgxCsvExporterService]
            })
        }));

        return configs;
    }
}
