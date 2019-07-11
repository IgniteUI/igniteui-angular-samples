import { AfterViewInit, Component, ViewChild } from "@angular/core";

import { HeatTileGenerator } from "igniteui-angular-core/ES5/igx-heat-tile-generator";
import { ShapeDataSource } from "igniteui-angular-core/ES5/igx-shape-data-source";

import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
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

        const sds: ShapeDataSource = new ShapeDataSource();
        sds.importCompleted.subscribe((s, e) => {
            const data = sds.getPointData();
            const lat: number[] = [];
            const lon: number[] = [];
            const val: number[] = [];

            for (let i = 0; i < data.length; i++) {
                const item = data[i];
                for (let j = 0; j < item.points.length; j++) {
                    const pointsList = item.points[j];
                    for (let k = 0; k < pointsList.length; k++) {
                        lat.push(pointsList[k].y);
                        lon.push(pointsList[k].x);
                    }
                }
                const value = parseInt(item.fieldValues["POP2010"], 10);
                if (value >= 0) {
                    val.push(value);
                } else {
                    val.push(0);
                }
            }

            const gen = new HeatTileGenerator();
            gen.xValues = lon;
            gen.yValues = lat;
            gen.values = val;
            gen.blurRadius = 6;
            gen.maxBlurRadius = 20;
            gen.useBlurRadiusAdjustedForZoom = true;
            gen.minimumColor = "rgba(100, 255, 0, 0.4)";
            gen.maximumColor = "rgba(255, 255, 0, 0.95)";
            gen.useGlobalMinMax = true;
            gen.useGlobalMinMaxAdjustedForZoom = true;
            gen.useLogarithmicScale = true;
            gen.useWebWorkers = true;
            // gen.webWorkerInstance = new Worker();
            gen.webWorkerInstance = new Worker("../heatmap.worker", { type: "module" });

            gen.scaleColors = [
              "rgba(0, 0, 255, 64)", "rgba(0, 255, 255, 96)",
              "rgba(0, 255, 0, 160)", "rgba(255, 255, 0, 180)",
              "rgba(255, 0, 0, 200)"
            ];
            // generating heat map
            this.tileImagery.tileGenerator = gen;

            // zooming to USA region of the map
            this.map.zoomToGeographic({ left: -134.5, top: 16.0, width: 70.0, height: 37.0 });
        });

        sds.shapefileSource = "assets/Shapes/AmericanCities.shp";
        sds.databaseSource = "assets/Shapes/AmericanCities.dbf";
        sds.dataBind();
    }

    public ngAfterViewInit(): void {
        // this.map.zoomToGeographic({ left: -134.5, top: 16.0, width: 70.0, height: 37.0 });
    }
}
