import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BulletGraphAnimationComponent } from "./bullet-graph-animation/bullet-graph-animation.component";
import { BulletGraphBackgroundComponent } from "./bullet-graph-background/bullet-graph-background.component";
import { BulletGraphLabelsComponent } from "./bullet-graph-labels/bullet-graph-labels.component";
import { BulletGraphMeasuresComponent } from "./bullet-graph-measures/bullet-graph-measures.component";
import { BulletGraphRangesComponent } from "./bullet-graph-ranges/bullet-graph-ranges.component";
import { BulletGraphScaleComponent } from "./bullet-graph-scale/bullet-graph-scale.component";
import { BulletGraphTickmarksComponent } from "./bullet-graph-tickmarks/bullet-graph-tickmarks.component";
import { gaugesRoutesData } from "./gauges-routes-data";
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

export const gaugesRoutes: Routes = [
    {
        component: BulletGraphAnimationComponent,
        data: gaugesRoutesData["bullet-graph-animation"],
        path: "bullet-graph-animation"
    },
    {
        component: BulletGraphLabelsComponent,
        data: gaugesRoutesData["bullet-graph-labels"],
        path: "bullet-graph-labels"
    },
    {
        component: BulletGraphBackgroundComponent,
        data: gaugesRoutesData["bullet-graph-background"],
        path: "bullet-graph-background"
    },
    {
        component: BulletGraphRangesComponent,
        data: gaugesRoutesData["bullet-graph-ranges"],
        path: "bullet-graph-ranges"
    },
    {
        component: BulletGraphScaleComponent,
        data: gaugesRoutesData["bullet-graph-scale"],
        path: "bullet-graph-scale"
    },
    {
        component: BulletGraphTickmarksComponent,
        data: gaugesRoutesData["bullet-graph-tickmarks"],
        path: "bullet-graph-tickmarks"
    },
    {
        component: BulletGraphMeasuresComponent,
        data: gaugesRoutesData["bullet-graph-measures"],
        path: "bullet-graph-measures"
    },
    {
        component: RadialGaugeAnimationComponent,
        data: gaugesRoutesData["radial-gauge-animation"],
        path: "radial-gauge-animation"
    },
    {
        component: RadialGaugeLabelsComponent,
        data: gaugesRoutesData["radial-gauge-labels"],
        path: "radial-gauge-labels"
    },
    {
        component: RadialGaugeNeedleComponent,
        data: gaugesRoutesData["radial-gauge-needle"],
        path: "radial-gauge-needle"
    },
    {
        component: RadialGaugeScaleComponent,
        data: gaugesRoutesData["radial-gauge-scale"],
        path: "radial-gauge-scale"
    },
    {
        component: RadialGaugeTickmarksComponent,
        data: gaugesRoutesData["radial-gauge-tickmarks"],
        path: "radial-gauge-tickmarks"
    },
    {
        component: RadialGaugeRangesComponent,
        data: gaugesRoutesData["radial-gauge-ranges"],
        path: "radial-gauge-ranges"
    },
    {
        component: RadialGaugeBackingComponent,
        data: gaugesRoutesData["radial-gauge-backing"],
        path: "radial-gauge-backing"
    },
    {
        component: LinearGaugeAnimationComponent,
        data: gaugesRoutesData["linear-gauge-animation"],
        path: "linear-gauge-animation"
    },
    {
        component: LinearGaugeNeedleComponent,
        data: gaugesRoutesData["linear-gauge-needle"],
        path: "linear-gauge-needle"
    },
    {
        component: LinearGaugeBackingComponent,
        data: gaugesRoutesData["linear-gauge-backing"],
        path: "linear-gauge-backing"
    },
    {
        component: LinearGaugeLabelsComponent,
        data: gaugesRoutesData["linear-gauge-labels"],
        path: "linear-gauge-labels"
    },
    {
        component: LinearGaugeScaleComponent,
        data: gaugesRoutesData["linear-gauge-scale"],
        path: "linear-gauge-scale"
    },
    {
        component: LinearGaugeTickmarksComponent,
        data: gaugesRoutesData["linear-gauge-tickmarks"],
        path: "linear-gauge-tickmarks"
    },
    {
        component: LinearGaugeRangesComponent,
        data: gaugesRoutesData["linear-gauge-ranges"],
        path: "linear-gauge-ranges"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(gaugesRoutes)
    ]
})
export class GaugesRoutingModule {}
