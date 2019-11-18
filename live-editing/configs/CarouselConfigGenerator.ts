/* tslint:disable:object-literal-sort-keys */
import { IgxCarouselComponent, IgxCarouselModule,
    IgxLinearProgressBarComponent, IgxProgressBarModule, IgxSliderModule } from "igniteui-angular";
// tslint:disable-next-line: max-line-length
import { CarouselAnimationsSampleComponent } from "../../src/app/layouts/carousel/carousel-animations-sample/carousel-animations-sample.component";
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
                imports: ["Direction", IgxCarouselComponent, IgxCarouselModule,
                    IgxSliderModule, CarouselNoNavigationSampleComponent],
                ngDeclarations: [CarouselNoNavigationSampleComponent],
                ngImports: [IgxCarouselModule, IgxSliderModule]
            }),
            shortenComponentPathBy: "/layouts/carousel/"
        }));

        configs.push(new Config({
            component: CarouselAnimationsSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: ["Direction", IgxCarouselComponent, IgxCarouselModule,
                    IgxLinearProgressBarComponent, IgxProgressBarModule,
                    IgxSliderModule, CarouselAnimationsSampleComponent],
                ngDeclarations: [CarouselAnimationsSampleComponent],
                ngImports: [IgxCarouselModule, IgxProgressBarModule, IgxSliderModule]
            }),
            shortenComponentPathBy: "/layouts/carousel/"
        }));

        return configs;
    }
}

//    {
//      componentPath: "/carousel/carousel-base-sample/",
//      componentRoutePath: "carousel-base-sample",
//      additionalFiles: ["/carousel/carousel-details/carousel-details.component.ts",
//          "/carousel/carousel-details/carousel-details.component.html", "/carousel/mock-slides.ts"],
//      appModuleConfig: {
//        imports: [
//          { import: "Direction, IgxButtonModule, IgxCarouselComponent, IgxCarouselModule,
//              IgxLinearProgressBarComponent, IgxProgressBarModule,
//              IgxRippleModule, IgxSliderModule", from: "igniteui-angular" },
//          { import: "CarouselDetailsViewComponent", from: "./carousel/carousel-details/carousel-details.component"},
//          { import: "Routes, Router, RouterModule", from: "@angular/router"},
//          { import: "CarouselBaseSampleComponent", from: "./carousel/carousel-base-sample/carousel-base-sample.component" }],
//        ngDeclarations: "CarouselDetailsViewComponent, CarouselBaseSampleComponent",
//        ngImports:
//          `RouterModule.forRoot(Routes = [\{component: CarouselDetailsViewComponent, path: 'details/:index'}]),
//        IgxButtonModule, IgxCarouselModule, IgxProgressBarModule, IgxRippleModule, IgxSliderModule`
//      },
//      shortenComponentPathBy: "/carousel/"
//    },
