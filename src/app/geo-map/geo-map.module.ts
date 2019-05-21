import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxScatterSeriesDynamicModule} from "igniteui-angular-charts/ES5/igx-scatter-series-dynamic-module";
import { IgxGeographicMapModule } from "igniteui-angular-maps/ES5/igx-geographic-map-module";
import { IgxGeographicSymbolSeriesModule} from "igniteui-angular-maps/ES5/igx-geographic-symbol-series-module";
import { GeoMapRoutingModule } from "./geo-map-routing.module";
import { MapTypeScatterSymbolSeriesComponent
} from "./map-type-scatter-symbol-series/map-type-scatter-symbol-series.component";

@NgModule({
  declarations: [MapTypeScatterSymbolSeriesComponent],
  imports: [
    CommonModule,
    FormsModule,
    IgxGeographicMapModule,
    IgxGeographicSymbolSeriesModule,
    GeoMapRoutingModule,
    IgxScatterSeriesDynamicModule
  ]
})
export class GeoMapModule { }
