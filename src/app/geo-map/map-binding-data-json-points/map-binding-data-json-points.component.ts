import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
import { DataContext } from 'igniteui-angular-core/ES5/igx-data-context';
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps/ES5/igx-geographic-symbol-series-component";
import DataUtils from "../../utilities/DataUtils";
import { WorldUtils } from "../../utilities/WorldUtils";

@Component({
  selector: "app-map-binding-data-json-points",
  styleUrls: ["./map-binding-data-json-points.component.scss"],
  templateUrl: "./map-binding-data-json-points.component.html"
})

export class MapBindingDataJsonPointsComponent implements AfterViewInit {

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
        const url = DataUtils.getPublicURL();
        fetch(url + "assets/Data/WorldCities.json")
            .then((response) => response.json())
            .then(data => this.onDataLoaded(data));
    }

    public onDataLoaded(jsonData: any[]) {
        console.log("loaded assets/Data/WorldCities.json " + jsonData.length);

        const geoLocations: any[] = [];
        // parsing JSON data and using only cities that are capitals
        for (const jsonItem of jsonData) {
            if (jsonItem.cap) {
                const location = {
                    latitude: jsonItem.lat,
                    longitude: jsonItem.lon,
                    population: jsonItem.pop,
                    city: jsonItem.name,
                    country: jsonItem.country
                };
                geoLocations.push(location);
            }
        }

        // creating symbol series with loaded data
        const geoSeries = new IgxGeographicSymbolSeriesComponent();
        geoSeries.dataSource = geoLocations;
        geoSeries.markerType = MarkerType.Circle;
        geoSeries.latitudeMemberPath  = "latitude";
        geoSeries.longitudeMemberPath = "longitude";
        geoSeries.markerBrush = "LightGray";
        geoSeries.markerOutline = "Black";
        //geoSeries.tooltipTemplate = this.createTooltip;

        // adding symbol series to the geographic amp
        this.map.series.add(geoSeries);
    }

    public createTooltip(context: any) {
        const dataContext = context.dataContext as DataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const pop = dataItem.population.toFixed(1) + " M";
        const lat = WorldUtils.toStringLat(dataItem.latitude);
        const lon = WorldUtils.toStringLon(dataItem.longitude);

        console.log("createTooltip ");
        return ;
        // <div>
        //     <div className="tooltipTitle" >{dataItem.city}</div>
        //     <div className="tooltipBox">
        //         <div className="tooltipRow">
        //             <div className="tooltipLbl">Latitude:</div>
        //             <div className="tooltipVal">{lat}</div>
        //         </div>
        //         <div className="tooltipRow">
        //             <div className="tooltipLbl">Longitude:</div>
        //             <div className="tooltipVal">{lon}</div>
        //         </div>
        //         <div className="tooltipRow">
        //             <div className="tooltipLbl">Population</div>
        //             <div className="tooltipVal">{pop}</div>
        //         </div>
        //     </div>
        // </div>
    }
}
