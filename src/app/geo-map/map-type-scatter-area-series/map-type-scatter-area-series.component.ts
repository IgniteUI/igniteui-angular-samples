import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicScatterAreaSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-scatter-area-series-component";
import WorldLocations from "../../utilities/WorldLocations";

@Component({
  selector: "app-map-type-scatter-area-series",
  templateUrl: "./map-type-scatter-area-series.component.html"
})

export class MapTypeScatterAreaSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    constructor() {
    }

    public ngAfterViewInit(): void {
      this.addSeriesWith(WorldLocations.getCities(), "Gray");
      this.addSeriesWith(WorldLocations.getCapitals(), "rgb(32, 146, 252)");
    }

    public addSeriesWith(locations: any[], brush: string) {
        const symbolSeries = new IgxGeographicScatterAreaSeriesComponent ();
        symbolSeries.dataSource = locations;
        this.map.series.add(symbolSeries);
    }
}
