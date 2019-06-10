import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { ShapeDataSource } from "igniteui-angular-core/ES5/igx-shape-data-source";
import { IgxGeographicHighDensityScatterSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-high-density-scatter-series-component";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
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
         // fetching geographic locations from public JSON folder
         fetch("assets/Data/AusPlaces.json")
         .then((response) => response.json())
         .then((data) => this.onDataLoaded(data, ""));
      }

    public onDataLoaded(sds: ShapeDataSource, e: any) {
        this.geoLocations = sds;
        // creating HD series with loaded data
        const geoSeries = new IgxGeographicHighDensityScatterSeriesComponent();
        geoSeries.dataSource = sds;
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
