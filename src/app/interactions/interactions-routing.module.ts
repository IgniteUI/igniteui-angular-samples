import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DialogSample1Component } from "./dialog/dialog-sample-1/dialog-sample-1.component";
import { DialogSample2Component } from "./dialog/dialog-sample-2/dialog-sample-2.component";
import { DialogSample3Component } from "./dialog/dialog-sample-3/dialog-sample-3.component";
import { DialogComponent } from "./dialog/dialog.component";
import { DragAndDropSampleComponent } from "./drag-drop/drag-drop.component";
import { OverlaySampleMain1Component } from "./overlay/overlay-main-1/overlay-main-sample-1.component";
import { OverlaySampleMain2Component } from "./overlay/overlay-main-2/overlay-main-sample-2.component";
import { OverlaySampleMain3Component } from "./overlay/overlay-main-3/overlay-main-sample-3.component";
import { OverlayPositionSample1Component } from "./overlay/overlay-positioning-1/overlay-position-sample-1.component";
import { OverlayPositionSample2Component } from "./overlay/overlay-positioning-2/overlay-position-sample-2.component";
import { OverlayScrollSample1Component } from "./overlay/overlay-scroll-1/overlay-scroll-sample-1.component";
import { OverlayScrollSample2Component } from "./overlay/overlay-scroll-2/overlay-scroll-sample-2.component";
import { RippleSample1Component } from "./ripple/ripple-sample-1/ripple-sample-1.component";
import { RippleSample2Component } from "./ripple/ripple-sample-2/ripple-sample-2.component";
import { RippleSample3Component } from "./ripple/ripple-sample-3/ripple-sample-3.component";
import { RippleSample4Component } from "./ripple/ripple-sample-4/ripple-sample-4.component";
import { RippleSample5Component } from "./ripple/ripple-sample-5/ripple-sample-5.component";
import { RippleSample6Component } from "./ripple/ripple-sample-6/ripple-sample-6.component";
import { SliderSample1Component } from "./slider/slider-sample-1/slider-sample-1.component";
import { SliderSample2Component } from "./slider/slider-sample-2/slider-sample-2.component";
import { SliderSample3Component } from "./slider/slider-sample-3/slider-sample-3.component";
import { SliderSample4Component } from "./slider/slider-sample-4/slider-sample-4.component";
import { SliderSample5Component } from "./slider/slider-sample-5/slider-sample-5.component";
import { ToggleSample1Component } from "./toggle/toggle-sample-1/toggle-sample-1.component";
import { ToggleSample2Component } from "./toggle/toggle-sample-2/toggle-sample-2.component";
import { ToggleSample3Component } from "./toggle/toggle-sample-3/toggle-sample-3.component";
import { ToggleComponent } from "./toggle/toggle.component";
import { TooltipRichComponent } from "./tooltip/tooltip-rich/tooltip-rich.component";
import { TooltipSimpleComponent } from "./tooltip/tooltip-simple/tooltip-simple.component";

