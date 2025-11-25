import { IgxCsvExporterService } from 'igniteui-angular/core';
import { IgxGridModule } from 'igniteui-angular/grids/grid';
import { IgxTreeGridModule } from 'igniteui-angular/grids/tree-grid';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class ExportCsvConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        IgxPreventDocumentScrollDirective: '../../src/app/directives/prevent-scroll.directive'
    };

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'CsvExportComponent',
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts'],
            component: 'CsvExportSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/export-csv/"
        }));

        configs.push(new Config({
            component: 'TreeGridCsvExportSample1Component',
            additionalFiles: ["/src/app/tree-grid/data/orders.ts"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/export-csv/"
        }));

        return configs;
    }
}
