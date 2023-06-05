import {IgxCsvExporterService,
IgxGridModule,
IgxTreeGridModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class ExportCsvConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        IgxPreventDocumentScrollModule: '../../src/app/directives/prevent-scroll.directive'
    };

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
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts'],
            component: 'CsvExportSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxCsvExporterService', 'CsvExportSample1Component', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['CsvExportSample1Component'],
                ngImports: ['IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngProviders: ['IgxCsvExporterService']
            }),
            shortenComponentPathBy: "/export-csv/"
        }));

        configs.push(new Config({
            component: 'TreeGridCsvExportSample1Component',
            additionalFiles: ["/src/app/tree-grid/data/orders.ts"],
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
