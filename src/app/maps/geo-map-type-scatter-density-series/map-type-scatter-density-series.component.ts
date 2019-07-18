import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { ShapeDataSource } from "igniteui-angular-core/ES5/igx-shape-data-source";
import { IgxGeographicHighDensityScatterSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-high-density-scatter-series-component";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { WorldUtility } from "../../utilities/WorldUtility";

@Component({
  selector: "app-map-type-scatter-density-series",
  styleUrls: ["./map-type-scatter-density-series.component.scss"],
  templateUrl: "./map-type-scatter-density-series.component.html"
})

export class MapTypeScatterDensitySeriesComponent implements AfterViewInit {

    @ViewChild("map", {static: true})
    public map: IgxGeographicMapComponent;
    @ViewChild("template", {static: true})
    public tooltip: TemplateRef<object>;

    constructor() {
    }

    public ngAfterViewInit(): void {
         // fetching geographic locations from public JSON folder
         fetch("assets/Data/AusPlaces.csv")
         .then((response) => response.text())
         .then((data) => this.onDataLoaded(data));
      }

    public onDataLoaded(csvData: string) {
        const csvLines = csvData.split("\n");
        console.log("loaded AusPlaces.csv " + csvLines.length);

        const geoLocations: any[] = [];
        for (let i = 1; i < csvLines.length; i++) {
            const columns = csvLines[i].split(",");
            const location = {
                latitude:  Number(columns[2]),
                longitude: Number(columns[1]),
                name:  columns[0]
            };
            geoLocations.push(location);
        }

        // creating HD series with loaded data
        const geoSeries = new IgxGeographicHighDensityScatterSeriesComponent();
        geoSeries.dataSource = geoLocations;
        geoSeries.longitudeMemberPath = "longitude";
        geoSeries.latitudeMemberPath = "latitude";
        geoSeries.heatMaximumColor = "Red";
        geoSeries.heatMinimumColor = "Black";
        geoSeries.heatMinimum = 0;
        geoSeries.heatMaximum = 5;
        geoSeries.pointExtent = 1;
        geoSeries.tooltipTemplate = this.tooltip;
        geoSeries.mouseOverEnabled = true;

        // adding HD series to the geographic amp
        this.map.series.add(geoSeries);

        // zooming to bound of all geographic locations
        const geoBounds = WorldUtility.getBounds(geoLocations);
        geoBounds.top = 0;
        geoBounds.height = -50;
        this.map.zoomToGeographic(geoBounds);
    }

}
