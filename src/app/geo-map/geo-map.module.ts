// tslint:disable:object-literal-sort-keys
// tslint:disable:max-line-length

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IgxScatterSeriesDynamicModule} from "igniteui-angular-charts/ES5/igx-scatter-series-dynamic-module";
import { IgxGeographicMapModule } from "igniteui-angular-maps/ES5/igx-geographic-map-module";
import { IgxGeographicSymbolSeriesModule} from "igniteui-angular-maps/ES5/igx-geographic-symbol-series-module";
import { GeoMapRoutingModule } from "./geo-map-routing.module";
import { GeoMapSamplesModule } from "./geo-map-samples.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IgxGeographicMapModule,
    IgxGeographicSymbolSeriesModule,
    IgxScatterSeriesDynamicModule,
    GeoMapRoutingModule,
    GeoMapSamplesModule
  ]
})
export class GeoMapModule { }
