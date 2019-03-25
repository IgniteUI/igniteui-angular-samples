/* tslint:disable:object-literal-sort-keys */
import { IgxBulletGraphModule } from "igniteui-angular-gauges/ES5/igx-bullet-graph-module";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges/ES5/igx-linear-gauge-module";
import { IgxRadialGaugeModule } from "igniteui-angular-gauges/ES5/igx-radial-gauge-module";

import {
    BulletGraphAnimationComponent
} from "../../src/app/gauges/bullet-graph-animation/bullet-graph-animation.component";
import {
    BulletGraphBackgroundComponent
} from "../../src/app/gauges/bullet-graph-background/bullet-graph-background.component";
import {
    BulletGraphLabelsComponent
} from "../../src/app/gauges/bullet-graph-labels/bullet-graph-labels.component";
import {
    BulletGraphMeasuresComponent
} from "../../src/app/gauges/bullet-graph-measures/bullet-graph-measures.component";
import {
    BulletGraphRangesComponent
} from "../../src/app/gauges/bullet-graph-ranges/bullet-graph-ranges.component";
import {
    BulletGraphScaleComponent
} from "../../src/app/gauges/bullet-graph-scale/bullet-graph-scale.component";
import {
    BulletGraphTickmarksComponent
} from "../../src/app/gauges/bullet-graph-tickmarks/bullet-graph-tickmarks.component";
import {
    LinearGaugeAnimationComponent
} from "../../src/app/gauges/linear-gauge-animation/linear-gauge-animation.component";
import {
    LinearGaugeBackingComponent
} from "../../src/app/gauges/linear-gauge-backing/linear-gauge-backing.component";
import {
    LinearGaugeLabelsComponent
} from "../../src/app/gauges/linear-gauge-labels/linear-gauge-labels.component";
import {
    LinearGaugeNeedleComponent
} from "../../src/app/gauges/linear-gauge-needle/linear-gauge-needle.component";
import {
    LinearGaugeRangesComponent
} from "../../src/app/gauges/linear-gauge-ranges/linear-gauge-ranges.component";
import {
    LinearGaugeScaleComponent
} from "../../src/app/gauges/linear-gauge-scale/linear-gauge-scale.component";
import {
    LinearGaugeTickmarksComponent
} from "../../src/app/gauges/linear-gauge-tickmarks/linear-gauge-tickmarks.component";
import {
    RadialGaugeAnimationComponent
} from "../../src/app/gauges/radial-gauge-animation/radial-gauge-animation.component";
import {
    RadialGaugeBackingComponent
} from "../../src/app/gauges/radial-gauge-backing/radial-gauge-backing.component";
import {
    RadialGaugeLabelsComponent
} from "../../src/app/gauges/radial-gauge-labels/radial-gauge-labels.component";
import {
    RadialGaugeNeedleComponent
} from "../../src/app/gauges/radial-gauge-needle/radial-gauge-needle.component";
import {
    RadialGaugeRangesComponent
} from "../../src/app/gauges/radial-gauge-ranges/radial-gauge-ranges.component";
import {
    RadialGaugeScaleComponent
} from "../../src/app/gauges/radial-gauge-scale/radial-gauge-scale.component";
import {
    RadialGaugeTickmarksComponent
} from "../../src/app/gauges/radial-gauge-tickmarks/radial-gauge-tickmarks.component";

