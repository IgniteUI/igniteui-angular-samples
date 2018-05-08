/* tslint:disable:object-literal-sort-keys */
import { IgxGridModule } from "igniteui-angular/main";
import { IgxCsvExporterService } from "igniteui-angular/services/index";
import { CsvExportSample1Component } from "../../src/app/export-csv/csv-export-sample-1/csv-export-sample-1.component";
import { CsvExportComponent } from "../../src/app/export-csv/csv-export.component";
import * as DR from "../DependencyResolver";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ExportCsvConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: CsvExportComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCsvExporterService, CsvExportComponent],
                ngDeclarations: [CsvExportComponent],
                ngImports: [],
                ngProviders: [IgxCsvExporterService]
            }),
            additionalDependencies: ["immediate"]
        }));

        configs.push(new Config({
            component: CsvExportSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxCsvExporterService, CsvExportSample1Component],
                ngDeclarations: [CsvExportSample1Component],
                ngImports: [IgxGridModule],
                ngProviders: [IgxCsvExporterService]
            }),
            shortenComponentPathBy: "/export-csv/",
            additionalDependencies: ["immediate"]
        }));

        return configs;
    }
}
