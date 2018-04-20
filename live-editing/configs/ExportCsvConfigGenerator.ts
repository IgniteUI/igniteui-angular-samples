import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxCsvExporterService } from "igniteui-angular/services/index";
import { CsvExportComponent } from "../../src/app/export-csv/csv-export.component";
import { CsvExportSample1Component } from "../../src/app/export-csv/csv-export-sample-1/csv-export-sample-1.component";
import { IgxGridModule } from "igniteui-angular/main";

export class ExportCsvConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        configs.push(new Config({
            component: CsvExportComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCsvExporterService, CsvExportComponent],
                ngDeclarations: [CsvExportComponent],
                ngImports: [],
                ngProviders: [IgxCsvExporterService]
            })
        }));

        configs.push(new Config({
            component: CsvExportSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxCsvExporterService, CsvExportSample1Component],
                ngDeclarations: [CsvExportSample1Component],
                ngImports: [IgxGridModule],
                ngProviders: [IgxCsvExporterService]
            }),
            shortenComponentPathBy: "/export-csv/"
        }));

        return configs;
    }
}








