import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    IgxAvatarModule,
    IgxButtonModule,
    IgxButtonGroupModule,
    IgxCardModule,
    IgxCheckboxModule,
    IgxChipsModule,
    IgxComboModule,
    IgxDialogModule,
    IgxDragDropModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxListModule,
    IgxOverlayService,
    IgxQueryBuilderModule,
    IgxRippleModule,
    IgxSliderModule,
    IgxSwitchModule,
    IgxToggleModule,
    IgxTooltipModule
} from '@infragistics/igniteui-angular';
import { LayoutsModule } from '../layouts/layouts.module';
import { DialogSample1Component } from './dialog/dialog-sample-1/dialog-sample-1.component';
import { DialogSample2Component } from './dialog/dialog-sample-2/dialog-sample-2.component';
import { DialogSample3Component } from './dialog/dialog-sample-3/dialog-sample-3.component';
import { DialogStylingSampleComponent } from './dialog/dialog-styling-sample/dialog-styling-sample.component';
import { DragDialogSampleComponent } from './drag-drop/dialog-sample/drag-dialog-sample.component';
import { EmailSampleComponent } from './drag-drop/email-sample/email-sample.component';
import { IconsSampleComponent } from './drag-drop/icons-sample/icons-sample.component';
import { KanbanSampleComponent } from './drag-drop/kanban-sample/kanban-sample.component';
import { ListReorderSampleComponent } from './drag-drop/list-reorder-sample/list-reorder-sample.component';
import { InteractionsRoutingModule } from './interactions-routing.module';
import { MyDynamicCardComponent } from './overlay/overlay-dynamic-card/overlay-dynamic-card.component';
import { OverlaySampleMain1Component } from './overlay/overlay-main-1/overlay-main-sample-1.component';
import { OverlaySampleMain2Component } from './overlay/overlay-main-2/overlay-main-sample-2.component';
import { OverlaySampleMain3Component } from './overlay/overlay-main-3/overlay-main-sample-3.component';
import { OverlayPositionSample1Component } from './overlay/overlay-positioning-1/overlay-position-sample-1.component';
import { OverlayPositionSample2Component } from './overlay/overlay-positioning-2/overlay-position-sample-2.component';
import { OverlayPositionSample3Component } from './overlay/overlay-positioning-3/overlay-position-sample-3.component';
import { OverlayPresetSettingsSampleComponent } from './overlay/overlay-preset-settings/overlay-preset-settings-sample.component';
import { OverlayScrollSample1Component } from './overlay/overlay-scroll-1/overlay-scroll-sample-1.component';
import { OverlayScrollSample2Component } from './overlay/overlay-scroll-2/overlay-scroll-sample-2.component';
import { OverlayStylingComponent } from './overlay/overlay-styling/overlay-styling.component';
import { QueryBuilderSample1Component } from './query-builder/query-builder-sample-1/query-builder-sample-1.component';
import { QueryBuilderStyleComponent } from './query-builder/query-builder-style/query-builder-style.component';
import { RippleSample2Component } from './ripple/ripple-sample-2/ripple-sample-2.component';
import { RippleSample3Component } from './ripple/ripple-sample-3/ripple-sample-3.component';
import { RippleSample4Component } from './ripple/ripple-sample-4/ripple-sample-4.component';
import { RippleSample5Component } from './ripple/ripple-sample-5/ripple-sample-5.component';
import { RippleSample6Component } from './ripple/ripple-sample-6/ripple-sample-6.component';
import { RippleStylingSampleComponent } from './ripple/ripple-stying/ripple-styling-sample.component';
import {
    SliderDiscreteTicksBottomComponent
} from './slider/discrete-slider-ticks-bottom/discrete-slider-ticks-bottom.component';
import {
    SliderPrimaryTicksTopComponent
} from './slider/slider-primary-ticks-top/slider-primary-ticks-top.component';
import { SliderSample1Component } from './slider/slider-sample-1/slider-sample-1.component';
import { SliderSample2Component } from './slider/slider-sample-2/slider-sample-2.component';
import { SliderSample3Component } from './slider/slider-sample-3/slider-sample-3.component';
import { SliderSample4Component } from './slider/slider-sample-4/slider-sample-4.component';
import { SliderSample5Component } from './slider/slider-sample-5/slider-sample-5.component';
import { SliderSample6Component } from './slider/slider-sample-6/slider-sample-6.component';
import {
    SliderSecondaryTicksMirrorComponent
} from './slider/slider-secondary-ticks-mirror/slider-secondary-ticks-mirror.component';
import { AppSliderStylingComponent } from './slider/slider-styling-sample/app-slider-styling.component';
import { TickLabelsTemplateComponent } from './slider/slider-tick-labels-template/tick-labels-template.component';
import {
    SliderTicksBottomtotopLabelsComponent
} from './slider/slider-ticks-bottomtotop-labels/slider-ticks-bottomtotop-labels.component';
import { SliderTimeframeComponent } from './slider/slider-timeframe/slider-timeframe.component';
import { ToggleSample1Component } from './toggle/toggle-sample-1/toggle-sample-1.component';
import { ToggleSample2Component } from './toggle/toggle-sample-2/toggle-sample-2.component';
import { ToggleSample3Component } from './toggle/toggle-sample-3/toggle-sample-3.component';
import { ToggleSample4Component } from './toggle/toggle-sample-4/toggle-sample-4.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TooltipRichComponent } from './tooltip/tooltip-rich/tooltip-rich.component';
import { TooltipSimpleComponent } from './tooltip/tooltip-simple/tooltip-simple.component';
import { TooltipStyleComponent } from './tooltip/tooltip-style/tooltip-style.component';

