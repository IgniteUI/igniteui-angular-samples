import { AfterViewInit, Component, ViewChild } from "@angular/core";

import { HeatTileGenerator } from "igniteui-angular-core/ES5/igx-heat-tile-generator";

import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicTileSeriesComponent } from "igniteui-angular-maps/ES5/igx-geographic-tile-series-component";
import { TileGeneratorMapImagery } from "igniteui-angular-maps/ES5/igx-tile-generator-map-imagery";

@Component({
    selector: "app-map-display-imagery-heat-tiles",
    templateUrl: "./map-display-imagery-heat-tiles.component.html",
    styleUrls: ["./map-display-imagery-heat-tiles.component.scss"]
})
export class MapDisplayImageryHeatTilesComponent implements AfterViewInit {

    @ViewChild("map", { static: true })
    public map: IgxGeographicMapComponent;
    public tileImagery: TileGeneratorMapImagery;

    constructor() {
        this.tileImagery = new TileGeneratorMapImagery();
    }

    public ngAfterViewInit(): void {
        this.map.zoomToGeographic({ left: -134.5, top: 16.0, width: 70.0, height: 37.0 });

        this.componentDidMount();
    }

    public componentDidMount() {
        console.log("componentDidMount");
        // fetching JSON data with geographic locations from public folder
        fetch("assets/Data/UsaCitiesPopulation.csv")
            .then((response) => response.text())
            .then((data) => this.onDataLoaded(data));
    }

    public onDataLoaded(csvData: string) {
        const csvLines = csvData.split("\n");
        console.log("loaded UsaCitiesPopulation.csv " + csvLines.length);

        const latitudes: number[] = [];
        const longitudes: number[] = [];
        const populations: number[] = [];

        // parsing CSV data and creating geographic locations
        for (let i = 1; i < csvLines.length; i++) {
            const columns = csvLines[i].split(",");
            latitudes.push(Number(columns[1]));
            longitudes.push(Number(columns[2]));
            populations.push(Number(columns[3]));
        }

        // generating heat map imagery tiles
        const gen = new HeatTileGenerator();
        gen.xValues = longitudes;
        gen.yValues = latitudes;
        gen.values = populations;
        gen.blurRadius = 6;
        gen.maxBlurRadius = 20;
        gen.useBlurRadiusAdjustedForZoom = true;
        gen.minimumColor = "rgba(100, 255, 0, 0.5)";
        gen.maximumColor = "rgba(255, 255, 0, 0.5)";
        gen.useGlobalMinMax = true;
        gen.useGlobalMinMaxAdjustedForZoom = true;
        gen.useLogarithmicScale = true;
        gen.useWebWorkers = true;
        // gen.webWorkerInstance = new Worker();
        gen.webWorkerInstance = new Worker("../heatmap.worker", { type: "module" });

        gen.scaleColors = [
            "rgba(0, 0, 255, .251)", "rgba(0, 255, 255, .3765)",
            "rgba(50,205,50, .2675)", "rgba(255, 255, 0, .7059)",
            "rgba(255, 0, 0, .7843)"
        ];
        this.tileImagery.tileGenerator = gen;

        // generating heat map series
        const series = new IgxGeographicTileSeriesComponent();
        series.name = "heatMapSeries";
        series.tileImagery = this.tileImagery;

        // add heat map series to the map
        this.map.series.add(series);
    }
}
