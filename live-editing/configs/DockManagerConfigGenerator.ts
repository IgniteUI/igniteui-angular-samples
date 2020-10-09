import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppModuleConfig} from './core/AppModuleConfig';
import {Config} from './core/Config';
import {IConfigGenerator} from './core/IConfigGenerator';
export class DockManagerConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        const dockManagerImport = "import { defineCustomElements } from 'igniteui-dockmanager/loader';";
        const defineCustomElements = "defineCustomElements();";

        configs.push(new Config({
            component: 'DockManagerComponent',
            additionalDependencies: ["igniteui-dockmanager"],
            appModuleConfig: new AppModuleConfig({
                imports: ['DockManagerComponent', 'CUSTOM_ELEMENTS_SCHEMA'],
                ngDeclarations: ['DockManagerComponent'],
                ngImports: [],
                schemas: ['CUSTOM_ELEMENTS_SCHEMA'],
                additionalAdjustments: [dockManagerImport, defineCustomElements]
            }),
            shortenComponentPathBy: "/layouts/dock-manager/"
        }));

        return configs;
    }
}
