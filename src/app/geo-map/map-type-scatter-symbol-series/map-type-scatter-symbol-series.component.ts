import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicSymbolSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-symbol-series-component";
import { WorldLocations } from "../../utilities/WorldLocations";

@Component({
  selector: "app-map-type-scatter-symbol-series",
  styleUrls: ["./map-type-scatter-symbol-series.component.scss"],
  templateUrl: "./map-type-scatter-symbol-series.component.html"
})

export class MapTypeScatterSymbolSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("template")
    public tooltip: TemplateRef<object>;

    constructor() {
    }

    public ngAfterViewInit(): void {
      this.addSeriesWith(WorldLocations.getCities(), "Gray");
      this.addSeriesWith(WorldLocations.getCapitals(), "rgb(32, 146, 252)");
    }

    public addSeriesWith(locations: any[], brush: string) {
        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = locations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush  = "White";
        symbolSeries.markerOutline = brush;
        symbolSeries.tooltipTemplate = this.tooltip;
        this.map.series.add(symbolSeries);
    }
}
