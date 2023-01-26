import {IgxAvatarModule,
IgxFilterModule,
IgxForOfModule,
IgxIconModule,
IgxInputGroupModule,
IgxListModule,
IgxRippleModule} from '@infragistics/igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class ForConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'IgxForComponent',
            additionalFiles: ["/src/app/data-display/igxFor/names.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxAvatarModule', 'IgxFilterModule', 'IgxListModule', 'IgxIconModule',
                    'IgxRippleModule', 'IgxForOfModule', 'IgxForComponent', 'IgxInputGroupModule'],
                ngDeclarations: ['IgxForComponent'],
                ngImports: ['IgxAvatarModule', 'IgxFilterModule', 'IgxListModule',
                            'IgxIconModule', 'IgxRippleModule', 'IgxForOfModule', 'IgxInputGroupModule']
            }),
            shortenComponentPathBy: "/data-display/"
        }));

        configs.push(new Config({
            component: 'IgxForHorizontalComponent',
            additionalFiles: ["/src/app/data-display/igxFor/names.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxAvatarModule', 'IgxFilterModule', 'IgxListModule', 'IgxIconModule',
                          'IgxForOfModule', 'IgxForHorizontalComponent', 'IgxInputGroupModule'],
                ngDeclarations: ['IgxForHorizontalComponent'],
                ngImports: ['IgxAvatarModule', 'IgxFilterModule', 'IgxListModule',
                            'IgxIconModule', 'IgxForOfModule', 'IgxInputGroupModule']
            }),
            shortenComponentPathBy: "/data-display/"
        }));

        return configs;
    }
}
