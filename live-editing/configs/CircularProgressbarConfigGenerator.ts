import {IgxButtonModule,
IgxIconModule,
IgxProgressBarModule,
IgxRippleModule} from '@infragistics/igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class CircularProgressbarConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'CircularProgressbarComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxProgressBarModule', 'CircularProgressbarComponent'],
                ngDeclarations: ['CircularProgressbarComponent'],
                ngImports: ['IgxProgressBarModule']
            }),
            shortenComponentPathBy: "/data-display/"
        }));

        configs.push(new Config({
            component: 'CircularIndeterminateProgressbarComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxProgressBarModule', 'CircularIndeterminateProgressbarComponent'],
                ngDeclarations: ['CircularIndeterminateProgressbarComponent'],
                ngImports: ['IgxProgressBarModule']
            }),
            shortenComponentPathBy: "/data-display/circular-progressbar/"
        }));

        configs.push(new Config({
            component: 'CircularDynamicSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxProgressBarModule',
                    'IgxRippleModule',
                    'CircularDynamicSampleComponent'],
                ngDeclarations: ['CircularDynamicSampleComponent'],
                ngImports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxProgressBarModule',
                    'IgxRippleModule']
            }),
            shortenComponentPathBy: "/data-display/"
        }));

        configs.push(new Config({
            component: 'CircularStylingSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxProgressBarModule', 'CircularStylingSampleComponent'],
                ngDeclarations: ['CircularStylingSampleComponent'],
                ngImports: ['IgxProgressBarModule']
            }),
            shortenComponentPathBy: "/data-display/circular-progressbar/"
        }));

        return configs;
    }
}
