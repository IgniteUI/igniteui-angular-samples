import { IgxScatterSeriesDynamicModule} from "igniteui-angular-charts/ES5/igx-scatter-series-dynamic-module";
import { IgxGeographicMapModule } from "igniteui-angular-maps/ES5/igx-geographic-map-module";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps/ES5/igx-geographic-symbol-series-component";

import {
  MapTypeScatterSymbolSeriesComponent
} from "../../src/app/geo-map/map-type-scatter-symbol-series/map-type-scatter-symbol-series.component";

import { DependenciesType } from "../services/DependenciesType";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";


export class GeoMapConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGeographicMapModule,
                    IgxGeographicSymbolSeriesComponent,
                    IgxScatterSeriesDynamicModule,
                    MapTypeScatterSymbolSeriesComponent],
                ngDeclarations: [MapTypeScatterSymbolSeriesComponent],
                ngImports: [IgxGeographicMapModule]
            }),
            component: MapTypeScatterSymbolSeriesComponent,
            shortenComponentPathBy: "/geo-map/"
        }));

        return configs;
    }
}
