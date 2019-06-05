import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { ShapeDataSource } from "igniteui-angular-core/ES5/igx-shape-data-source";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicShapeSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-shape-series-component";

@Component({
  selector: 'app-map-binding-shapefile-polygons',
  templateUrl: './map-binding-shapefile-polygons.component.html',
  styleUrls: ['./map-binding-shapefile-polygons.component.scss']
})
export class MapBindingShapefilePolygonsComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;

    @ViewChild("template")
    public tooltip: TemplateRef<object>;

    public data: any;
    constructor() {
    }

    public ngAfterViewInit(): void {
      const sds = new ShapeDataSource();
      sds.shapefileSource = "assets/Shapes/WorldCountries.shp";
      sds.databaseSource  = "assets/Shapes/WorldCountries.dbf";
      sds.dataBind();
      sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
    }

    public onDataLoaded(sds: ShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded /Shapes/WorldCountries.shp " + shapeRecords.length);

        const geoPolygons: any[] = [];
        // parsing shapefile data and creating geo-polygons
        for (const record of shapeRecords) {
            // using field/column names from .DBF file
            const country = {
                points: record.points,
                name: record.fieldValues.NAME,
                gdp: record.fieldValues.GDP,
                population: record.fieldValues.POPULATION
            };
            geoPolygons.push(country);
        }

        const geoSeries = new IgxGeographicShapeSeriesComponent();
        geoSeries.dataSource = geoPolygons;
        geoSeries.shapeMemberPath = "points";
        geoSeries.brush = "rgba(146, 146, 146, 0.6)";
        geoSeries.outline = "Black";
        //geoSeries.tooltipTemplate = this.createTooltip;
        geoSeries.thickness = 1;

        this.map.series.add(geoSeries);
  }

  }

