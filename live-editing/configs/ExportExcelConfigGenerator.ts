/* eslint-disable @typescript-eslint/naming-convention */
import {
    IgxButtonModule,
    IgxDropDownComponent,
    IgxDropDownModule,
    IgxExcelExporterService,
    IgxGridModule,
    IgxTreeGridModule,
    IgxToggleModule 
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';;
export class ExportExcelConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        PasteHandler: '../../src/app/grid/grid-paste/paste-handler.directive',
        IgxPreventDocumentScrollDirective: '../../src/app/directives/prevent-scroll.directive'
    };
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'ExcelExportComponent',
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'ExcelExportSample1Component',
            additionalFiles: ['/src/app/services/export-excel/data/invoiceData.ts'],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/export-excel/'
        }));

        configs.push(new Config({
            component: 'GridPasteSampleComponent',
            additionalFiles: [
                '/src/app/grid/grid-paste/data.ts',
                '/src/app/grid/grid-paste/paste-handler.directive.ts',
                this.additionalImports.IgxPreventDocumentScrollDirective
            ],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/grid-paste/'
        }));

        configs.push(new Config({
            component: 'TreeGridExcelExportSample1Component',
            additionalFiles: [
                '/src/app/tree-grid/data/orders.ts',
                '/src/app/directives/prevent-scroll.directive.ts'
            ],
            appConfig: BaseAppConfig
        }));

        return configs;
    }
}
