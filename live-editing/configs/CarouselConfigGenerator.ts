/* tslint:disable:object-literal-sort-keys */
import { RouterModule } from "@angular/router";
import { IgxButtonModule,
         IgxCardModule,
         IgxCarouselModule,
         IgxIconModule, IgxInputGroupModule, IgxListModule, IgxSelectModule, IgxSliderModule } from "igniteui-angular";
// tslint:disable-next-line: max-line-length
import { CarouselAnimationsSampleComponent } from "../../src/app/layouts/carousel/carousel-animations-sample/carousel-animations-sample.component";
// tslint:disable-next-line: max-line-length
import { CarouselBaseSampleComponent } from "../../src/app/layouts/carousel/carousel-base-sample/carousel-base-sample.component";
// tslint:disable-next-line: max-line-length
import { CarouselDetailsViewComponent } from "../../src/app/layouts/carousel/carousel-details/carousel-details.component";
// tslint:disable-next-line: max-line-length
import { CarouselNoNavigationSampleComponent } from "../../src/app/layouts/carousel/carousel-no-navigation-sample/carousel-no-navigation-sample.component";
import { CarouselSample1Component } from "../../src/app/layouts/carousel/carousel-sample-1/carousel-sample-1.component";
import { CarouselComponent } from "../../src/app/layouts/carousel/carousel.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class CarouselConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: CarouselComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCarouselModule, IgxSliderModule, CarouselComponent],
                ngDeclarations: [CarouselComponent],
                ngImports: [IgxCarouselModule, IgxSliderModule]
            }),
            shortenComponentPathBy: "/layouts/"
        }));

        configs.push(new Config({
            component: CarouselSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCarouselModule, IgxSliderModule, CarouselSample1Component],
                ngDeclarations: [CarouselSample1Component],
                ngImports: [IgxCarouselModule, IgxSliderModule]
            }),
            shortenComponentPathBy: "/layouts/carousel/"
        }));

        configs.push(new Config({
            component: CarouselNoNavigationSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [ IgxCarouselModule,
                    IgxListModule, CarouselNoNavigationSampleComponent],
                ngDeclarations: [CarouselNoNavigationSampleComponent],
                ngImports: [IgxCarouselModule, IgxListModule]
            }),
            shortenComponentPathBy: "/layouts/carousel/"
        }));

        configs.push(new Config({
            component: CarouselAnimationsSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [ IgxCarouselModule,
                     CarouselAnimationsSampleComponent, IgxIconModule, IgxSelectModule, IgxButtonModule, IgxCardModule],
                ngDeclarations: [CarouselAnimationsSampleComponent],
                ngImports: [IgxCarouselModule, IgxIconModule, IgxSelectModule, IgxButtonModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/layouts/carousel/"
        }));

        const routingConfig = new Config({
            component: CarouselBaseSampleComponent,
            additionalFiles: [
            "/src/app/layouts/carousel/carousel-details/carousel-details.component.ts",
            "/src/app/layouts/carousel/carousel-details/carousel-details.component.scss",
            "/src/app/layouts/carousel/carousel-details/carousel-details.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: [ IgxCarouselModule, CarouselDetailsViewComponent,
                    CarouselBaseSampleComponent, RouterModule, IgxButtonModule, IgxInputGroupModule, IgxIconModule],
                ngDeclarations: [CarouselBaseSampleComponent, CarouselDetailsViewComponent],
                ngImports: [IgxCarouselModule, IgxButtonModule, IgxInputGroupModule, IgxIconModule,
                    `
                    RouterModule.forRoot([
                        { path: 'layouts/details', component: CarouselDetailsViewComponent },
                        { path: '**', component: CarouselBaseSampleComponent }
                    ])`
                ]
            }),
            shortenComponentPathBy: ""
        });
        routingConfig.usesRouting = true;
        configs.push(routingConfig);

        return configs;
    }
}
