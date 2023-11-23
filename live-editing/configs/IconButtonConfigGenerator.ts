import {IgxButtonGroupModule,
    IgxButtonModule,
    IgxIconButtonDirective,
    IgxIconModule,
    IgxRippleModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class IconButtonConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // icon button overview
        configs.push(new Config({
            component: 'IconButtonOverviewComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxIconButtonDirective', 'IconButtonOverviewComponent'],
                ngDeclarations: ['IconButtonOverviewComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxIconButtonDirective']
            }),
            shortenComponentPathBy: "/data-entries/icon-button/"
        }));

        // flat icon button
        configs.push(new Config({
            component: 'FlatIconButtonComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxIconButtonDirective', 'FlatIconButtonComponent'],
                ngDeclarations: ['FlatIconButtonComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxIconButtonDirective']
            }),
            shortenComponentPathBy: "/data-entries/icon-button/"
        }));

        // contained icon button
        configs.push(new Config({
            component: 'ContainedIconButtonComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxIconButtonDirective', 'ContainedIconButtonComponent'],
                ngDeclarations: ['ContainedIconButtonComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxIconButtonDirective']
            }),
            shortenComponentPathBy: "/data-entries/icon-button/"
        }));

        // outlined icon button
        configs.push(new Config({
            component: 'OutlinedIconButtonComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxIconButtonDirective', 'OutlinedIconButtonComponent'],
                ngDeclarations: ['OutlinedIconButtonComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxIconButtonDirective']
            }),
            shortenComponentPathBy: "/data-entries/icon-button/"
        }));

        // disabled icon button
        configs.push(new Config({
            component: 'DisabledIconButtonComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxIconButtonDirective', 'DisabledIconButtonComponent'],
                ngDeclarations: ['DisabledIconButtonComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxIconButtonDirective']
            }),
            shortenComponentPathBy: "/data-entries/icon-button/"
        }));

        // SVG icon button
        configs.push(new Config({
            component: 'SVGIconButtonComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxIconButtonDirective', 'SVGIconButtonComponent'],
                ngDeclarations: ['SVGIconButtonComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxIconButtonDirective']
            }),
            shortenComponentPathBy: "/data-entries/icon-button/"
        }));

        // icon button styling
        configs.push(new Config({
            component: 'IconButtonStylingComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxIconButtonDirective', 'IconButtonStylingComponent'],
                ngDeclarations: ['IconButtonStylingComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxIconButtonDirective']
            }),
            shortenComponentPathBy: "/data-entries/icon-button/"
        }));

        // icon button size
        configs.push(new Config({
            component: 'IconButtonSizeComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxIconButtonDirective', 'IconButtonSizeComponent'],
                ngDeclarations: ['IconButtonSizeComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxIconButtonDirective']
            }),
            shortenComponentPathBy: "/data-entries/icon-button/"
        }));

        return configs;
    }
}
