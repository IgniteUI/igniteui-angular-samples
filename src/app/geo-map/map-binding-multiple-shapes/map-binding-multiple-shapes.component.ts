import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import DataUtils from "../../utilities/DataUtils";
import { WorldUtils } from "../../utilities/WorldUtils";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicPolylineSeriesComponent } from "igniteui-angular-maps/ES5/igx-geographic-polyline-series-component";
import { IgxGeographicShapeSeriesComponent } from "igniteui-angular-maps/ES5/igx-geographic-shape-series-component";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps/ES5/igx-geographic-symbol-series-component";
import { DataContext } from 'igniteui-angular-core/ES5/igx-data-context';
import { ShapeDataSource } from "igniteui-angular-core/ES5/igx-shape-data-source";

@Component({
  selector: "app-map-binding-multiple-shapes",
  styleUrls: ["./map-binding-multiple-shapes.component.scss"],
  templateUrl: "./map-binding-multiple-shapes.component.html"
})

export class MapBindingMultipleShapesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild ("shapeSeries")
    public shapeSeries: IgxGeographicShapeSeriesComponent;
    @ViewChild ("shapeSeries")
    public polylineSeries: IgxGeographicPolylineSeriesComponent;
    @ViewChild ("symbolSeries")
    public symbolSeries: IgxGeographicSymbolSeriesComponent;
    @ViewChild("template")
    public tooltip: TemplateRef<object>;
  
    constructor() {
    }

    public ngAfterViewInit(): void {
       
        //this.map.backgroundContent = {};
        this.map.windowRect = { left: 0.2, top: 0.1, width: 0.6, height: 0.6 };

        console.log("series.count " + this.map.series.count);
        console.log("actualSeries.length " + this.map.actualSeries.length);

        // this.map.actualSeries[0].tooltipTemplate = this.getPolygonsTooltip;
        // this.map.actualSeries[1].tooltipTemplate = this.getPolylinesTooltip;
        // this.map.actualSeries[2].tooltipTemplate = this.getPointTooltip;
        
        const url = DataUtils.getPublicURL();
        // loading a shapefile with geographic polygons
        const sdsPolygons = new ShapeDataSource();
        sdsPolygons.importCompleted.subscribe(() => this.onPolygonsLoaded(sdsPolygons, ""));
        sdsPolygons.shapefileSource = "assets/Shapes/WorldCountries.shp";
        sdsPolygons.databaseSource  = "assets/Shapes/WorldCountries.dbf";
        sdsPolygons.dataBind();

        const sdsPolylines = new ShapeDataSource();
        sdsPolylines.importCompleted.subscribe(() => this.onPolylinesLoaded(sdsPolylines, ""));
        sdsPolylines.shapefileSource = "assets/Shapes/WorldCableRoutes.shp";
        sdsPolylines.databaseSource  = "assets/Shapes/WorldCableRoutes.dbf";
        sdsPolylines.dataBind();

        // loading a shapefile with geographic points
        const sdsPoints = new ShapeDataSource();
        sdsPoints.importCompleted.subscribe(() => this.onPointsLoaded(sdsPoints, ""));
        sdsPoints.shapefileSource = "assets/Shapes/WorldCities.shp";
        sdsPoints.databaseSource  = "assets/Shapes/WorldCities.dbf";
        sdsPoints.dataBind();
    }

    public onPointsLoaded(sds: ShapeDataSource, e: any) {
        console.log("onPoints");

        const geoLocations: any[] = [];
        // parsing shapefile data and creating geo-locations
        for (const record of sds.getPointData()) {
            const pop = record.fieldValues.POPULATION;
            if (pop > 0) {
                // each shapefile record has just one point
                const location = {
                    latitude: record.points[0][0].y,
                    longitude: record.points[0][0].x,
                    city: record.fieldValues.NAME,
                    population: pop
                };
                geoLocations.push(location);
            }
        }
        this.shapeSeries.dataSource = geoLocations;
        
    }

    public onPolylinesLoaded(sds: ShapeDataSource, e: any) {
        console.log("onPolylines");

        const geoPolylines: any[] = [];
        // parsing shapefile data and creating geo-polygons
        sds.getPointData().forEach(record => {
            // using field/column names from .DBF file
            const route = {
                points: record.points,
                name: record.fieldValues.Name,
                capacity: record.fieldValues.CapacityG,
                distance: record.fieldValues.DistanceKM,
                isOverLand: record.fieldValues.OverLand === 0,
                isActive: record.fieldValues.NotLive !== 0,
                service: record.fieldValues.InService
            };
            geoPolylines.push(route);
        });
        this.polylineSeries.dataSource = geoPolylines;
        //this.setState({ polylines: geoPolylines });
    }

    public onPolygonsLoaded(sds: ShapeDataSource, e: any) {
        console.log("onPolygons ");

        const geoPolygons: any[] = [];
        // parsing shapefile data and creating geo-polygons
        sds.getPointData().forEach(record => {
            // using field/column names from .DBF file
            const country = {
                points: record.points,
                name: record.fieldValues.NAME,
                gdp: record.fieldValues.GDP,
                population: record.fieldValues.POPULATION
            };
            geoPolygons.push(country);
        });
        this.symbolSeries.dataSource = geoPolygons;
        //this.setState({ polygons: geoPolygons });
    }

    public getPolygonsTooltip(context: any) {
        const dataContext = context.dataContext as DataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const pop = WorldUtils.toStringAbbr(dataItem.population);
        const gdp = WorldUtils.toStringAbbr(dataItem.gdp * 1000000 / dataItem.population);
        const brush = series.shapeStroke;

        return ;
        // <div className="tooltipBox">
        //     <div className="tooltipTitle" style={{ color: brush }}>{dataItem.name}</div>
        //     <div className="tooltipTable">
        //         <div className="tooltipRow">
        //             <div className="tooltipLbl">Population</div>
        //             <div className="tooltipVal">{pop}</div>
        //         </div>
        //         <div className="tooltipRow">
        //             <div className="tooltipLbl">GDP</div>
        //             <div className="tooltipVal">{gdp}</div>
        //         </div>
        //     </div>
        // </div>
    }

    public getPointTooltip(context: any) {
        const dataContext = context.dataContext as DataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const brush = series.markerOutline;
        const pop = WorldUtils.toStringAbbr(dataItem.population);
        const lat = WorldUtils.toStringLat(dataItem.latitude);
        const lon = WorldUtils.toStringLon(dataItem.longitude);

        return ;
        // <div className="tooltipBox">
        //     <div className="tooltipTitle" style={{ color: brush }}>{dataItem.city}</div>
        //     <div className="tooltipTable">
        //         <div className="tooltipRow">
        //             <div className="tooltipLbl">Latitude:</div>
        //             <div className="tooltipVal">{lat}</div>
        //         </div>
        //         <div className="tooltipRow">
        //             <div className="tooltipLbl">Longitude:</div>
        //             <div className="tooltipVal">{lon}</div>
        //         </div>
        //         <div className="tooltipRow">
        //             <div className="tooltipLbl">Population:</div>
        //             <div className="tooltipVal">{pop}</div>
        //         </div>
        //     </div>
        // </div>
    }

    public getPolylinesTooltip(context: any) {
        const dataContext = context.dataContext as DataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        // console.log("getPolylinesTooltip.series " );
        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const capacity = dataItem.capacity + " GB/s";
        const distance = dataItem.distance + " KM";

        return ;
        // <div className="tooltipBox">
        //     <div className="tooltipTitle" style={{ color: "Purple" }}>{dataItem.name}</div>
        //     <div className="tooltipTable">
        //         <div className="tooltipRow">
        //             <div className="tooltipLbl">Distance</div>
        //             <div className="tooltipVal">{distance}</div>
        //         </div>
        //         <div className="tooltipRow">
        //             <div className="tooltipLbl">Capacity</div>
        //             <div className="tooltipVal">{capacity}</div>
        //         </div>
        //         <div className="tooltipRow">
        //             <div className="tooltipLbl">Service</div>
        //             <div className="tooltipVal">{dataItem.service}</div>
        //         </div>
        //     </div>
        // </div>
    }
}
