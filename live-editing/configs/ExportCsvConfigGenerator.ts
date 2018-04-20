import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { CsvFileTypes,
         IgxCsvExporterOptions,
         IgxCsvExporterService,
         IColumnExportingEventArgs,
         ICsvExportEndedEventArgs,
         IRowExportingEventArgs } from "igniteui-angular/services/index";
import { CsvExportComponent } from "../../src/app/export-csv/csv-export.component";
import { CsvExportSample1Component } from "../../src/app/export-csv/csv-export-sample-1/csv-export-sample-1.component";

export class ExportCsvConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        configs.push(new Config({
            component: CsvExportComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [CsvFileTypes, IgxCsvExporterOptions, IgxCsvExporterService, CsvExportComponent],
                ngDeclarations: [CsvExportComponent],
                ngImports: [CsvFileTypes, IgxCsvExporterOptions, IgxCsvExporterService]
            }),
            shortenComponentPathBy: "/export-csv/"
        }));

        configs.push(new Config({
            component: CsvExportSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [CsvFileTypes, IgxCsvExporterOptions, IgxCsvExporterService,
                          IColumnExportingEventArgs, ICsvExportEndedEventArgs, IRowExportingEventArgs, CsvExportSample1Component],
                ngDeclarations: [CsvExportSample1Component],
                ngImports: [CsvFileTypes, IgxCsvExporterOptions, IgxCsvExporterService,
                            IColumnExportingEventArgs, ICsvExportEndedEventArgs, IRowExportingEventArgs]
            }),
            shortenComponentPathBy: "/export-csv/"
        }));

        return configs;
    }
}








