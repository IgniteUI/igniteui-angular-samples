/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClientModule } from '@angular/common/http';
import {
    Router,
    RouterModule
} from '@angular/router';
import {
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCheckboxModule,
    IgxCsvExporterService,
    IgxDialogModule,
    IgxDividerModule,
    IgxExcelExporterService,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSliderModule,
    IgxSwitchModule,
    IgxTabsModule,
    IgxToggleModule,
    IgxToastModule,
    IgxFocusModule,
    IgxGridComponent
} from 'igniteui-angular';
import {
    IgxCategoryChartModule,
    IgxLegendModule,
    IgxPieChartModule,
    IgxSparklineCoreModule,
    IgxSparklineModule
} from 'igniteui-angular-charts';
import { Config, IConfigGenerator, AppModuleConfig, DependenciesType } from 'igniteui-live-editing';
import { BaseAppConfig } from '../BaseConfig';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
export class DVGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        IgxPreventDocumentScrollModule: '../../../src/app/directives/prevent-scroll.directive',
        ControllerComponent: '../../../projects/app-lob/src/app/grid-finjs/controllers.component',
        GridFinJSComponent: '../../../projects/app-lob/src/app/grid-finjs/grid-finjs.component',
        SignalRService: '../../../projects/app-lob/src/app/services/signal-r.service',
        FloatingPanesService: '../../../projects/app-lob/src/app/services/floating-panes.service',
        DockSlotComponent: '../../../projects/app-lob/src/app/grid-finjs-dock-manager/dock-slot.component',
        GridHostDirective: '../../../projects/app-lob/src/app/grid-finjs-dock-manager/dock-slot.component',
        FinancialDataService: '../../../projects/app-lob/src/app/services/financial.service'
    };
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        const dockManagerImport = 'import { defineCustomElements } from \'igniteui-dockmanager/loader\';';
        const defineCustomElements = 'defineCustomElements();';

        configs.push(new Config({
            component: 'GridComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/projects/app-lob/src/app/data/athletesData.ts',
                '/projects/app-lob/src/_app-layout.scss', '/projects/app-lob/src/_variables.scss'],
            additionalDependencies: ['igniteui-angular-charts', 'igniteui-angular-core'],
            appConfig: BaseAppConfig
        }));

        // master-detail sample
        configs.push(new Config({
            component: 'GridMasterDetailSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/projects/app-lob/src/app/data/employeesData.ts',
                '/projects/app-lob/src/_app-layout.scss', '/projects/app-lob/src/_variables.scss'],
            additionalDependencies: ['igniteui-angular-charts', 'igniteui-angular-core'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'FinJSDemoComponent',
            dependenciesType: DependenciesType.Charts,
            additionalDependencies: ['@microsoft/signalr'],
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/projects/app-lob/src/app/services/financial.service.ts',
                '/projects/app-lob/src/app/services/signal-r.service.ts',
                '/projects/app-lob/src/app/data/financialData.ts', '/projects/app-lob/src/app/grid-finjs/controllers.component.ts',
                '/projects/app-lob/src/app/grid-finjs/grid-finjs.component.ts',
                '/projects/app-lob/src/app/grid-finjs/controllers.component.html',
                '/projects/app-lob/src/app/grid-finjs/grid-finjs.component.html',
                '/projects/app-lob/src/app/grid-finjs/controllers.component.scss',
                '/projects/app-lob/src/app/grid-finjs/grid-finjs.component.scss',
                '/projects/app-lob/src/_app-layout.scss', '/projects/app-lob/src/_variables.scss'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridFinJSDockManagerComponent',
            additionalDependencies: ['igniteui-angular-charts', 'igniteui-angular-core', '@juggle/resize-observer', '@microsoft/signalr', 'igniteui-dockmanager'],
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/projects/app-lob/src/app/services/signal-r.service.ts',
                '/projects/app-lob/src/app/data/financialData.ts',
                '/projects/app-lob/src/app/services/floating-panes.service.ts',
                '/projects/app-lob/src/app/grid-finjs-dock-manager/dock-slot.component.ts',
                '/projects/app-lob/src/_app-layout.scss', '/projects/app-lob/src/_variables.scss'
            ],
            appConfig: { ...BaseAppConfig,
                additionalAdjustments: [dockManagerImport, defineCustomElements]
            }
        }));

        return configs;
    }
}
