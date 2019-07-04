/* tslint:disable */

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IgxButtonModule, IgxSliderModule } from "igniteui-angular";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import { IgxGeographicMapModule } from "igniteui-angular-maps/ES5/igx-geographic-map-module";
import { IgxGeographicHighDensityScatterSeriesModule } from "igniteui-angular-maps/ES5/igx-geographic-high-density-scatter-series-module";
import { IgxGeographicPolylineSeriesDynamicModule} from "igniteui-angular-maps/ES5/igx-geographic-polyline-series-dynamic-module";
import { IgxGeographicPolylineSeriesModule} from "igniteui-angular-maps/ES5/igx-geographic-polyline-series-module";
import { IgxGeographicSymbolSeriesModule} from "igniteui-angular-maps/ES5/igx-geographic-symbol-series-module";
import { IgxGeographicShapeSeriesModule} from "igniteui-angular-maps/ES5/igx-geographic-shape-series-module";
import { IgxScatterSeriesDynamicModule} from "igniteui-angular-charts/ES5/igx-scatter-series-dynamic-module";

import { MapBindingDataCsvComponent } from "./geo-map-binding-data-csv/map-binding-data-csv.component";
import { MapBindingDataJsonPointsComponent } from "./geo-map-binding-data-json-points/map-binding-data-json-points.component";
import { MapBindingDataModelComponent } from "./geo-map-binding-data-model/map-binding-data-model.component";
import { MapBindingMultipleShapesComponent } from "./geo-map-binding-multiple-shapes/map-binding-multiple-shapes.component";
import { MapBindingMultipleSourcesComponent } from "./geo-map-binding-multiple-sources/map-binding-multiple-sources.component";
import { MapBindingShapefilePointsComponent } from "./geo-map-binding-shp-points/map-binding-shp-points.component";
import { MapBindingShapefilePolygonsComponent } from "./geo-map-binding-shp-polygons/map-binding-shp-polygons.component";
import { MapBindingShapefilePolylinesComponent } from "./geo-map-binding-shp-polylines/map-binding-shp-polylines.component";
import { MapCustomTooltipsComponent } from "./geo-map-custom-tooltips/map-custom-tooltips.component";
import { MapOverviewComponent } from "./geo-map-overview/map-overview.component";
import { MapTypeScatterAreaSeriesComponent } from "./geo-map-type-scatter-area-series/map-type-scatter-area-series.component";
import { MapTypeScatterBubbleSeriesComponent } from "./geo-map-type-scatter-bubble-series/map-type-scatter-bubble-series.component";
import { MapTypeScatterContourSeriesComponent } from "./geo-map-type-scatter-contour-series/map-type-scatter-contour-series.component";
import { MapTypeScatterDensitySeriesComponent } from "./geo-map-type-scatter-density-series/map-type-scatter-density-series.component";
import { MapTypeScatterSymbolSeriesComponent } from "./geo-map-type-scatter-symbol-series/map-type-scatter-symbol-series.component";
import { MapTypeShapePolygonSeriesComponent } from "./geo-map-type-shape-polygon-series/map-type-shape-polygon-series.component";
import { MapTypeShapePolylineSeriesComponent } from "./geo-map-type-shape-polyline-series/map-type-shape-polyline-series.component";
import { MapDisplayImageryBingTiles } from "./MapDisplayImageryBingTiles/component";
import { MapDisplayImageryEsriTiles } from "./MapDisplayImageryEsriTiles/component";
import { MapDisplayImageryOSM } from "./MapDisplayImageryOSM/component";

import { GeoMapRoutingModule } from "./geo-map-routing.module";
import { MapDisplayImageryHeatTilesComponent } from './geo-map-display-imagery-heat-tiles/map-display-imagery-heat-tiles.component';

@NgModule({
    declarations: [
        MapBindingDataCsvComponent,
        MapBindingDataJsonPointsComponent,
        MapBindingDataModelComponent,
        MapBindingMultipleShapesComponent,
        MapBindingMultipleSourcesComponent,
        MapBindingShapefilePolygonsComponent,
        MapBindingShapefilePolylinesComponent,
        MapBindingShapefilePointsComponent,
        MapCustomTooltipsComponent,
        MapDisplayImageryBingTiles,
        MapDisplayImageryEsriTiles,
        MapDisplayImageryOSM,
        MapOverviewComponent,
        MapTypeScatterAreaSeriesComponent,
        MapTypeScatterBubbleSeriesComponent,
        MapTypeScatterContourSeriesComponent,
        MapTypeScatterDensitySeriesComponent,
        MapTypeScatterSymbolSeriesComponent,
        MapTypeShapePolygonSeriesComponent,
        MapTypeShapePolylineSeriesComponent,
        MapDisplayImageryHeatTilesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        GeoMapRoutingModule,
        IgxButtonModule,
        IgxSliderModule,
        IgxLegendModule,
        IgxGeographicMapModule,
        IgxGeographicSymbolSeriesModule,
        IgxDataChartInteractivityModule,
        IgxScatterSeriesDynamicModule,
        IgxGeographicHighDensityScatterSeriesModule,
        IgxGeographicPolylineSeriesModule,
        IgxGeographicPolylineSeriesDynamicModule,
        IgxGeographicShapeSeriesModule
    ]
})
export class GeoMapModule { }



