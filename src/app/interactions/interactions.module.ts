import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxAvatarModule, IgxButtonModule,
    IgxCardModule, IgxDialogModule, IgxDragDropModule, IgxIconModule, IgxInputGroupModule,
    IgxOverlayService, IgxRippleModule, IgxSliderModule, IgxSwitchModule, IgxToggleModule,
    IgxTooltipModule
} from "igniteui-angular";
import { CardSampleModule } from "../layouts/card/card-sample-1/card-sample-1.module";
import { CustomizedDialogSampleComponent } from "./dialog/customized-dialog-sample/customized-dialog-sample.component";
import { DialogSample1Component } from "./dialog/dialog-sample-1/dialog-sample-1.component";
import { DialogSample2Component } from "./dialog/dialog-sample-2/dialog-sample-2.component";
import { DialogSample3Component } from "./dialog/dialog-sample-3/dialog-sample-3.component";
import { DialogComponent } from "./dialog/dialog.component";
import { DragAndDropSampleComponent } from "./drag-drop/drag-drop.component";
import { InteractionsRoutingModule } from "./interactions-routing.module";
import { MyDynamicCardComponent } from "./overlay/overlay-dynamic-card/overlay-dynamic-card.component";
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

@NgModule({
    declarations: [
        DialogComponent,
        DialogSample1Component,
        DialogSample2Component,
        DialogSample3Component,
        SliderSample1Component,
        SliderSample2Component,
        SliderSample3Component,
        SliderSample4Component,
        SliderSample5Component,
        RippleSample1Component,
        RippleSample2Component,
        RippleSample3Component,
        RippleSample4Component,
        RippleSample5Component,
        RippleSample6Component,
        ToggleComponent,
        ToggleSample1Component,
        ToggleSample2Component,
        ToggleSample3Component,
        TooltipRichComponent,
        TooltipSimpleComponent,
        OverlaySampleMain1Component,
        OverlaySampleMain2Component,
        OverlaySampleMain3Component,
        OverlayPositionSample1Component,
        OverlayPositionSample2Component,
        OverlayScrollSample1Component,
        OverlayScrollSample2Component,
        MyDynamicCardComponent,
        DragAndDropSampleComponent,
        CustomizedDialogSampleComponent
    ],
    entryComponents: [MyDynamicCardComponent],
    imports: [
        CommonModule,
        FormsModule,
        InteractionsRoutingModule,
        IgxAvatarModule,
        IgxButtonModule,
        IgxCardModule,
        IgxDialogModule,
        IgxDragDropModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxRippleModule,
        IgxSliderModule,
        IgxSwitchModule,
        IgxTooltipModule,
        IgxToggleModule,
        CardSampleModule
    ],
    providers: [IgxOverlayService]
})
export class InteractionsModule { }
