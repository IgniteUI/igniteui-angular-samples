import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxCarouselModule, IgxSliderModule, IgxCarouselComponent, Direction, IgxLinearProgressBarComponent, IgxProgressBarModule } from "igniteui-angular/main";
import { CarouselComponent } from "../../src/app/carousel/carousel.component";
import { CarouselSample1Component } from "../../src/app/carousel/carousel-sample-1/carousel-sample-1.component";
import { CarouselSample2Component } from "../../src/app/carousel/carousel-sample-2/carousel-sample-2.component";
import { CarouselSample3Component } from "../../src/app/carousel/carousel-sample-3/carousel-sample-3.component";

export class CarouselConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        configs.push(new Config({
            component: CarouselComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCarouselModule, IgxSliderModule, CarouselComponent],
                ngDeclarations: [CarouselComponent],
                ngImports: [IgxCarouselModule, IgxSliderModule]
            }),
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
            }),
            shortenComponentPathBy: "/carousel/"
        }));

        configs.push(new Config({
            component: CarouselSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: ["Direction", IgxCarouselComponent, IgxCarouselModule,
                    IgxLinearProgressBarComponent, IgxProgressBarModule,
                    IgxSliderModule, CarouselSample3Component],
                ngDeclarations: [CarouselSample3Component],
                ngImports: [IgxCarouselModule, IgxProgressBarModule, IgxSliderModule]
            }),
            shortenComponentPathBy: "/carousel/"
        }));

        return configs;
    }
}

//    {
//      componentPath: "/carousel/carousel-sample-4/",
//      componentRoutePath: "carousel-sample-4",
//      additionalFiles: ["/carousel/carousel-details/carousel-details.component.ts", "/carousel/carousel-details/carousel-details.component.html",
//      "/carousel/mock-slides.ts"],
//      appModuleConfig: {
//        imports: [
//          { import: "Direction, IgxButtonModule, IgxCarouselComponent, IgxCarouselModule, IgxLinearProgressBarComponent, IgxProgressBarModule, IgxRippleModule, IgxSliderModule", from: "igniteui-angular/main" },
//          { import: "CarouselDetailsViewComponent", from: "./carousel/carousel-details/carousel-details.component"},
//          { import: "Routes, Router, RouterModule", from: "@angular/router"},
//          { import: "CarouselSample4Component", from: "./carousel/carousel-sample-4/carousel-sample-4.component" }],
//        ngDeclarations: "CarouselDetailsViewComponent, CarouselSample4Component",
//        ngImports: `RouterModule.forRoot(Routes = [\{component: CarouselDetailsViewComponent, path: 'details/:index'}]),
//        IgxButtonModule, IgxCarouselModule, IgxProgressBarModule, IgxRippleModule, IgxSliderModule`
//      },
//      shortenComponentPathBy: "/carousel/"
//    },
