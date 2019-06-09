import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicPolylineSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-polyline-series-component";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps/ES5/igx-geographic-symbol-series-component";
import { WorldUtils } from "../../utilities/WorldUtils";

@Component({
  selector: "app-map-binding-data-model",
  styleUrls: ["./map-binding-data-model.component.scss"],
  templateUrl: "./map-binding-data-model.component.html"
})

export class MapBindingDataModelComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("pointSeriestemplate")
    public pointSeriestemplate: TemplateRef<object>;
    @ViewChild("polylineSeriesTooltipTemplate")
    public polylineSeriesTooltipTemplate: TemplateRef<object>;
    public flights: any[];
    constructor() {
    }

    public ngAfterViewInit(): void {
        const cityDAL = { lat:  32.763, lon: -96.663, country: "US", name: "Dallas" };
        const citySYD = { lat: -33.889, lon: 151.028, country: "Australia", name: "Sydney" };
        const cityNZL = { lat: -36.848, lon: 174.763, country: "New Zealand", name: "Auckland" };
        const cityQTR = { lat: 25.285, lon:  51.531,  country: "Qatar", name: "Doha" };
        const cityPAN = { lat:  8.949, lon: -79.400,  country: "Panama", name: "Panama" };
        const cityCHL = { lat: -33.475, lon: -70.647, country: "Chile", name: "Santiago" };
        const cityJAP = { lat:  35.683, lon: 139.809, country: "Japan", name: "Tokyo" };
        const cityALT = { lat: 33.795,  lon: -84.349, country: "US", name: "Atlanta" };
        const cityJOH = { lat: -26.178, lon: 28.004,  country: "South Africa", name: "Johannesburg" };
        const cityNYC = { lat: 40.750, lon: -74.0999, country: "US", name: "New York" };
        const citySNG = { lat:  1.229, lon: 104.177,  country: "Singapore", name: "Singapore" };
        const cityMOS = { lat: 55.750, lon:  37.700,  country: "Russia", name: "Moscow" };
        const cityROM = { lat:  41.880, lon: 12.520,  country: "Italy", name: "Roma" };
        const cityLAX = { lat: 34.000, lon: -118.25,  country: "US", name: "Los Angeles" };

        this.flights = [
            { origin: cityDAL, dest: citySNG, color: "Green" },
            { origin: cityMOS, dest: cityNZL, color: "Red" },
            { origin: cityCHL, dest: cityJAP, color: "Blue" },
            { origin: cityPAN, dest: cityROM, color: "Orange" },
            { origin: cityALT, dest: cityJOH, color: "Black" },
            { origin: cityNYC, dest: cityQTR, color: "Purple" },
            { origin: cityLAX, dest: citySYD, color: "Gray" },
        ];

        for (const flight of this.flights) {
            this.createPolylineSeries(flight);
            this.createSymbolSeries(flight);
        }
    }

    public createSymbolSeries(flight: any)
    {
        const geoLocations = [flight.origin, flight.dest ];

        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = geoLocations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush  = "White";
        symbolSeries.markerOutline = flight.color;
        symbolSeries.thickness = 1;
        symbolSeries.tooltipTemplate = this.pointSeriestemplate;

        this.map.series.add(symbolSeries);
    }

    public createPolylineSeries(flight: any)
    {
        const geoPath = WorldUtils.calcPaths(flight.origin, flight.dest);
        const geoDistance = WorldUtils.calcDistance(flight.origin, flight.dest);
        const geoRoutes = [
            { points: geoPath ,
              origin: flight.origin,
              dest: flight.dest,
              distance: geoDistance,
              time: geoDistance / 850,
        }];

        const lineSeries = new IgxGeographicPolylineSeriesComponent ();
        lineSeries.dataSource = geoRoutes;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeStrokeThickness = 9;
        lineSeries.shapeOpacity = 0.5;
        lineSeries.shapeStroke = flight.color;
        lineSeries.tooltipTemplate = this.polylineSeriesTooltipTemplate;
        this.map.series.add(lineSeries);
    }
}
