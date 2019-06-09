import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxCustomPaletteColorScaleComponent
} from "igniteui-angular-charts/ES5/igx-custom-palette-color-scale-component";
import { ShapeDataSource } from "igniteui-angular-core/ES5/igx-shape-data-source";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicScatterAreaSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-scatter-area-series-component";

@Component({
  selector: "app-map-type-scatter-area-series",
  templateUrl: "./map-type-scatter-area-series.component.html",
  styleUrls: ["./map-type-scatter-area-series.component.scss"]
})
export class MapTypeScatterAreaSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild ("template")
    public tooltipTemplate: TemplateRef<object>;
    constructor() {
    }

    public ngAfterViewInit(): void {
    const sds = new ShapeDataSource();
    sds.shapefileSource = "assets/Shapes/WorldTemperatures.shp";
    sds.databaseSource  = "assets/Shapes/WorldTemperatures.dbf";
    sds.dataBind();
    sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
}

    public onDataLoaded(sds: ShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    console.log("loaded contour shapes: " + shapeRecords.length + " from /Shapes/WorldTemperatures.shp");

    const contourPoints: any[] = [];
    for (const record of shapeRecords) {
        const temp = record.fieldValues.Contour;
        // using only major contours (every 10th degrees Celsius)
        if (temp % 10 === 0 && temp >= 0) {
            for (const shapes of record.points) {
                for (let i = 0; i < shapes.length; i++) {
                if (i % 5 === 0) {
                    const p = shapes[i];
                    const item = { lon: p.x, lat: p.y, value: temp};
                    contourPoints.push(item);
                }
                }
            }
        }
    }

    console.log("loaded contour points: " + contourPoints.length);
    this.createContourSeries(contourPoints);
}

    public createContourSeries(data: any[]) {
    const brushes = [
        "rgba(32, 146, 252, 0.5)", // semi-transparent blue
        "rgba(14, 194, 14, 0.5)",  // semi-transparent green
        "rgba(252, 120, 32, 0.5)", // semi-transparent orange
        "rgba(252, 32, 32, 0.5)",  // semi-transparent red
    ];

    const colorScale = new IgxCustomPaletteColorScaleComponent();
    colorScale.palette = brushes;
    colorScale.minimumValue = 0;
    colorScale.maximumValue = 30;

    const areaSeries = new IgxGeographicScatterAreaSeriesComponent();
    areaSeries.dataSource = data;
    areaSeries.longitudeMemberPath = "lon";
    areaSeries.latitudeMemberPath = "lat";
    areaSeries.colorMemberPath = "value";
    areaSeries.colorScale = colorScale;
    areaSeries.tooltipTemplate = this.tooltipTemplate;
    areaSeries.thickness = 4;

    this.map.series.add(areaSeries);
}
}
