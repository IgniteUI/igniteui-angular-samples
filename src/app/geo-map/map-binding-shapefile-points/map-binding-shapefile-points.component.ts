import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
import { ShapeDataSource } from "igniteui-angular-core/ES5/igx-shape-data-source";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicSymbolSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-symbol-series-component";

@Component({
  selector: "app-map-binding-shapefile-points",
  styleUrls: ["./map-binding-shapefile-points.component.scss"],
  templateUrl: "./map-binding-shapefile-points.component.html"
})
export class MapBindingShapefilePointsComponent implements AfterViewInit {
    @ViewChild("map", {static: true})
    public map: IgxGeographicMapComponent;

    @ViewChild("template", {static: true})
    public tooltipTemplate: TemplateRef<object>;
    constructor() { }

    public ngAfterViewInit() {
    const sds = new ShapeDataSource();
    sds.shapefileSource = "assets/Shapes/WorldCities.shp";
    sds.databaseSource  = "assets/Shapes/WorldCities.dbf";
    sds.dataBind();
    sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
  }
    public onDataLoaded(sds: ShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    console.log("loaded /Shapes/WorldCities.shp " + shapeRecords.length);

    const geoLocations: any[] = [];
    // parsing shapefile data and creating geo-locations
    for (const record of shapeRecords) {
        const pop = record.fieldValues.POPULATION;
        if (pop > 0) {
            // each shapefile record has just one point
            const location = {
                city: record.fieldValues.NAME,
                latitude: record.points[0][0].y,
                longitude: record.points[0][0].x,
                population: pop
            };
            geoLocations.push(location);
        }
    }

    const geoSeries = new IgxGeographicSymbolSeriesComponent();
    geoSeries.dataSource = geoLocations;
    geoSeries.markerType = MarkerType.Circle;
    geoSeries.latitudeMemberPath  = "latitude";
    geoSeries.longitudeMemberPath = "longitude";
    geoSeries.markerBrush = "LightGray";
    geoSeries.markerOutline = "Black";
    geoSeries.tooltipTemplate = this.tooltipTemplate;

    this.map.series.add(geoSeries);
}
}
