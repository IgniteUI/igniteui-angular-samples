/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClientModule } from '@angular/common/http';
import { IgxButtonGroupModule } from 'igniteui-angular/button-group';
import { IgxButtonModule, IgxRippleModule, IgxToggleModule } from 'igniteui-angular/directives';
import { IgxCsvExporterService, IgxExcelExporterService } from 'igniteui-angular/core';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxSliderModule } from 'igniteui-angular/slider';
import { IgxSwitchModule } from 'igniteui-angular/switch';
import { IgxTreeGridModule } from 'igniteui-angular/grids/tree-grid';
import {
    IgxSparklineCoreModule,
    IgxSparklineModule
} from 'igniteui-angular-charts';
import { Config, IConfigGenerator, AppModuleConfig } from 'igniteui-live-editing';
import { BaseAppConfig } from '../BaseConfig';

export class DVTreeGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        FinancialDataService: '../../../projects/app-lob/src/app/services/financial.service',
        IgxPreventDocumentScrollModule: '../../../src/app/directives/prevent-scroll.directive',
        SignalRService: '../../../projects/app-lob/src/app/services/signal-r.service'
    };

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // TreeGrid ChildDataKey Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/projects/app-lob/src/app/tree-grid/tree-grid-childdatakey-sample/data.ts',
                '/projects/app-lob/src/_app-layout.scss', '/projects/app-lob/src/_variables.scss'],
            additionalDependencies: ['igniteui-angular-charts', 'igniteui-angular-core'],
            appConfig: BaseAppConfig,
            component: 'TreeGridChilddatakeySampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Primary/Foreign Key Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/projects/app-lob/src/app/tree-grid/tree-grid-primaryforeignkey-sample/data.ts',
                '/projects/app-lob/src/_app-layout.scss', '/projects/app-lob/src/_variables.scss'],
            additionalDependencies: ['igniteui-angular-charts', 'igniteui-angular-core'],
            appConfig: BaseAppConfig,
            component: 'TreeGridPrimaryforeignkeySampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalDependencies: ['@microsoft/signalr'],
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/projects/app-lob/src/app/services/financial.service.ts',
                '/projects/app-lob/src/app/data/financialData.ts', '/projects/app-lob/src/app/services/signal-r.service.ts',
                '/projects/app-lob/src/_app-layout.scss', '/projects/app-lob/src/_variables.scss'],
            appConfig: BaseAppConfig,
            component: 'TreeGridFinJSComponent'
        }));

        return configs;
    }
}
