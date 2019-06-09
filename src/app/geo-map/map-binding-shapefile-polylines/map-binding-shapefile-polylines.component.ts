import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { ShapeDataSource } from "igniteui-angular-core/ES5/igx-shape-data-source";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicPolylineSeriesComponent } from 'igniteui-angular-maps/ES5/igx-geographic-polyline-series-component';

@Component({
  selector: 'app-map-binding-shapefile-polylines',
  templateUrl: './map-binding-shapefile-polylines.component.html',
  styleUrls: ['./map-binding-shapefile-polylines.component.scss']
})
export class MapBindingShapefilePolylinesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;

    @ViewChild("template")
    public tooltipTemplate: TemplateRef<object>;
    constructor() { }

    ngAfterViewInit() {
    // loading a shapefile with geographic polygons
    const sds = new ShapeDataSource();
    sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
    sds.shapefileSource = "assets/Shapes/WorldCableRoutes.shp";
    sds.databaseSource  = "assets/Shapes/WorldCableRoutes.dbf";
    sds.dataBind();
    }
    public onDataLoaded(sds: ShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded /Shapes/WorldCities.shp " + shapeRecords.length);

        const geoPolylines: any[] = [];
        // parsing shapefile data and creating geo-polygons
        for (const record of shapeRecords) {
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
        }

        const geoSeries = new IgxGeographicPolylineSeriesComponent();
        geoSeries.dataSource = geoPolylines;
        geoSeries.shapeMemberPath = "points";
        geoSeries.shapeFilterResolution = 0.0;
        geoSeries.shapeStrokeThickness = 3;
        geoSeries.shapeStroke = "rgb(82, 82, 82, 0.4)";
        geoSeries.tooltipTemplate = this.tooltipTemplate;

        this.map.series.add(geoSeries);
        }
}