@NgModule({
    declarations: [
        DialogSample1Component,
        DialogSample2Component,
        DialogSample3Component,
        EmailSampleComponent,
        KanbanSampleComponent,
        ListReorderSampleComponent,
        DragDialogSampleComponent,
        IconsSampleComponent,
        MyDynamicCardComponent,
        SliderSample1Component,
        SliderSample2Component,
        SliderSample3Component,
        SliderSample4Component,
        SliderSample5Component,
        AppSliderStylingComponent,
        SliderSample6Component,
        SliderSecondaryTicksMirrorComponent,
        SliderDiscreteTicksBottomComponent,
        SliderTicksBottomtotopLabelsComponent,
        SliderPrimaryTicksTopComponent,
        SliderTimeframeComponent,
        TickLabelsTemplateComponent,
        QueryBuilderSample1Component,
        QueryBuilderStyleComponent,
        RippleSample2Component,
        RippleSample3Component,
        RippleSample4Component,
        RippleSample5Component,
        RippleSample6Component,
        RippleStylingSampleComponent,
        ToggleComponent,
        ToggleSample1Component,
        ToggleSample2Component,
        ToggleSample3Component,
        ToggleSample4Component,
        TooltipRichComponent,
        TooltipSimpleComponent,
        OverlaySampleMain1Component,
        OverlaySampleMain2Component,
        OverlaySampleMain3Component,
        OverlayPositionSample1Component,
        OverlayPositionSample2Component,
        OverlayPositionSample3Component,
        OverlayPresetSettingsSampleComponent,
        OverlayScrollSample1Component,
        OverlayScrollSample2Component,
        OverlayStylingComponent,
        MyDynamicCardComponent,
        DialogStylingSampleComponent,
        TooltipStyleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        InteractionsRoutingModule,
        IgxAvatarModule,
        IgxButtonModule,
        IgxButtonGroupModule,
        IgxCardModule,
        IgxCheckboxModule,
        IgxChipsModule,
        IgxDialogModule,
        IgxDragDropModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxListModule,
        IgxQueryBuilderModule,
        IgxRippleModule,
        IgxSliderModule,
        IgxSwitchModule,
        IgxTooltipModule,
        IgxToggleModule,
        IgxComboModule,
        IgxListModule,
        LayoutsModule
    ],
    providers: [IgxOverlayService]
})
export class InteractionsModule { }
