import {IgxCsvExporterService,
IgxGridModule,
IgxTreeGridModule} from '@infragistics/igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class ExportCsvConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'CsvExportComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCsvExporterService', 'CsvExportComponent'],
                ngDeclarations: ['CsvExportComponent'],
                ngImports: [],
                ngProviders: ['IgxCsvExporterService']
            })
        }));

        configs.push(new Config({
            component: 'CsvExportSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxCsvExporterService', 'CsvExportSample1Component'],
                ngDeclarations: ['CsvExportSample1Component'],
                ngImports: ['IgxGridModule'],
                ngProviders: ['IgxCsvExporterService']
            }),
            shortenComponentPathBy: "/export-csv/"
        }));

        configs.push(new Config({
            component: 'TreeGridCsvExportSample1Component',
            additionalFiles: ["/src/app/tree-grid/data/foods.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxTreeGridModule', 'IgxCsvExporterService', 'TreeGridCsvExportSample1Component'],
                ngDeclarations: ['TreeGridCsvExportSample1Component'],
                ngImports: ['IgxTreeGridModule'],
                ngProviders: ['IgxCsvExporterService']
            }),
            shortenComponentPathBy: "/export-csv/"
        }));

        return configs;
    }
}
