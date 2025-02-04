import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class DockManagerConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        const dockManagerImport = "import { defineCustomElements } from 'igniteui-dockmanager/loader';";
        const defineCustomElements = "defineCustomElements();";

        configs.push(new Config({
            component: 'DockManagerComponent',
            additionalDependencies: ["igniteui-dockmanager"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/dock-manager/"
        }));

        return configs;
    }
}
