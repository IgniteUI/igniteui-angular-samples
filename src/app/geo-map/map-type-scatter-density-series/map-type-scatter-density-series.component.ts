import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicHighDensityScatterSeriesComponent } from "igniteui-angular-maps/ES5/igx-geographic-high-density-scatter-series-component";
import DataUtils from "../../utilities/DataUtils";
import { ShapeDataSource } from "igniteui-angular-core/ES5/igx-shape-data-source";
import { WorldUtils } from "../../utilities/WorldUtils";

@Component({
  selector: "app-map-type-scatter-density-series",
  styleUrls: ["./map-type-scatter-density-series.component.scss"],
  templateUrl: "./map-type-scatter-density-series.component.html"
})

export class MapTypeScatterDensitySeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("template")
    public tooltip: TemplateRef<object>;

    public geoLocations;
    constructor() {
    }

    public ngAfterViewInit(): void {
        const sds = new ShapeDataSource();
        sds.shapefileSource = "assets/Shapes/WorldCountries.shp";
        sds.databaseSource  = "assets/Shapes/WorldCountries.dbf";
        sds.dataBind();
        sds.importCompleted.subscribe(() => this.onDataLoaded(this.geoLocations));
      }

    public componentDidMount() {
        // fetching geographic locations from public JSON folder
        const url = DataUtils.getPublicURL();
        fetch(url + "assets/Data/AusPlaces.json")
            .then((response) => response.json())
            .then(data => this.onDataLoaded(data));

        // .then(data => this.setState({ locations: data, isLoading: false }));
    }
    public onDataLoaded(gl: any[]) {
        console.log("loaded assets/Data/AusPlaces.json");
        this.geoLocations = gl;
        // creating HD series with loaded data
        const geoSeries = new IgxGeographicHighDensityScatterSeriesComponent();
        geoSeries.dataSource = this.geoLocations;
        geoSeries.longitudeMemberPath = "x";
        geoSeries.latitudeMemberPath = "y";
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
        const geoBounds = WorldUtils.getBounds(this.geoLocations);
        geoBounds.top = 0;
        geoBounds.height = -50;
        this.map.zoomToGeographic(geoBounds);
    }

}
