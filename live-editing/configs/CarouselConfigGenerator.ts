/* tslint:disable:object-literal-sort-keys */
import { Direction, IgxCarouselComponent, IgxCarouselModule,
    IgxLinearProgressBarComponent, IgxProgressBarModule, IgxSliderModule } from "igniteui-angular";
import { CarouselSample1Component } from "../../src/app/carousel/carousel-sample-1/carousel-sample-1.component";
import { CarouselSample2Component } from "../../src/app/carousel/carousel-sample-2/carousel-sample-2.component";
import { CarouselSample3Component } from "../../src/app/carousel/carousel-sample-3/carousel-sample-3.component";
import { CarouselComponent } from "../../src/app/carousel/carousel.component";
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
            })
        }));

        configs.push(new Config({
            component: CarouselSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCarouselModule, IgxSliderModule, CarouselSample1Component],
                ngDeclarations: [CarouselSample1Component],
                ngImports: [IgxCarouselModule, IgxSliderModule]
            }),
            shortenComponentPathBy: "/carousel/"
        }));

        configs.push(new Config({
            component: CarouselSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: ["Direction", IgxCarouselComponent, IgxCarouselModule,
                    IgxSliderModule, CarouselSample2Component],
                ngDeclarations: [CarouselSample2Component],
                ngImports: [IgxCarouselModule, IgxSliderModule]
            })
        }));

        configs.push(new Config({
            component: CarouselSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: ["Direction", IgxCarouselComponent, IgxCarouselModule,
                    IgxLinearProgressBarComponent, IgxProgressBarModule,
                    IgxSliderModule, CarouselSample3Component],
                ngDeclarations: [CarouselSample3Component],
                ngImports: [IgxCarouselModule, IgxProgressBarModule, IgxSliderModule]
            })
        }));

        return configs;
    }
}

//    {
//      componentPath: "/carousel/carousel-sample-4/",
//      componentRoutePath: "carousel-sample-4",
//      additionalFiles: ["/carousel/carousel-details/carousel-details.component.ts",
//          "/carousel/carousel-details/carousel-details.component.html", "/carousel/mock-slides.ts"],
//      appModuleConfig: {
//        imports: [
//          { import: "Direction, IgxButtonModule, IgxCarouselComponent, IgxCarouselModule,
//              IgxLinearProgressBarComponent, IgxProgressBarModule,
//              IgxRippleModule, IgxSliderModule", from: "igniteui-angular" },
//          { import: "CarouselDetailsViewComponent", from: "./carousel/carousel-details/carousel-details.component"},
//          { import: "Routes, Router, RouterModule", from: "@angular/router"},
//          { import: "CarouselSample4Component", from: "./carousel/carousel-sample-4/carousel-sample-4.component" }],
//        ngDeclarations: "CarouselDetailsViewComponent, CarouselSample4Component",
//        ngImports:
//          `RouterModule.forRoot(Routes = [\{component: CarouselDetailsViewComponent, path: 'details/:index'}]),
//        IgxButtonModule, IgxCarouselModule, IgxProgressBarModule, IgxRippleModule, IgxSliderModule`
//      },
//      shortenComponentPathBy: "/carousel/"
//    },
