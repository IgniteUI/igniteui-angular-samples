import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IgxButtonModule } from "igniteui-angular";
import { IgxBulletGraphModule } from "igniteui-angular-gauges/ES5/igx-bullet-graph-module";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges/ES5/igx-linear-gauge-module";
import { IgxRadialGaugeModule } from "igniteui-angular-gauges/ES5/igx-radial-gauge-module";

import { BulletGraphAnimationComponent } from "./bullet-graph-animation/bullet-graph-animation.component";
import { BulletGraphBackgroundComponent } from "./bullet-graph-background/bullet-graph-background.component";
import { BulletGraphLabelsComponent } from "./bullet-graph-labels/bullet-graph-labels.component";
import { BulletGraphMeasuresComponent } from "./bullet-graph-measures/bullet-graph-measures.component";
import { BulletGraphRangesComponent } from "./bullet-graph-ranges/bullet-graph-ranges.component";
import { BulletGraphScaleComponent } from "./bullet-graph-scale/bullet-graph-scale.component";
import { BulletGraphTickmarksComponent } from "./bullet-graph-tickmarks/bullet-graph-tickmarks.component";
import { LinearGaugeAnimationComponent } from "./linear-gauge-animation/linear-gauge-animation.component";
import { LinearGaugeBackingComponent } from "./linear-gauge-backing/linear-gauge-backing.component";
import { LinearGaugeLabelsComponent } from "./linear-gauge-labels/linear-gauge-labels.component";
import { LinearGaugeNeedleComponent } from "./linear-gauge-needle/linear-gauge-needle.component";
import { LinearGaugeRangesComponent } from "./linear-gauge-ranges/linear-gauge-ranges.component";
import { LinearGaugeScaleComponent } from "./linear-gauge-scale/linear-gauge-scale.component";
import { LinearGaugeTickmarksComponent } from "./linear-gauge-tickmarks/linear-gauge-tickmarks.component";
import { RadialGaugeAnimationComponent } from "./radial-gauge-animation/radial-gauge-animation.component";
import { RadialGaugeBackingComponent } from "./radial-gauge-backing/radial-gauge-backing.component";
import { RadialGaugeLabelsComponent } from "./radial-gauge-labels/radial-gauge-labels.component";
import { RadialGaugeNeedleComponent } from "./radial-gauge-needle/radial-gauge-needle.component";
import { RadialGaugeRangesComponent } from "./radial-gauge-ranges/radial-gauge-ranges.component";
import { RadialGaugeScaleComponent } from "./radial-gauge-scale/radial-gauge-scale.component";
import { RadialGaugeTickmarksComponent } from "./radial-gauge-tickmarks/radial-gauge-tickmarks.component";

@NgModule({
    declarations: [
        BulletGraphAnimationComponent,
        BulletGraphBackgroundComponent,
        BulletGraphLabelsComponent,
        BulletGraphRangesComponent,
        BulletGraphScaleComponent,
        BulletGraphTickmarksComponent,
        BulletGraphMeasuresComponent,
        LinearGaugeAnimationComponent,
        LinearGaugeNeedleComponent,
        LinearGaugeBackingComponent,
        LinearGaugeLabelsComponent,
        LinearGaugeScaleComponent,
        LinearGaugeTickmarksComponent,
        LinearGaugeRangesComponent,
        RadialGaugeBackingComponent,
        RadialGaugeAnimationComponent,
        RadialGaugeLabelsComponent,
        RadialGaugeNeedleComponent,
        RadialGaugeScaleComponent,
        RadialGaugeTickmarksComponent,
        RadialGaugeRangesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxBulletGraphModule,
        IgxLinearGaugeModule,
        IgxRadialGaugeModule,
        IgxButtonModule
     ]
})
export class GaugeSamplesModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: GaugeSamplesModule
        };
    }
}
