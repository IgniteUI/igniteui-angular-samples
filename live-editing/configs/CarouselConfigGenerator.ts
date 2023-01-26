import {IgxButtonModule,
IgxCardModule,
IgxCarouselModule,
IgxIconModule,
IgxInputGroupModule,
IgxListModule,
IgxPrefixDirective,
IgxSelectModule,
IgxSliderModule} from '@infragistics/igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class CarouselConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'CarouselComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCarouselModule', 'IgxSliderModule', 'CarouselComponent'],
                ngDeclarations: ['CarouselComponent'],
                ngImports: ['IgxCarouselModule', 'IgxSliderModule']
            }),
            shortenComponentPathBy: "/layouts/"
        }));

        configs.push(new Config({
            component: 'CarouselNoNavigationSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxCarouselModule',
                    'IgxListModule',
                    'CarouselNoNavigationSampleComponent'
                ],
                ngDeclarations: ['CarouselNoNavigationSampleComponent'],
                ngImports: ['IgxCarouselModule', 'IgxListModule']
            }),
            shortenComponentPathBy: "/layouts/carousel/"
        }));

        configs.push(new Config({
            component: 'CarouselWithComponentsSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxCarouselModule',
                    'IgxListModule',
                    'IgxInputGroupModule',
                    'IgxIconModule',
                    'IgxButtonModule',
                    'CarouselWithComponentsSampleComponent'
                ],
                ngDeclarations: ['CarouselWithComponentsSampleComponent'],
                ngImports: [
                    'IgxCarouselModule',
                    'IgxListModule',
                    'IgxInputGroupModule',
                    'IgxIconModule',
                    'IgxButtonModule'
                ]
            }),
            shortenComponentPathBy: "/layouts/carousel/"
        }));

        configs.push(new Config({
            component: 'CarouselAnimationsSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCarouselModule',
                    'CarouselAnimationsSampleComponent', 'IgxIconModule', 'IgxSelectModule', 'IgxButtonModule', 'IgxCardModule'],
                ngDeclarations: ['CarouselAnimationsSampleComponent'],
                ngImports: ['IgxCarouselModule', 'IgxIconModule', 'IgxSelectModule', 'IgxButtonModule', 'IgxCardModule']
            }),
            shortenComponentPathBy: "/layouts/carousel/"
        }));

        return configs;
    }
}
