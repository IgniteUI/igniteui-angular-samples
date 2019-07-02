/* tslint:disable:object-literal-sort-keys */
// tslint:disable:object-literal-shorthand
// tslint:disable:max-line-length
// tslint:disable:member-ordering
// tslint:disable:prefer-const
import { IgxGeographicMapModule } from "igniteui-angular-maps/ES5/igx-geographic-map-module";

import { WorldUtility } from "../../src/app/utilities/WorldUtility";
import { WorldConnections } from "../../src/app/utilities/WorldConnections";
import { WorldLocations } from "../../src/app/utilities/WorldLocations";
import { MapUtility } from "../../src/app/utilities/MapUtility";
import { EsriUtility, EsriStyle } from "../../src/app/utilities/EsriUtility";

import { MapBindingDataCsvComponent } from "../../src/app/maps/geo-map-binding-data-csv/map-binding-data-csv.component";
import { MapBindingDataJsonPointsComponent } from "../../src/app/maps/geo-map-binding-data-json-points/map-binding-data-json-points.component";
import { MapBindingDataModelComponent } from "../../src/app/maps/geo-map-binding-data-model/map-binding-data-model.component";
import { MapBindingMultipleShapesComponent } from "../../src/app/maps/geo-map-binding-multiple-shapes/map-binding-multiple-shapes.component";
import { MapBindingMultipleSourcesComponent } from "../../src/app/maps/geo-map-binding-multiple-sources/map-binding-multiple-sources.component";
import { MapBindingShapefilePointsComponent } from "../../src/app/maps/geo-map-binding-shapefile-points/map-binding-shapefile-points.component";
import { MapBindingShapefilePolygonsComponent } from "../../src/app/maps/geo-map-binding-shapefile-polygons/map-binding-shapefile-polygons.component";
import { MapBindingShapefilePolylinesComponent } from "../../src/app/maps/geo-map-binding-shapefile-polylines/map-binding-shapefile-polylines.component";
import { MapCustomTooltipsComponent } from "../../src/app/maps/geo-map-custom-tooltips/map-custom-tooltips.component";
import { MapOverviewComponent } from "../../src/app/maps/geo-map-overview/map-overview.component";
import { MapTypeScatterAreaSeriesComponent } from "../../src/app/maps/geo-map-type-scatter-area-series/map-type-scatter-area-series.component";
import { MapTypeScatterBubbleSeriesComponent } from "../../src/app/maps/geo-map-type-scatter-bubble-series/map-type-scatter-bubble-series.component";
import { MapTypeScatterContourSeriesComponent } from "../../src/app/maps/geo-map-type-scatter-contour-series/map-type-scatter-contour-series.component";
import { MapTypeScatterDensitySeriesComponent } from "../../src/app/maps/geo-map-type-scatter-density-series/map-type-scatter-density-series.component";
import { MapTypeScatterSymbolSeriesComponent } from "../../src/app/maps/geo-map-type-scatter-symbol-series/map-type-scatter-symbol-series.component";
import { MapTypeShapePolygonSeriesComponent } from "../../src/app/maps/geo-map-type-shape-polygon-series/map-type-shape-polygon-series.component";
import { MapTypeShapePolylineSeriesComponent } from "../../src/app/maps/geo-map-type-shape-polyline-series/map-type-shape-polyline-series.component";

import { MapDisplayImageryOSM } from "../../src/app/maps/MapDisplayImageryOSM/component";
import { MapDisplayImageryBingTiles } from "../../src/app/maps/MapDisplayImageryBingTiles/component";
import { MapDisplayImageryEsriTiles } from "../../src/app/maps/MapDisplayImageryEsriTiles/component";

import { Config } from "./core/Config";
import { DependenciesType } from "../services/DependenciesType";
import { BaseConfigGenerator } from "./core/BaseConfigGenerator";

export class GeoMapConfigGenerator extends BaseConfigGenerator {

