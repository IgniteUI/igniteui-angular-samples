/* eslint-disable @typescript-eslint/naming-convention */
import { IgxButtonModule, IgxToggleModule } from 'igniteui-angular/directives';
import { IgxDropDownComponent, IgxDropDownModule } from 'igniteui-angular/drop-down';
import { IgxExcelExporterService } from 'igniteui-angular/core';
import { IgxGridModule } from 'igniteui-angular/grids/grid';
import { IgxTreeGridModule } from 'igniteui-angular/grids/tree-grid';
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
                '/src/app/directives/prevent-scroll.directive.ts'
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
