// tslint:disable:no-string-literal
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomizedDialogSampleComponent } from "./dialog/customized-dialog-sample/customized-dialog-sample.component";
import { DialogSample1Component } from "./dialog/dialog-sample-1/dialog-sample-1.component";
import { DialogSample2Component } from "./dialog/dialog-sample-2/dialog-sample-2.component";
import { DialogSample3Component } from "./dialog/dialog-sample-3/dialog-sample-3.component";
import { DialogComponent } from "./dialog/dialog.component";
import { DragAndDropSampleComponent } from "./drag-drop/drag-drop.component";
import { interactionsRoutesData } from "./interactions-routes-data";
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
        data: interactionsRoutesData["dialog"],
        path: "dialog"
    },
    {
        component: DialogSample1Component,
        data: interactionsRoutesData["dialog-sample-1"],
        path: "dialog-sample-1"
    },
    {
        component: DialogSample2Component,
        data: interactionsRoutesData["dialog-sample-2"],
        path: "dialog-sample-2"
    },
    {
        component: DialogSample3Component,
        data: interactionsRoutesData["dialog-sample-3"],
        path: "dialog-sample-3"
    },
    {
        component: CustomizedDialogSampleComponent,
        data: interactionsRoutesData["customized-dialog-sample"],
        path: "customized-dialog-sample"
    },
    {
        component: SliderSample1Component,
        data: interactionsRoutesData["slider-sample-1"],
        path: "slider-sample-1"
    },
    {
        component: SliderSample2Component,
        data: interactionsRoutesData["slider-sample-2"],
        path: "slider-sample-2"
    },
    {
        component: SliderSample3Component,
        data: interactionsRoutesData["slider-sample-3"],
        path: "slider-sample-3"
    },
    {
        component: SliderSample4Component,
        data: interactionsRoutesData["slider-sample-4"],
        path: "slider-sample-4"
    },
    {
        component: SliderSample5Component,
        data: interactionsRoutesData["slider-sample-5"],
        path: "slider-sample-5"
    },
    {
        component: RippleSample1Component,
        data: interactionsRoutesData["ripple-sample-1"],
        path: "ripple-sample-1"
    },
    {
        component: RippleSample2Component,
        data: interactionsRoutesData["ripple-sample-2"],
        path: "ripple-sample-2"
    },
    {
        component: RippleSample3Component,
        data: interactionsRoutesData["ripple-sample-3"],
        path: "ripple-sample-3"
    },
    {
        component: RippleSample4Component,
        data: interactionsRoutesData["ripple-sample-4"],
        path: "ripple-sample-4"
    },
    {
        component: RippleSample5Component,
        data: interactionsRoutesData["ripple-sample-5"],
        path: "ripple-sample-5"
    },
    {
        component: RippleSample6Component,
        data: interactionsRoutesData["ripple-sample-6"],
        path: "ripple-sample-6"
    },
    {
        component: ToggleComponent,
        data: interactionsRoutesData["toggle"],
        path: "toggle"
    },
    {
        component: ToggleSample1Component,
        data: interactionsRoutesData["toggle-sample-1"],
        path: "toggle-sample-1"
    },
    {
        component: ToggleSample2Component,
        data: interactionsRoutesData["toggle-sample-2"],
        path: "toggle-sample-2"
    },
    {
        component: ToggleSample3Component,
        data: interactionsRoutesData["toggle-sample-3"],
        path: "toggle-sample-3"
    },
    {
        component: TooltipSimpleComponent,
        data: interactionsRoutesData["tooltip-simple"],
        path: "tooltip-simple"
    },
    {
        component: TooltipRichComponent,
        data: interactionsRoutesData["tooltip-rich"],
        path: "tooltip-rich"
    },
    {
        component: OverlaySampleMain1Component,
        data: interactionsRoutesData["overlay-sample-main-1"],
        path: "overlay-sample-main-1"
    },
    {
        component: OverlaySampleMain2Component,
        data: interactionsRoutesData["overlay-sample-main-2"],
        path: "overlay-sample-main-2"
    },
    {
        component: OverlaySampleMain3Component,
        data: interactionsRoutesData["overlay-sample-main-3"],
        path: "overlay-sample-main-3"
    },
    {
        component: OverlayPositionSample1Component,
        data: interactionsRoutesData["overlay-position-sample-1"],
        path: "overlay-position-sample-1"
    },
    {
        component: OverlayPositionSample2Component,
        data: interactionsRoutesData["overlay-position-sample-2"],
        path: "overlay-position-sample-2"
    },
    {
        component: OverlayScrollSample1Component,
        data: interactionsRoutesData["overlay-scroll-sample-1"],
        path: "overlay-scroll-sample-1"
    },
    {
        component: OverlayScrollSample2Component,
        data: interactionsRoutesData["overlay-scroll-sample-2"],
        path: "overlay-scroll-sample-2"
    },
    {
        component: DragAndDropSampleComponent,
        data: interactionsRoutesData["drag-drop-sample"],
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
export class InteractionsRoutingModule { }
