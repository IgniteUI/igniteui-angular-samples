import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxExcelExporterOptions,
         IgxExcelExporterService,
         IColumnExportingEventArgs,
         IExcelExportEndedEventArgs,
         IRowExportingEventArgs } from "igniteui-angular/services/index";
import { ExcelExportComponent } from "../../src/app/export-excel/excel-export.component";
import { ExcelExportSample1Component } from "../../src/app/export-excel/excel-export-sample-1/excel-export-sample-1.component";

export class ExportExcelConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        configs.push(new Config({
            component: ExcelExportComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxExcelExporterOptions, IgxExcelExporterService, ExcelExportComponent],
                ngDeclarations: [ExcelExportComponent],
                ngImports: [IgxExcelExporterOptions, IgxExcelExporterService]
            }),
            shortenComponentPathBy: "/export-excel/"
        }));

        configs.push(new Config({
            component: ExcelExportSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxExcelExporterOptions, IgxExcelExporterService,
                          IColumnExportingEventArgs, IExcelExportEndedEventArgs, IRowExportingEventArgs, ExcelExportSample1Component],
                ngDeclarations: [ExcelExportSample1Component],
                ngImports: [IgxExcelExporterOptions, IgxExcelExporterService,
                            IColumnExportingEventArgs, IExcelExportEndedEventArgs, IRowExportingEventArgs]
            }),
            shortenComponentPathBy: "/export-excel/"
        }));

        return configs;
    }
}








