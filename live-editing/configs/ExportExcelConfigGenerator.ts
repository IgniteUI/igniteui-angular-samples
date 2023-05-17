/* eslint-disable @typescript-eslint/naming-convention */
import {
    IgxButtonModule,
    IgxDropDownComponent,
    IgxDropDownModule,
    IgxExcelExporterService,
    IgxGridModule,
    IgxTreeGridModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';
export class ExportExcelConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        PasteHandler: '../../src/app/grid/grid-paste/paste-handler.directive',
        IgxPreventDocumentScrollModule: '../../src/app/directives/prevent-scroll.directive'
    };
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'ExcelExportComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxExcelExporterService', 'ExcelExportComponent'],
                ngDeclarations: ['ExcelExportComponent'],
                ngImports: [],
                ngProviders: ['IgxExcelExporterService']
            })
        }));

        configs.push(new Config({
            component: 'ExcelExportSample1Component',
            additionalFiles: ['/src/app/services/export-excel/data/invoiceData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxExcelExporterService', 'ExcelExportSample1Component', 'IgxButtonModule'],
                ngDeclarations: ['ExcelExportSample1Component'],
                ngImports: ['IgxGridModule', 'IgxButtonModule'],
                ngProviders: ['IgxExcelExporterService']
            }),
            shortenComponentPathBy: '/export-excel/'
        }));

        configs.push(new Config({
            component: 'GridPasteSampleComponent',
            additionalFiles: ['/src/app/grid/grid-paste/data.ts',
                '/src/app/grid/grid-paste/paste-handler.directive.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxExcelExporterService', 'GridPasteSampleComponent', 'IgxDropDownComponent',
                    'IgxDropDownModule', 'IgxButtonModule', 'PasteHandler', 'IgxToggleModule','IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridPasteSampleComponent', 'PasteHandler'],
                ngImports: ['IgxGridModule', 'IgxDropDownModule', 'IgxButtonModule', 'IgxToggleModule', 'IgxPreventDocumentScrollModule'],
                ngProviders: ['IgxExcelExporterService']
            }),
            shortenComponentPathBy: '/grid-paste/'
        }));

        configs.push(new Config({
            component: 'TreeGridExcelExportSample1Component',
            additionalFiles: ['/src/app/tree-grid/data/orders.ts', '/src/app/directives/prevent-scroll.directive.ts',],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxTreeGridModule', 'IgxExcelExporterService', 'TreeGridExcelExportSample1Component',
                    'IgxButtonModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['TreeGridExcelExportSample1Component'],
                ngImports: ['IgxTreeGridModule', 'IgxButtonModule', 'IgxPreventDocumentScrollModule'],
                ngProviders: ['IgxExcelExporterService']
            })
        }));

        return configs;
    }
}
