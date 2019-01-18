import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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

export const gaugesRoutes: Routes = [
    {
        component: BulletGraphAnimationComponent,
        data: { displayName: "Bullet Graph Animation", parentName: "Bullet Graph" },
        path: "bullet-graph-animation"
    },
    {
        component: BulletGraphLabelsComponent,
        data: { displayName: "Bullet Graph Labels", parentName: "Bullet Graph" },
        path: "bullet-graph-labels"
    },
    {
        component: BulletGraphBackgroundComponent,
        data: { displayName: "Bullet Graph Background", parentName: "Bullet Graph" },
        path: "bullet-graph-background"
    },
    {
        component: BulletGraphRangesComponent,
        data: { displayName: "Bullet Graph Ranges", parentName: "Bullet Graph" },
        path: "bullet-graph-ranges"
    },
    {
        component: BulletGraphScaleComponent,
        data: { displayName: "Bullet Graph Scale", parentName: "Bullet Graph" },
        path: "bullet-graph-scale"
    },
    {
        component: BulletGraphTickmarksComponent,
        data: { displayName: "Bullet Graph Tickmarks", parentName: "Bullet Graph" },
        path: "bullet-graph-tickmarks"
    },
    {
        component: BulletGraphMeasuresComponent,
        data: { displayName: "Bullet Graph Measures", parentName: "Bullet Graph" },
        path: "bullet-graph-measures"
    },
    {
        component: RadialGaugeAnimationComponent,
        data: { displayName: "Radial Gauge Animation", parentName: "Radial Gauge" },
        path: "radial-gauge-animation"
    },
    {
        component: RadialGaugeLabelsComponent,
        data: { displayName: "Radial Gauge Labels", parentName: "Radial Gauge" },
        path: "radial-gauge-labels"
    },
    {
        component: RadialGaugeNeedleComponent,
        data: { displayName: "Radial Gauge Needle", parentName: "Radial Gauge" },
        path: "radial-gauge-needle"
    },
    {
        component: RadialGaugeScaleComponent,
        data: { displayName: "Radial Gauge Scale", parentName: "Radial Gauge" },
        path: "radial-gauge-scale"
    },
    {
        component: RadialGaugeTickmarksComponent,
        data: { displayName: "Radial Gauge Tickmarks", parentName: "Radial Gauge" },
        path: "radial-gauge-tickmarks"
    },
    {
        component: RadialGaugeRangesComponent,
        data: { displayName: "Radial Gauge Ranges", parentName: "Radial Gauge" },
        path: "radial-gauge-ranges"
    },
    {
        component: RadialGaugeBackingComponent,
        data: { displayName: "Radial Gauge Backing", parentName: "Radial Gauge" },
        path: "radial-gauge-backing"
    },
    {
        component: LinearGaugeAnimationComponent,
        data: { displayName: "Linear Gauge Animation", parentName: "Linear Gauge" },
        path: "linear-gauge-animation"
    },
    {
        component: LinearGaugeNeedleComponent,
        data: { displayName: "Linear Gauge Needle", parentName: "Linear Gauge" },
        path: "linear-gauge-needle"
    },
    {
        component: LinearGaugeBackingComponent,
        data: { displayName: "Linear Gauge Backing", parentName: "Linear Gauge" },
        path: "linear-gauge-backing"
    },
    {
        component: LinearGaugeLabelsComponent,
        data: { displayName: "Linear Gauge Labels", parentName: "Linear Gauge" },
        path: "linear-gauge-labels"
    },
    {
        component: LinearGaugeScaleComponent,
        data: { displayName: "Linear Gauge Scale", parentName: "Linear Gauge" },
        path: "linear-gauge-scale"
    },
    {
        component: LinearGaugeTickmarksComponent,
        data: { displayName: "Linear Gauge Tickmarks", parentName: "Linear Gauge" },
        path: "linear-gauge-tickmarks"
    },
    {
        component: LinearGaugeRangesComponent,
        data: { displayName: "Linear Gauge Ranges", parentName: "Linear Gauge" },
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
