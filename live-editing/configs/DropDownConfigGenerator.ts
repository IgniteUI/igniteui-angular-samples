/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClientModule } from '@angular/common/http';
import {
    IgxButtonModule,
    IgxChipsModule,
    IgxDropDownModule,
    IgxDividerModule,
    IgxForOfModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxNavbarModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxPrefixModule,
    IgxSuffixModule,
    IgxToastModule,
    IgxToggleModule,
    IgxTreeModule,
    IgxTreeGridModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';;
export class DropDownConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        RemoteNWindService: '../../src/app/services/remoteNwind.service',
        MultiLevelDirective: '../../src/app/data-entries/dropdown/dropdown-multi-level-menu/multi-level.directive'
    };
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'DropDownSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/data-entries/dropdown/'
        }));

        configs.push(new Config({
            component: 'DropDownSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/data-entries/dropdown/'
        }));

        configs.push(new Config({
            component: 'DropDownSample3Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/data-entries/dropdown/'
        }));

        configs.push(new Config({
            component: 'DropDownSample5Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/data-entries/dropdown/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/data/heroData.ts', '/src/app/data-entries/dropdown/dropdown-styling/layout.scss'],
            component: 'DropDownStylingComponent',
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'DropDownSample4Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/data-entries/dropdown/'
        }));

        configs.push(new Config({
            component: 'DropdownMenuComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/data-entries/dropdown/'
        }));

        configs.push(new Config({
            component: 'DropdownMultiLevelMenuComponent',
            additionalFiles: ['/src/app/data-entries/dropdown/dropdown-multi-level-menu/data.ts',
                '/src/app/data-entries/dropdown/dropdown-multi-level-menu/multi-level.directive.ts',
                '/src/app/data-entries/dropdown/dropdown-multi-level-menu/multi-level.service.ts'],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/data-entries/dropdown/'
        }));

        configs.push(new Config({
            component: 'DropDownVirtualComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/data-entries/dropdown/'
        }));

        configs.push(new Config({
            component: 'DropDownRemoteComponent',
            additionalFiles: ['/src/app/services/remoteNwind.service.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/data-entries/dropdown/dropdown-tree-hierarchical-selection/countries.ts'],
            component: 'DropdownTreeHierarchicalSelectionComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/data-entries/dropdown/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/data-entries/dropdown/dropdown-tree-grid-hierarchical-selection/nested-employee-data.ts'],
            component: 'DropdownTreeGridHierarchicalSelectionComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/data-entries/dropdown/'
        }));


        return configs;
    }
}