export const interactionsRoutes: Routes = [
    {
        component: DialogComponent,
        data: { displayName: "Various Dialogs", parentName: "Dialog" },
        path: "dialog"
    },
    {
        component: DialogSample1Component,
        data: { displayName: "Completed Action Dialog", parentName: "Dialog" },
        path: "dialog-sample-1"
    },
    {
        component: DialogSample2Component,
        data: { displayName: "Confirmation Dialog", parentName: "Dialog" },
        path: "dialog-sample-2"
    },
    {
        component: DialogSample3Component,
        data: { displayName: "Sign-in form Dialog", parentName: "Dialog" },
        path: "dialog-sample-3"
    },
    {
        component: SliderSample1Component,
        data: { displayName: "Slider Lower and Upper range values", parentName: "Slider" },
        path: "slider-sample-1"
    },
    {
        component: SliderSample2Component,
        data: { displayName: "Continuous Slider", parentName: "Slider" },
        path: "slider-sample-2"
    },
    {
        component: SliderSample3Component,
        data: { displayName: "Discrete Slider", parentName: "Slider" },
        path: "slider-sample-3"
    },
    {
        component: SliderSample4Component,
        data: { displayName: "Range Slider", parentName: "Slider" },
        path: "slider-sample-4"
    },
    {
        component: SliderSample5Component,
        data: { displayName: "Slider Lower and Upper bounds", parentName: "Slider" },
        path: "slider-sample-5"
    },
    {
        component: RippleSample1Component,
        data: { displayName: "Ripple Overview", parentName: "Ripple" },
        path: "ripple-sample-1"
    },
    {
        component: RippleSample2Component,
        data: { displayName: "Ripple Target", parentName: "Ripple" },
        path: "ripple-sample-2"
    },
    {
        component: RippleSample3Component,
        data: { displayName: "Ripple Centered Effect", parentName: "Ripple" },
        path: "ripple-sample-3"
    },
    {
        component: RippleSample4Component,
        data: { displayName: "Ripple Duration", parentName: "Ripple" },
        path: "ripple-sample-4"
    },
    {
        component: RippleSample5Component,
        data: { displayName: "Ripple Effect", parentName: "Ripple" },
        path: "ripple-sample-5"
    },
    {
        component: RippleSample6Component,
        data: { displayName: "Ripple Color", parentName: "Ripple" },
        path: "ripple-sample-6"
    },
    {
        component: ToggleComponent,
        data: { displayName: "Toggle Overview", parentName: "Toggle" },
        path: "toggle"
    },
    {
        component: ToggleSample1Component,
        data: { displayName: "Toggle Content", parentName: "Toggle" },
        path: "toggle-sample-1"
    },
    {
        component: ToggleSample2Component,
        data: { displayName: "Automatic Toggle Actions", parentName: "Toggle" },
        path: "toggle-sample-2"
    },
    {
        component: ToggleSample3Component,
        data: { displayName: "Toggle Service Provider", parentName: "Toggle" },
        path: "toggle-sample-3"
    },
    {
        component: TooltipSimpleComponent,
        data: { displayName: "Simple Tooltip", parentName: "Tooltip" },
        path: "tooltip-simple"
    },
    {
        component: TooltipRichComponent,
        data: { displayName: "Rich Tooltip", parentName: "Tooltip" },
        path: "tooltip-rich"
    },
    {
        component: OverlaySampleMain1Component,
        data: { displayName: "Overlay Main Sample 1", parentName: "Overlay" },
        path: "overlay-sample-main-1"
    },
    {
        component: OverlaySampleMain2Component,
        data: { displayName: "Overlay Main Sample 2", parentName: "Overlay" },
        path: "overlay-sample-main-2"
    },
    {
        component: OverlaySampleMain3Component,
        data: { displayName: "Overlay Main Sample 3", parentName: "Overlay" },
        path: "overlay-sample-main-3"
    },
    {
        component: OverlayPositionSample1Component,
        data: { displayName: "Overlay Position Sample 1", parentName: "Overlay" },
        path: "overlay-position-sample-1"
    },
    {
        component: OverlayPositionSample2Component,
        data: { displayName: "Overlay Position Sample 2", parentName: "Overlay" },
        path: "overlay-position-sample-2"
    },
    {
        component: OverlayScrollSample1Component,
        data: { displayName: "Overlay Scroll Sample 1", parentName: "Overlay" },
        path: "overlay-scroll-sample-1"
    },
    {
        component: OverlayScrollSample2Component,
        data: { displayName: "Overlay Scroll Sample 2", parentName: "Overlay" },
        path: "overlay-scroll-sample-2"
    },
    {
        component: DragAndDropSampleComponent,
        data: { displayName: "Drag and drop sample", parentName: "Drag and Drop" },
        path: "drag-drop-sample"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(interactionsRoutes)
    ]
})
export class InteractionsRoutingModule {}
