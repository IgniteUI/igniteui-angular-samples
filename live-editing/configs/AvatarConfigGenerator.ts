import { IgxAvatarModule } from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class AvatarConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'AvatarSample3Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/avatar/"
        }));

        configs.push(new Config({
            component: 'AvatarStylingSampleComponent',
            additionalFiles: ["/src/app/layouts/avatar/avatar-styling/layout.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxAvatarModule', 'AvatarStylingSampleComponent'],
                ngDeclarations: ['AvatarStylingSampleComponent'],
                ngImports: ['IgxAvatarModule']
            }),
            shortenComponentPathBy: "/layouts/avatar/"
        }));

        configs.push(new Config({
            component: 'AvatarCSSVariablesComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/avatar/"
        }));

        return configs;
    }
}