    constructor() {
        super(DependenciesType.Maps, "/maps/geo-map/");
    }

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(this.getConfig(
            MapBindingMultipleShapesComponent,
            [IgxGeographicMapModule], null,
            ["/src/assets/Shapes/WorldCountries.shp",
             "/src/assets/Shapes/WorldCountries.dbf",
             "/src/assets/Shapes/WorldCities.shp",
             "/src/assets/Shapes/WorldCities.dbf",
             "/src/assets/Shapes/WorldCableRoutes.shp",
             "/src/assets/Shapes/WorldCableRoutes.dbf"]));
        configs.push(this.getConfig(
            MapBindingShapefilePointsComponent,
            [IgxGeographicMapModule], null,
            ["/src/assets/Shapes/WorldCities.shp",
             "/src/assets/Shapes/WorldCities.dbf"]));
        configs.push(this.getConfig(
            MapBindingShapefilePolygonsComponent,
            [IgxGeographicMapModule], null,
            ["/src/assets/Shapes/WorldCountries.shp",
             "/src/assets/Shapes/WorldCountries.dbf"]));
        configs.push(this.getConfig(
            MapBindingShapefilePolylinesComponent,
            [IgxGeographicMapModule], null,
            ["/src/assets/Shapes/WorldCableRoutes.shp",
             "/src/assets/Shapes/WorldCableRoutes.dbf"]));

        configs.push(this.getConfig(
            MapTypeScatterAreaSeriesComponent,
            [IgxGeographicMapModule], null,
            ["/src/assets/Shapes/WorldTemperatures.shp",
             "/src/assets/Shapes/WorldTemperatures.dbf"]));
        configs.push(this.getConfig(
            MapTypeScatterBubbleSeriesComponent,
            [IgxGeographicMapModule], null,
            ["/src/assets/Shapes/WorldTemperatures.shp",
             "/src/assets/Shapes/WorldTemperatures.dbf"]));
        configs.push(this.getConfig(
            MapTypeScatterContourSeriesComponent,
            [IgxGeographicMapModule], null,
            ["/src/assets/Shapes/WorldTemperatures.shp",
             "/src/assets/Shapes/WorldTemperatures.dbf"]));
        configs.push(this.getConfig(
            MapTypeScatterSymbolSeriesComponent,
            [IgxGeographicMapModule],
            [WorldLocations], ["/src/app/utilities/WorldLocations.ts"]));
        configs.push(this.getConfig(
            MapTypeShapePolygonSeriesComponent,
            [IgxGeographicMapModule], null,
            ["/src/assets/Shapes/WorldCountries.shp",
             "/src/assets/Shapes/WorldCountries.dbf"]));
        configs.push(this.getConfig(
            MapTypeShapePolylineSeriesComponent,
            [IgxGeographicMapModule], null,
            ["/src/assets/Shapes/AmericanRoads.shp",
             "/src/assets/Shapes/AmericanRoads.dbf"]));

        configs.push(this.getConfig(
            MapTypeScatterDensitySeriesComponent,
            [IgxGeographicMapModule], null,
            ["/src/assets/Data/AusPlaces.json"]));

        configs.push(this.getConfig(
            MapOverviewComponent,
            [IgxGeographicMapModule], null));

        configs.push(this.getConfig(
            MapCustomTooltipsComponent,
            [IgxGeographicMapModule], null));

        configs.push(this.getConfig(
            MapBindingMultipleSourcesComponent,
            [IgxGeographicMapModule],
            [WorldConnections], ["/src/app/utilities/WorldConnections.ts"]));

        configs.push(this.getConfig(
            MapBindingDataCsvComponent,
            [IgxGeographicMapModule], null,
            ["/src/assets/Data/UsaCities.csv"]));

        configs.push(this.getConfig(
            MapBindingDataJsonPointsComponent,
            [IgxGeographicMapModule], null,
            ["/src/assets/Data/WorldCities.json"]));

        configs.push(this.getConfig(
            MapBindingDataModelComponent,
            [IgxGeographicMapModule],
            [WorldUtility], ["/src/app/utilities/WorldUtility.ts"]));

        configs.push(this.getConfig(
            MapDisplayImageryOSM,
            [IgxGeographicMapModule]));
        configs.push(this.getConfig(
            MapDisplayImageryBingTiles,
            [IgxGeographicMapModule],
            [MapUtility], ["/src/app/utilities/MapUtility.ts"]));
        configs.push(this.getConfig(
            MapDisplayImageryEsriTiles,
            [IgxGeographicMapModule],
            [EsriUtility], ["/src/app/utilities/EsriUtility.ts"]));

        return configs;
    }
}
