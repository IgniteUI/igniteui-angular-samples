import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxGeographicHighDensityScatterSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-high-density-scatter-series-component";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";

@Component({
  selector: "app-map-binding-data-csv",
  styleUrls: ["./map-binding-data-csv.component.scss"],
  templateUrl: "./map-binding-data-csv.component.html"
})

export class MapBindingDataCsvComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("template")
    public tooltip: TemplateRef<object>;
    constructor() {
    }

    public ngAfterViewInit(): void {
        this.componentDidMount();
    }

    public componentDidMount() {
        // fetching JSON data with geographic locations from public folder
        fetch("assets/Data/UsaCities.csv")
            .then((response) => response.text())
            .then((data) => this.onDataLoaded(data));
    }

    public onDataLoaded(csvData: string) {
        const csvLines = csvData.split("\n");
        console.log("loaded assets/Data/UsaCities.csv " + csvLines.length);

        // parsing CSV data and creating geographic locations
        const geoLocations: any[] = [];
        for (let i = 1; i < csvLines.length; i++) {
            const columns = csvLines[i].split(",");
            const location = {
                code: columns[4],
                county: columns[5],
                density: Number(columns[6]),
                latitude:  Number(columns[1]),
                longitude: Number(columns[2]),
                name:  columns[0],
                population: Number(columns[7]),
                state: columns[3]
            };
            geoLocations.push(location);
        }
        console.log("csvLines " + csvLines.length);

        // creating HD series with loaded data
        const geoSeries = new IgxGeographicHighDensityScatterSeriesComponent();
        geoSeries.dataSource = geoLocations;
        geoSeries.latitudeMemberPath  = "latitude";
        geoSeries.longitudeMemberPath = "longitude";
        geoSeries.heatMaximumColor = "Red";
        geoSeries.heatMinimumColor = "Black";
        geoSeries.heatMinimum = 0;
        geoSeries.heatMaximum = 5;
        geoSeries.pointExtent = 1;
        geoSeries.tooltipTemplate = this.tooltip;
        geoSeries.mouseOverEnabled = true;

        // adding symbol series to the geographic amp
        this.map.series.add(geoSeries);

        // zooming to bound of lower 48-states
        const geoBounds = {
            height: Math.abs(50 - 15),
            left: -130,
            top: 15,
            width: Math.abs(-130 + 65)
        };
        this.map.zoomToGeographic(geoBounds);
    }
}
