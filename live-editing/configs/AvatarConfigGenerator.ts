import {IgxAvatarModule} from 'igniteui-angular';
import {AppModuleConfig} from './core/AppModuleConfig';
import {Config} from './core/Config';
import {IConfigGenerator} from './core/IConfigGenerator';
export class AvatarConfigGenerator implements IConfigGenerator {
    

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'AvatarSample3Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxAvatarModule', 'AvatarSample3Component'],
                ngDeclarations: ['AvatarSample3Component'],
                ngImports: ['IgxAvatarModule']
            }),
            shortenComponentPathBy: "/layouts/avatar/"
        }));

        configs.push(new Config({
            component: 'AvatarStylingSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxAvatarModule', 'AvatarStylingSampleComponent'],
                ngDeclarations: ['AvatarStylingSampleComponent'],
                ngImports: ['IgxAvatarModule']
            }),
            shortenComponentPathBy: "/layouts/avatar/"
        }));

        return configs;
    }
}
