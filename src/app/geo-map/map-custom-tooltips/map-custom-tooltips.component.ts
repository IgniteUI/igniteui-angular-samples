import { AfterViewInit, Component, ViewChild, TemplateRef } from "@angular/core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxScatterSeriesDynamicModule} from "igniteui-angular-charts/ES5/igx-scatter-series-dynamic-module";
import { DataContext } from 'igniteui-angular-core/ES5/igx-data-context';
import { WorldUtils } from "../../utilities/WorldUtils";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
import { IgxGeographicSymbolSeriesComponent } from 'igniteui-angular-maps/ES5/igx-geographic-symbol-series-component';
import { WorldLocations } from "../../utilities/WorldLocations";

@Component({
  selector: "app-map-custom-tooltips",
  styleUrls: ["./map-custom-tooltips.component.scss"],
  templateUrl: "./map-custom-tooltips.component.html"
})

export class MapCustomTooltipsComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild ("template")
    public tooltipTemplate: TemplateRef<object>;
    constructor() {
    }

    public ngAfterViewInit(): void {
        const cityQTR = { lat: 25.285, lon:  51.531,  isoCode: "qat", name: "Doha" };
        const cityPAN = { lat:  8.949, lon: -79.400,  isoCode: "pan", name: "Panama" };
        const cityCHL = { lat: -33.475, lon: -70.647, isoCode: "chl", name: "Santiago" };
        const cityJAP = { lat:  35.683, lon: 139.809, isoCode: "jpn", name: "Tokyo" };
        const cityNYC = { lat: 40.750, lon: -74.0999, isoCode: "usa", name: "New York" };
        const citySNG = { lat:  1.229, lon: 104.177,  isoCode: "sgp", name: "Singapore" };
        const cityMOS = { lat: 55.750, lon:  37.700,  isoCode: "rus", name: "Moscow" };
        const cityLAX = { lat: 34.000, lon: -118.25,  isoCode: "usa", name: "Los Angeles" };

        const AmericanCities = [cityCHL, cityPAN, cityNYC, cityLAX, ];
        const AsianCities = [ citySNG, cityMOS, cityJAP, cityQTR, ];

        this.createSymbolSeries(AmericanCities, "Green");
        this.createSymbolSeries(AsianCities, "Red");
    }
    public createSymbolSeries(geoLocations: any[], brush: string)
    {
        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = geoLocations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush  = "White";
        symbolSeries.markerOutline = brush;
        symbolSeries.thickness = 1;
        symbolSeries.tooltipTemplate = this.createSymbolTooltip(this.tooltipTemplate);

        this.map.series.add(symbolSeries);
    }

    public createSymbolTooltip(context: any) {
        const dataContext = context.dataContext as DataContext;
        if (!dataContext) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const iso = dataItem.isoCode.toUpperCase();
        const lat = WorldUtils.toStringLat(dataItem.lat);
        const lon = WorldUtils.toStringLon(dataItem.lon);
        const scr = "assets/Data/images/svg/" + dataItem.isoCode.toLowerCase() + ".svg";

        const seriesStyle = { color: dataContext.series.markerOutline };
        const contentStyle = { display: "inline-block", marginLeft: 5 };

        return this.tooltipTemplate;
        // <div >
        //     {/* style={imageStyle} style={borderStyle}*/}
        //     <div className="tooltipFlagBoarder">
        //         <img className="tooltipFlagImage" src={scr}   />
        //     </div>
        //     <div style={contentStyle}>
        //         <div className="tooltipBox">
        //             <div className="tooltipRow">
        //                 <div className="tooltipLbl">City:</div>
        //                 <div className="tooltipVal" style={seriesStyle}>{dataItem.name}</div>
        //             </div>
        //             <div className="tooltipRow">
        //                 <div className="tooltipLbl">Latitude:</div>
        //                 <div className="tooltipVal" style={seriesStyle}>{lat} </div>
        //             </div>
        //             <div className="tooltipRow">
        //                 <div className="tooltipLbl">Longitude:</div>
        //                 <div className="tooltipVal" style={seriesStyle}>{lon}</div>
        //             </div>
        //             <div className="tooltipRow">
        //                 <div className="tooltipLbl">ISO Code:</div>
        //                 <div className="tooltipVal" style={seriesStyle}>{iso}</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    }
}
