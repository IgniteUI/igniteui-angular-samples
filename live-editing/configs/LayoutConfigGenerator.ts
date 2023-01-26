import {IgxButtonGroupModule,
IgxButtonModule,
IgxLayoutModule,
IgxRippleModule} from '@infragistics/igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class LayoutConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(
            new Config({
                component: 'LayoutAlignItemsComponent',
                appModuleConfig: new AppModuleConfig({
                    imports: [
                        'IgxLayoutModule',
                        'LayoutAlignItemsComponent',
                        'IgxButtonGroupModule',
                        'IgxButtonModule',
                        'IgxRippleModule'
                    ],
                    ngDeclarations: ['LayoutAlignItemsComponent'],
                    ngImports: [
                        'IgxLayoutModule',
                        'IgxButtonGroupModule',
                        'IgxButtonModule',
                        'IgxRippleModule'
                    ]
                }),
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: 'LayoutContentSpaceComponent',
                appModuleConfig: new AppModuleConfig({
                    imports: [
                        'IgxLayoutModule',
                        'LayoutContentSpaceComponent',
                        'IgxButtonGroupModule',
                        'IgxButtonModule',
                        'IgxRippleModule'
                    ],
                    ngDeclarations: ['LayoutContentSpaceComponent'],
                    ngImports: [
                        'IgxLayoutModule',
                        'IgxButtonGroupModule',
                        'IgxButtonModule',
                        'IgxRippleModule'
                    ]
                }),
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: 'LayoutCustomOrderComponent',
                appModuleConfig: new AppModuleConfig({
                    imports: ['IgxLayoutModule', 'LayoutCustomOrderComponent'],
                    ngDeclarations: ['LayoutCustomOrderComponent'],
                    ngImports: ['IgxLayoutModule']
                }),
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: 'LayoutDirectionColumnComponent',
                appModuleConfig: new AppModuleConfig({
                    imports: [
                        'IgxLayoutModule',
                        'LayoutDirectionColumnComponent',
                        'IgxButtonGroupModule',
                        'IgxButtonModule',
                        'IgxRippleModule'
                    ],
                    ngDeclarations: ['LayoutDirectionColumnComponent'],
                    ngImports: [
                        'IgxLayoutModule',
                        'IgxButtonGroupModule',
                        'IgxButtonModule',
                        'IgxRippleModule'
                    ]
                }),
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: 'LayoutDirectionRowComponent',
                appModuleConfig: new AppModuleConfig({
                    imports: [
                        'IgxLayoutModule',
                        'LayoutDirectionRowComponent',
                        'IgxButtonGroupModule',
                        'IgxButtonModule',
                        'IgxRippleModule'
                    ],
                    ngDeclarations: ['LayoutDirectionRowComponent'],
                    ngImports: [
                        'IgxLayoutModule',
                        'IgxButtonGroupModule',
                        'IgxButtonModule',
                        'IgxRippleModule'
                    ]
                }),
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: 'LayoutJustifyContentComponent',
                appModuleConfig: new AppModuleConfig({
                    imports: [
                        'IgxLayoutModule',
                        'LayoutJustifyContentComponent',
                        'IgxButtonGroupModule',
                        'IgxButtonModule',
                        'IgxRippleModule'
                    ],
                    ngDeclarations: ['LayoutJustifyContentComponent'],
                    ngImports: [
                        'IgxLayoutModule',
                        'IgxButtonGroupModule',
                        'IgxButtonModule',
                        'IgxRippleModule'
                    ]
                }),
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: 'LayoutSampleComponent',
                appModuleConfig: new AppModuleConfig({
                    imports: ['IgxLayoutModule', 'LayoutSampleComponent'],
                    ngDeclarations: ['LayoutSampleComponent'],
                    ngImports: ['IgxLayoutModule']
                }),
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: 'LayoutWrapComponent',
                appModuleConfig: new AppModuleConfig({
                    imports: ['IgxLayoutModule', 'LayoutWrapComponent'],
                    ngDeclarations: ['LayoutWrapComponent'],
                    ngImports: ['IgxLayoutModule']
                }),
                shortenComponentPathBy: "/layouts/"
            })
        );

        return configs;
    }
}
