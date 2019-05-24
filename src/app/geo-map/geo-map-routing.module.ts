// tslint:disable:object-literal-sort-keys
// tslint:disable:max-line-length

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

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

import { geoMapRoutesData } from "./geo-map-routes-data";
import { GeoMapSamplesModule } from "./geo-map-samples.module";

export const routes: Routes = [
    {
        component: MapTypeScatterSymbolSeriesComponent,
        data: geoMapRoutesData["map-type-scatter-symbol-series"],
        path: "map-type-scatter-symbol-series"
    },
    {
        component: MapBindingDataCsvComponent,
        data: geoMapRoutesData["map-binding-data-csv"],
        path: "map-binding-data-csv"
    },
    {
        component: MapBindingDataJsonPointsComponent,
        data: geoMapRoutesData["map-binding-data-json-points"],
        path: "map-binding-data-json-points"
    },
    {
        component: MapBindingDataModelComponent,
        data: geoMapRoutesData["map-binding-data-model"],
        path: "map-binding-data-model"
    },
    {
        component: MapBindingMultipleShapesComponent,
        data: geoMapRoutesData["map-binding-multiple-shapes"],
        path: "map-binding-multiple-shapes"
    },
    {
        component: MapBindingMultipleSourcesComponent,
        data: geoMapRoutesData["map-binding-multiple-sources"],
        path: "map-binding-multiple-sources"
    },
    {
        component: MapCustomTooltipsComponent,
        data: geoMapRoutesData["map-custom-tooltips"],
        path: "map-custom-tooltip"
    },
    {
        component: MapOverviewComponent,
        data: geoMapRoutesData["map-overview"],
        path: "map-overview"
    },
    {
        component: MapTypeScatterAreaSeriesComponent,
        data: geoMapRoutesData["map-type-scatter-area-series"],
        path: "map-type-scatter-area-series"
    },
    {
        component: MapTypeScatterContourSeriesComponent,
        data: geoMapRoutesData["map-type-scatter-contour-series"],
        path: "map-type-scatter-contour-series"
    },
    {
        component: MapTypeScatterDensitySeriesComponent,
        data: geoMapRoutesData["map-type-scatter-density-series"],
        path: "map-type-scatter-density-series"
    },
    {
        component: MapTypeShapePolygonSeriesComponent,
        data: geoMapRoutesData["map-type-shape-polygon-series"],
        path: "map-type-shape-polygon-series"
    },
    {
        component: MapTypeShapePolylineSeriesComponent,
        data: geoMapRoutesData["map-type-shape-polyline-series"],
        path: "map-type-shape-polyline-series"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        GeoMapSamplesModule,
        RouterModule.forChild(routes)
    ]
})
export class GeoMapRoutingModule { }
