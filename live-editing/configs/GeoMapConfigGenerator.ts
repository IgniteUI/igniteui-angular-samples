import { IgxScatterSeriesDynamicModule} from "igniteui-angular-charts/ES5/igx-scatter-series-dynamic-module";
import { IgxGeographicMapModule } from "igniteui-angular-maps/ES5/igx-geographic-map-module";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps/ES5/igx-geographic-symbol-series-component";
import { IgxGeographicSymbolSeriesModule} from "igniteui-angular-maps/ES5/igx-geographic-symbol-series-module";
import { GeoMapRoutingModule } from "../../src/app/geo-map/geo-map-routing.module";
import { MapBindingDataCsvComponent
} from "../../src/app/geo-map/map-binding-data-csv/map-binding-data-csv.component";
import { MapBindingDataJsonPointsComponent
} from "../../src/app/geo-map/map-binding-data-json-points/map-binding-data-json-points.component";
import { MapBindingDataModelComponent
} from "../../src/app/geo-map/map-binding-data-model/map-binding-data-model.component";
import { MapBindingMultipleShapesComponent
} from "../../src/app/geo-map/map-binding-multiple-shapes/map-binding-multiple-shapes.component";
import { MapBindingMultipleSourcesComponent
} from "../../src/app/geo-map/map-binding-multiple-sources/map-binding-multiple-sources.component";
import { MapCustomTooltipsComponent } from "../../src/app/geo-map/map-custom-tooltips/map-custom-tooltips.component";
import { MapOverviewComponent } from "../../src/app/geo-map/map-overview/map-overview.component";
import { MapTypeScatterAreaSeriesComponent
} from "../../src/app/geo-map/map-type-scatter-area-series/map-type-scatter-area-series.component";
import { MapTypeScatterContourSeriesComponent
} from "../../src/app/geo-map/map-type-scatter-contour-series/map-type-scatter-contour-series.component";
import { MapTypeScatterDensitySeriesComponent
} from "../../src/app/geo-map/map-type-scatter-density-series/map-type-scatter-density-series.component";
import { MapTypeScatterSymbolSeriesComponent
} from "../../src/app/geo-map/map-type-scatter-symbol-series/map-type-scatter-symbol-series.component";
import { MapTypeShapePolygonSeriesComponent
} from "../../src/app/geo-map/map-type-shape-polygon-series/map-type-shape-polygon-series.component";
import { MapTypeShapePolylineSeriesComponent
} from "../../src/app/geo-map/map-type-shape-polyline-series/map-type-shape-polyline-series.component";


import { Type } from "@angular/core/src/type";
import { WorldLocations } from "../../src/app/utilities/WorldLocations";
import { DependenciesType } from "../services/DependenciesType";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class GeoMapConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(this.getConfig(
            MapBindingDataCsvComponent,
            [IgxGeographicMapModule]));
        configs.push(this.getConfig(
            MapBindingDataJsonPointsComponent,
            [IgxGeographicMapModule]));
        configs.push(this.getConfig(
            MapBindingDataModelComponent,
            [IgxGeographicMapModule]));
        configs.push(this.getConfig(
            MapBindingMultipleShapesComponent,
            [IgxGeographicMapModule]));
        configs.push(this.getConfig(
            MapBindingMultipleSourcesComponent,
            [IgxGeographicMapModule]));
        configs.push(this.getConfig(
            MapCustomTooltipsComponent,
            [IgxGeographicMapModule]));
        configs.push(this.getConfig(
            MapOverviewComponent,
            [IgxGeographicMapModule]));
        configs.push(this.getConfig(
            MapTypeScatterAreaSeriesComponent,
            [IgxGeographicMapModule]));
        configs.push(this.getConfig(
            MapTypeScatterContourSeriesComponent,
            [IgxGeographicMapModule]));
        configs.push(this.getConfig(
            MapTypeScatterDensitySeriesComponent,
            [IgxGeographicMapModule]));
        configs.push(this.getConfig(
            MapTypeShapePolygonSeriesComponent,
            [IgxGeographicMapModule]));
        configs.push(this.getConfig(
            MapTypeShapePolylineSeriesComponent,
            [IgxGeographicMapModule, IgxScatterSeriesDynamicModule]));
        configs.push(this.getConfig(
            MapTypeScatterSymbolSeriesComponent,
            [IgxGeographicMapModule, IgxGeographicSymbolSeriesComponent,
             IgxScatterSeriesDynamicModule],
            [WorldLocations], ["/src/app/utilities/WorldLocations.ts"]));
        return configs;
    }

    public getConfig(component: Type<any>, modules: any[], dataSources?: any[], dataPaths?: string[]) {
        const imports: any[] = [];
        imports.push(component);  // add sample component for importing
        for (const m of modules) {
            imports.push(m); // add modules for importing
        }
        // add optional data sources
        if (dataSources !== undefined && dataSources.length > 0) {
            for (const ds of dataSources) {
                imports.push(ds);
            }
        }

        const fields = {
            additionalFiles: dataPaths,
            appModuleConfig: new AppModuleConfig({
                imports: imports,
                ngDeclarations: [component],
                ngImports: modules
            }),
            component,
            dependenciesType: DependenciesType.Maps,
            shortenComponentPathBy: "/geo-map/"
        };
        return new Config(fields);
    }
}
