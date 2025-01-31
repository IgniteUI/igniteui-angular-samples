import { HttpClientModule } from '@angular/common/http';
import {IgxIconModule,
IgxAvatarModule,
IgxInputGroupModule,
IgxButtonModule,
IgxCardModule,
IgxSelectModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class IconConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        CategoriesFilterPipe: '../../src/app/data-display/icon/material-icons-extended/material-icons-extended.component',
        FilterByName: '../../src/app/data-display/icon/material-icons-extended/material-icons-extended.component'
};
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // icon sample 1
        configs.push(new Config({
            component: 'IconSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/icon/"
        }));

        // SVG icon sample
        configs.push(new Config({
            component: 'SvgIconSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/icon/"
        }));

        // Icon Styling Sample
        configs.push(new Config({
            component: 'IconStylingSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/icon/"
        }));

        // Icon Service Sample
        configs.push(new Config({
            component: 'IconServiceSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/icon/"
        }));

        // Material Symbols Sample
        configs.push(new Config({
            component: 'MaterialSymbolsComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/material-symbols/"
        }));

        // Material icons extended sample
        configs.push(new Config({
            component: 'MaterialIconsExtendedComponent',
            appConfig: BaseAppConfig,
            additionalDependencies: ['file-saver', '@igniteui/material-icons-extended'],
            shortenComponentPathBy: "/data-display/icon/"
        }));

        return configs;
    }
}
