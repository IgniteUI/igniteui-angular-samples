/* tslint:disable:object-literal-sort-keys */
import {
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCsvExporterService,
    IgxDialogModule,
    IgxExcelExporterService,
    IgxGridModule,
    IgxIconModule,
    IgxRippleModule,
    IgxSliderModule,
    IgxSwitchModule,
    IgxToggleModule
} from "igniteui-angular";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { FinJSDemoComponent } from "../../src/app/grid-finjs/grid-finjs-demo.component";
import { LocalDataService } from "../../src/app/grid-finjs/localData.service";
import { DependenciesType } from "../services/DependenciesType";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class GridFinjsConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: FinJSDemoComponent,
            dependenciesType: DependenciesType.Charts,
            additionalFiles: ["/src/app/grid-finjs/localData.service.ts",
                "/src/app/grid/services/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule,
                    IgxGridModule, IgxButtonGroupModule, IgxIconModule, IgxSliderModule, IgxToggleModule,
                    IgxButtonModule, IgxExcelExporterService, IgxCsvExporterService, IgxSwitchModule,
                    IgxRippleModule, FinJSDemoComponent, IgxDialogModule, LocalDataService],
                ngDeclarations: [FinJSDemoComponent],
                ngImports: [IgxGridModule, IgxButtonGroupModule, IgxIconModule, IgxSliderModule, IgxToggleModule,
                    IgxButtonModule, IgxSwitchModule, IgxRippleModule, IgxCategoryChartModule, IgxDialogModule],
                ngProviders: [LocalDataService, IgxExcelExporterService, IgxCsvExporterService]
            })
        }));

        return configs;
    }
}
