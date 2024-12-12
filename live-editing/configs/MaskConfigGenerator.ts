import {IgxIconModule,
IgxInputGroupModule,
IgxMaskModule,
IgxSnackbarModule,
IgxSwitchModule,
IgxTextSelectionModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class MaskConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        DisplayFormatPipe: '../../src/app/data-display/mask/mask-sample-4/mask-sample-4.component',
        InputFormatPipe: '../../src/app/data-display/mask/mask-sample-4/mask-sample-4.component'
};
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // mask sample 1
        configs.push(new Config({
            component: 'MaskSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/mask/"
        }));

        // mask sample 2
        configs.push(new Config({
            component: 'MaskSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/mask/"
        }));

        // mask sample 3
        configs.push(new Config({
            component: 'MaskSample3Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/mask/"
        }));

        // mask sample 4
        configs.push(new Config({
            component: 'MaskSample4Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/mask/"
        }));

        // mask sample 5
        configs.push(new Config({
            component: 'MaskSample5Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/mask/"
        }));

        return configs;
    }
}