import { IgxButtonModule } from "igniteui-angular";
import { DependenciesType } from "../services/DependenciesType";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class GaugesConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: BulletGraphAnimationComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBulletGraphModule, BulletGraphAnimationComponent, IgxButtonModule],
                ngImports: [IgxBulletGraphModule, IgxButtonModule],
                ngDeclarations: [BulletGraphAnimationComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: BulletGraphBackgroundComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBulletGraphModule, BulletGraphBackgroundComponent],
                ngImports: [IgxBulletGraphModule],
                ngDeclarations: [BulletGraphBackgroundComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: BulletGraphLabelsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBulletGraphModule, BulletGraphLabelsComponent],
                ngImports: [IgxBulletGraphModule],
                ngDeclarations: [BulletGraphLabelsComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: BulletGraphMeasuresComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBulletGraphModule, BulletGraphMeasuresComponent],
                ngImports: [IgxBulletGraphModule],
                ngDeclarations: [BulletGraphMeasuresComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: BulletGraphRangesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBulletGraphModule, BulletGraphRangesComponent],
                ngImports: [IgxBulletGraphModule],
                ngDeclarations: [BulletGraphRangesComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: BulletGraphScaleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBulletGraphModule, BulletGraphScaleComponent],
                ngImports: [IgxBulletGraphModule],
                ngDeclarations: [BulletGraphScaleComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: BulletGraphTickmarksComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBulletGraphModule, BulletGraphTickmarksComponent],
                ngImports: [IgxBulletGraphModule],
                ngDeclarations: [BulletGraphTickmarksComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: LinearGaugeAnimationComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxLinearGaugeModule, LinearGaugeAnimationComponent, IgxButtonModule],
                ngImports: [IgxLinearGaugeModule, IgxButtonModule],
                ngDeclarations: [LinearGaugeAnimationComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: LinearGaugeBackingComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxLinearGaugeModule, LinearGaugeBackingComponent],
                ngImports: [IgxLinearGaugeModule],
                ngDeclarations: [LinearGaugeBackingComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: LinearGaugeLabelsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxLinearGaugeModule, LinearGaugeLabelsComponent],
                ngImports: [IgxLinearGaugeModule],
                ngDeclarations: [LinearGaugeLabelsComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: LinearGaugeNeedleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxLinearGaugeModule, LinearGaugeNeedleComponent],
                ngImports: [IgxLinearGaugeModule],
                ngDeclarations: [LinearGaugeNeedleComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: LinearGaugeRangesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxLinearGaugeModule, LinearGaugeRangesComponent],
                ngImports: [IgxLinearGaugeModule],
                ngDeclarations: [LinearGaugeRangesComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: LinearGaugeScaleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxLinearGaugeModule, LinearGaugeScaleComponent],
                ngImports: [IgxLinearGaugeModule],
                ngDeclarations: [LinearGaugeScaleComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: LinearGaugeTickmarksComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxLinearGaugeModule, LinearGaugeTickmarksComponent],
                ngImports: [IgxLinearGaugeModule],
                ngDeclarations: [LinearGaugeTickmarksComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: RadialGaugeAnimationComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxRadialGaugeModule, RadialGaugeAnimationComponent, IgxButtonModule],
                ngImports: [IgxRadialGaugeModule, IgxButtonModule],
                ngDeclarations: [RadialGaugeAnimationComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: RadialGaugeBackingComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxRadialGaugeModule, RadialGaugeBackingComponent],
                ngImports: [IgxRadialGaugeModule],
                ngDeclarations: [RadialGaugeBackingComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: RadialGaugeLabelsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxRadialGaugeModule, RadialGaugeLabelsComponent],
                ngImports: [IgxRadialGaugeModule],
                ngDeclarations: [RadialGaugeLabelsComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: RadialGaugeNeedleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxRadialGaugeModule, RadialGaugeNeedleComponent],
                ngImports: [IgxRadialGaugeModule],
                ngDeclarations: [RadialGaugeNeedleComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: RadialGaugeRangesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxRadialGaugeModule, RadialGaugeRangesComponent],
                ngImports: [IgxRadialGaugeModule],
                ngDeclarations: [RadialGaugeRangesComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: RadialGaugeScaleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxRadialGaugeModule, RadialGaugeScaleComponent],
                ngImports: [IgxRadialGaugeModule],
                ngDeclarations: [RadialGaugeScaleComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        configs.push(new Config({
            component: RadialGaugeTickmarksComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxRadialGaugeModule, RadialGaugeTickmarksComponent],
                ngImports: [IgxRadialGaugeModule],
                ngDeclarations: [RadialGaugeTickmarksComponent]
            }),
            shortenComponentPathBy: "/gauges/",
            dependenciesType: DependenciesType.Gauges
        }));

        return configs;
    }
}
