import {IgxAvatarModule,
IgxBannerModule,
IgxButtonModule,
IgxCardModule,
IgxIconModule,
IgxInputGroupModule,
IgxNavbarModule,
IgxRippleModule,
IgxSwitchModule,
IgxToastModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class BannerConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'BannerAdvancedSampleComponent',
            additionalFiles: ["/src/app/notifications/banner/banner-samples.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxBannerModule',
                          'IgxNavbarModule',
                          'IgxCardModule',
                          'IgxIconModule',
                          'IgxToastModule',
                          'IgxButtonModule',
                          'IgxRippleModule',
                          'BannerAdvancedSampleComponent'],
                ngDeclarations: ['BannerAdvancedSampleComponent'],
                ngImports: ['IgxBannerModule',
                            'IgxCardModule',
                            'IgxIconModule',
                            'IgxNavbarModule',
                            'IgxToastModule',
                            'IgxButtonModule',
                            'IgxRippleModule']
            }),
            shortenComponentPathBy: "/notifications/banner/"
        }));

        configs.push(new Config({
            component: 'BannerSample1Component',
            additionalFiles: ["/src/app/notifications/banner/banner-samples.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxBannerModule',
                          'IgxNavbarModule',
                          'IgxCardModule',
                          'IgxIconModule',
                          'BannerSample1Component'],
                ngDeclarations: ['BannerSample1Component'],
                ngImports: ['IgxBannerModule',
                            'IgxCardModule',
                            'IgxIconModule',
                            'IgxNavbarModule']
            }),
            shortenComponentPathBy: "/notifications/banner/"
        }));

        configs.push(new Config({
            component: 'BannerSample2Component',
            additionalFiles: ["/src/app/notifications/banner/banner-samples.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxBannerModule', 'IgxNavbarModule', 'IgxCardModule', 'IgxToastModule', 'IgxButtonModule',
                    'IgxRippleModule', 'IgxIconModule', 'BannerSample2Component'],
                ngDeclarations: ['BannerSample2Component'],
                ngImports: ['IgxBannerModule', 'IgxCardModule', 'IgxNavbarModule', 'IgxToastModule', 'IgxButtonModule',
                    'IgxRippleModule', 'IgxIconModule']
            }),
            shortenComponentPathBy: "/notifications/banner/"
        }));

        configs.push(new Config({
            component: 'BannerSample3Component',
            additionalFiles: ["/src/app/notifications/banner/banner-samples.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxBannerModule', 'IgxCardModule', 'IgxToastModule', 'IgxNavbarModule', 'IgxButtonModule',
                    'IgxRippleModule', 'IgxIconModule', 'BannerSample3Component'],
                ngDeclarations: ['BannerSample3Component'],
                ngImports: ['IgxBannerModule', 'IgxCardModule', 'IgxToastModule',  'IgxNavbarModule', 'IgxButtonModule',
                    'IgxRippleModule', 'IgxIconModule']
            }),
            shortenComponentPathBy: "/notifications/banner/"
        }));

        configs.push(new Config({
            component: 'BannerStylingComponent',
            additionalFiles: ["/src/app/notifications/banner/banner-samples.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxBannerModule', 'IgxCardModule', 'IgxToastModule', 'IgxNavbarModule', 'IgxButtonModule',
                    'IgxRippleModule', 'IgxIconModule', 'BannerStylingComponent'],
                ngDeclarations: ['BannerStylingComponent'],
                ngImports: ['IgxBannerModule', 'IgxCardModule', 'IgxToastModule',  'IgxNavbarModule', 'IgxButtonModule',
                    'IgxRippleModule', 'IgxIconModule']
            }),
            shortenComponentPathBy: "/notifications/banner/"
        }));

        configs.push(new Config({
            component: 'BannerSample4Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxBannerModule', 'IgxToastModule', 'IgxAvatarModule', 'IgxButtonModule', 'IgxInputGroupModule',
                    'IgxNavbarModule', 'IgxRippleModule', 'IgxIconModule', 'BannerSample4Component', 'IgxSwitchModule'],
                ngDeclarations: ['BannerSample4Component'],
                ngImports: ['IgxBannerModule', 'IgxAvatarModule', 'IgxRippleModule', 'IgxIconModule', 'IgxInputGroupModule',
                    'IgxButtonModule', 'IgxNavbarModule', 'IgxSwitchModule']
            }),
            shortenComponentPathBy: "/notifications/banner/"
        }));

        return configs;
    }
}
