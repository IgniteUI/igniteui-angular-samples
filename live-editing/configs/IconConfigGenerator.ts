import { HttpClientModule } from '@angular/common/http';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxAvatarModule } from 'igniteui-angular/avatar';
import { IgxInputGroupModule } from 'igniteui-angular/input-group';
import { IgxButtonModule } from 'igniteui-angular/directives';
import { IgxCardModule } from 'igniteui-angular/card';
import { IgxSelectModule } from 'igniteui-angular/select';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class IconConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        CategoriesFilterPipe: '../../src/app/data-display/icon/material-icons-extended/material-icons-extended.component',
        FilterByName: '../../src/app/data-display/icon/material-icons-extended/material-icons-extended.component'
};
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // icon overview
        configs.push(new Config({
            component: 'IconOverviewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/icon/"
        }));

        // icon size
        configs.push(new Config({
            component: 'IconSizeComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/icon/"
        }));

        // icon styling
        configs.push(new Config({
            component: 'IconStylingSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/icon/"
        }));

        // icon tailwind styling
        configs.push(new Config({
            component: 'IconTailwindStylingSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/icon/"
        }));

        // Icon Service Sample
        configs.push(new Config({
            component: 'IconServiceSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/icon/"
        }));

        // Material icons extended sample
        configs.push(new Config({
            component: 'MaterialIconsExtendedComponent',
            appConfig: BaseAppConfig,
            additionalDependencies: ['file-saver', '@igniteui/material-icons-extended', 'fuse.js'],
            shortenComponentPathBy: "/data-display/icon/"
        }));

        return configs;
    }
}
