/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
    Router,
    RouterModule
} from '@angular/router';
import {
    IgxActionStripModule,
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCheckboxModule,
    IgxChipsModule,
    IgxComboModule,
    IgxCsvExporterService,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxDividerModule,
    IgxDragDropModule,
    IgxExcelExporterService,
    IgxExpansionPanelModule,
    IgxFocusModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxListModule,
    IgxOverlayService,
    IgxProgressBarModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSelectModule,
    IgxSnackbarModule,
    IgxSwitchModule,
    IgxTabsModule,
    IgxToastModule,
    IgxTooltipModule,
    IgxToggleModule
} from 'igniteui-angular';
import {IgxSparklineCoreModule,
    IgxSparklineModule} from 'igniteui-angular-charts';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';
export class CRMGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        IgxPreventDocumentScrollModule: '../../src/app/directives/prevent-scroll.directive',
        ContextmenuComponent: '../../src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component',
        RemoteValuesService: '../../src/app/grid/grid-excel-style-filtering-load-on-demand/remoteValues.service',
        PlanetComponent: '../../src/app/grid/grid-row-drag/planet/planet.component',
        LocalService: '../../src/app/grid/grid-sample-2/grid-sample-2.component',
        RemoteService: '../../src/app/services/remote.service',
        RemoteFilteringService: '../../src/app/services/remoteFiltering.service',
        RemotePagingService: '../../src/app/services/remotePaging.service',
        RemoteServiceVirt: '../../src/app/services/remoteVirtualization.service',
        FinancialDataService: '../../src/app/services/financial.service',
        CRUDService: '../../src/app/services/crud.service'
    };
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'GridComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/projects/app-lob/src/app/data/athletesData.ts',
                '/projects/app-lob/src/_app-layout.scss', '/projects/app-lob/src/_variables.scss'],
            additionalDependencies: ['igniteui-angular-charts', 'igniteui-angular-core'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'HttpClientModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule',
                    'IgxGridModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule',
                    'IgxRippleModule', 'IgxSwitchModule', 'GridComponent',
                    'IgxSparklineCoreModule', 'IgxSparklineModule'],
                ngDeclarations: ['GridComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule', 'IgxGridModule',
                    'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule', 'IgxRippleModule',
                    'IgxSwitchModule', 'HttpClientModule', 'IgxSparklineCoreModule', 'IgxSparklineModule']
            })
        }));

        return configs;
    }
}
