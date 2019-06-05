import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicPolylineSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-polyline-series-component";
import { IgxGeographicSymbolSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-symbol-series-component";
import { WorldConnections } from "../../utilities/WorldConnections";

@Component({
  selector: "app-map-binding-multiple-sources",
  styleUrls: ["./map-binding-multiple-sources.component.scss"],
  templateUrl: "./map-binding-multiple-sources.component.html"
})

export class MapBindingMultipleSourcesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;

    @ViewChild("template")
    public tooltip: TemplateRef<object>;

    public data: any;
    constructor() {
    }

    public ngAfterViewInit(): void {
      this.map.windowRect = { left: 0.195, top: 0.1, width: 0.5, height: 0.5 };

      const worldFlights = WorldConnections.getFlights();
        const worldAirports = WorldConnections.getAirports();
        const worldGridlines = WorldConnections.getGridlines();

        this.addPolylineSeriesWith(worldFlights);
        this.addGridlineSeriesWith(worldGridlines);
        this.addSymbolSeriesWith(worldAirports);
    }

    public addGridlineSeriesWith(data : any[])
    {
        const gridSeries = new IgxGeographicPolylineSeriesComponent();
        gridSeries.dataSource = data;
        gridSeries.shapeMemberPath = "points";
        gridSeries.shapeStroke = "Gray";
        gridSeries.shapeStrokeThickness = 1;
        gridSeries.tooltipTemplate = this.tooltip;
        this.map.series.add(gridSeries);
    }

    public addPolylineSeriesWith(data : any[])
    {
        const lineSeries = new IgxGeographicPolylineSeriesComponent ();
        lineSeries.dataSource = data;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeStroke = "rgba(196, 14, 14,0.05)";
        lineSeries.shapeStrokeThickness = 4;
        lineSeries.tooltipTemplate = this.tooltip;
        this.map.series.add(lineSeries);
    }

    public addSymbolSeriesWith(data : any[])
    {
        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = data;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush = "#aad3df";
        symbolSeries.markerOutline = "rgb(73, 73, 73)";
        symbolSeries.thickness = 1;
        symbolSeries.tooltipTemplate = this.tooltip;
        this.map.series.add(symbolSeries);
    }
}