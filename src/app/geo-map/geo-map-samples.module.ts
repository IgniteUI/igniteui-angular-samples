// tslint:disable:object-literal-sort-keys
// tslint:disable:max-line-length

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IgxButtonModule, IgxSliderModule } from "igniteui-angular";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import { IgxScatterSeriesDynamicModule} from "igniteui-angular-charts/ES5/igx-scatter-series-dynamic-module";
import { IgxGeographicMapModule } from "igniteui-angular-maps/ES5/igx-geographic-map-module";
import { IgxGeographicSymbolSeriesModule} from "igniteui-angular-maps/ES5/igx-geographic-symbol-series-module";

import { MapBindingDataCsvComponent } from "./map-binding-data-csv/map-binding-data-csv.component";
import { MapBindingDataJsonPointsComponent } from "./map-binding-data-json-points/map-binding-data-json-points.component";
import { MapBindingDataModelComponent } from "./map-binding-data-model/map-binding-data-model.component";
import { MapBindingMultipleShapesComponent } from "./map-binding-multiple-shapes/map-binding-multiple-shapes.component";
import { MapBindingMultipleSourcesComponent } from "./map-binding-multiple-sources/map-binding-multiple-sources.component";
import { MapCustomTooltipsComponent } from "./map-custom-tooltips/map-custom-tooltips.component";
import { MapOverviewComponent } from "./map-overview/map-overview.component";
import { MapTypeScatterAreaSeriesComponent } from "./map-type-scatter-area-series/map-type-scatter-area-series.component";
import { MapTypeScatterContourSeriesComponent } from "./map-type-scatter-contour-series/map-type-scatter-contour-series.component";
import { MapTypeScatterDensitySeriesComponent } from "./map-type-scatter-density-series/map-type-scatter-density-series.component";
import { MapTypeScatterSymbolSeriesComponent } from "./map-type-scatter-symbol-series/map-type-scatter-symbol-series.component";
import { MapTypeShapePolygonSeriesComponent } from "./map-type-shape-polygon-series/map-type-shape-polygon-series.component";
import { MapTypeShapePolylineSeriesComponent } from "./map-type-shape-polyline-series/map-type-shape-polyline-series.component";

@NgModule({
    declarations: [
        MapBindingDataCsvComponent,
        MapBindingDataJsonPointsComponent,
        MapBindingDataModelComponent,
        MapBindingMultipleShapesComponent,
        MapBindingMultipleSourcesComponent,
        MapCustomTooltipsComponent,
        MapOverviewComponent,
        MapTypeScatterAreaSeriesComponent,
        MapTypeScatterContourSeriesComponent,
        MapTypeScatterDensitySeriesComponent,
        MapTypeScatterSymbolSeriesComponent,
        MapTypeShapePolygonSeriesComponent,
        MapTypeShapePolylineSeriesComponent],
    imports: [
        CommonModule,
        FormsModule,
        IgxButtonModule,
        IgxSliderModule,
        IgxLegendModule,
        IgxGeographicMapModule,
        IgxGeographicSymbolSeriesModule,
        IgxScatterSeriesDynamicModule
    ]
})
export class GeoMapSamplesModule { }
