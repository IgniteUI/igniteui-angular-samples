// tslint:disable:no-string-literal
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogSample1Component } from './dialog/dialog-sample-1/dialog-sample-1.component';
import { DialogSample2Component } from './dialog/dialog-sample-2/dialog-sample-2.component';
import { DialogSample3Component } from './dialog/dialog-sample-3/dialog-sample-3.component';
import { DialogStylingSampleComponent } from './dialog/dialog-styling-sample/dialog-styling-sample.component';
import { DragDialogSampleComponent } from './drag-drop/dialog-sample/drag-dialog-sample.component';
import { EmailSampleComponent } from './drag-drop/email-sample/email-sample.component';
import { IconsSampleComponent } from './drag-drop/icons-sample/icons-sample.component';
import { KanbanSampleComponent } from './drag-drop/kanban-sample/kanban-sample.component';
import { ListReorderSampleComponent } from './drag-drop/list-reorder-sample/list-reorder-sample.component';
import { interactionsRoutesData } from './interactions-routes-data';
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

export const interactionsRoutes: Routes = [
    {
        component: DialogSample1Component,
        data: interactionsRoutesData['dialog-sample-1'],
        path: 'dialog-sample-1'
    },
    {
        component: DialogSample2Component,
        data: interactionsRoutesData['dialog-sample-2'],
        path: 'dialog-sample-2'
    },
    {
        component: DialogSample3Component,
        data: interactionsRoutesData['dialog-sample-3'],
        path: 'dialog-sample-3'
    },
    {
        component: DialogStylingSampleComponent,
        data: interactionsRoutesData['dialog-styling-sample'],
        path: 'dialog-styling-sample'
    },
    {
        component: SliderSample1Component,
        data: interactionsRoutesData['slider-sample-1'],
        path: 'slider-sample-1'
    },
    {
        component: SliderSample2Component,
        data: interactionsRoutesData['slider-sample-2'],
        path: 'slider-sample-2'
    },
    {
        component: SliderSample3Component,
        data: interactionsRoutesData['slider-sample-3'],
        path: 'slider-sample-3'
    },
    {
        component: SliderSample4Component,
        data: interactionsRoutesData['slider-sample-4'],
        path: 'slider-sample-4'
    },
    {
        component: SliderSample5Component,
        data: interactionsRoutesData['slider-sample-5'],
        path: 'slider-sample-5'
    },
    {
        component: SliderSample6Component,
        data: interactionsRoutesData['slider-sample-6'],
        path: 'slider-sample-6'
    },
    {
        component: SliderSecondaryTicksMirrorComponent,
        data: interactionsRoutesData['slider-secondary-ticks-mirror'],
        path: 'slider-secondary-ticks-mirror'
    },
    {
        component: SliderTicksBottomtotopLabelsComponent,
        data: interactionsRoutesData['slider-ticks-bottomtotop-labels'],
        path: 'slider-ticks-bottomtotop-labels'
    },
    {
        component: SliderTimeframeComponent,
        data: interactionsRoutesData['slider-timeframe'],
        path: 'slider-timeframe'
    },
    {
        component: SliderDiscreteTicksBottomComponent,
        data: interactionsRoutesData['discrete-slider-ticks-bottom'],
        path: 'discrete-slider-ticks-bottom'
    },
    {
        component: SliderPrimaryTicksTopComponent,
        data: interactionsRoutesData['slider-primary-ticks-top'],
        path: 'slider-primary-ticks-top'
    },
    {
        component: TickLabelsTemplateComponent,
        data: interactionsRoutesData['slider-tick-labels-template'],
        path: 'slider-tick-labels-template'
    },
    {
        component: AppSliderStylingComponent,
        data: interactionsRoutesData['slider-styling-sample'],
        path: 'slider-styling-sample'
    },
    {
        component: RippleSample2Component,
        data: interactionsRoutesData['ripple-sample-2'],
        path: 'ripple-sample-2'
    },
    {
        component: RippleSample3Component,
        data: interactionsRoutesData['ripple-sample-3'],
        path: 'ripple-sample-3'
    },
    {
        component: RippleSample4Component,
        data: interactionsRoutesData['ripple-sample-4'],
        path: 'ripple-sample-4'
    },
    {
        component: RippleSample5Component,
        data: interactionsRoutesData['ripple-sample-5'],
        path: 'ripple-sample-5'
    },
    {
        component: RippleSample6Component,
        data: interactionsRoutesData['ripple-sample-6'],
        path: 'ripple-sample-6'
    },
    {
        component: ToggleComponent,
        data: interactionsRoutesData['toggle'],
        path: 'toggle'
    },
    {
        component: ToggleSample1Component,
        data: interactionsRoutesData['toggle-sample-1'],
        path: 'toggle-sample-1'
    },
    {
        component: ToggleSample2Component,
        data: interactionsRoutesData['toggle-sample-2'],
        path: 'toggle-sample-2'
    },
    {
        component: ToggleSample3Component,
        data: interactionsRoutesData['toggle-sample-3'],
        path: 'toggle-sample-3'
    },
    {
        component: ToggleSample4Component,
        data: interactionsRoutesData['toggle-sample-4'],
        path: 'toggle-sample-4'
    },
    {
        component: TooltipSimpleComponent,
        data: interactionsRoutesData['tooltip-simple'],
        path: 'tooltip-simple'
    },
    {
        component: TooltipRichComponent,
        data: interactionsRoutesData['tooltip-rich'],
        path: 'tooltip-rich'
    },
    {
        component: TooltipStyleComponent,
        data: interactionsRoutesData['tooltip-style'],
        path: 'tooltip-style'
    },
    {
        component: OverlaySampleMain1Component,
        data: interactionsRoutesData['overlay-sample-main-1'],
        path: 'overlay-sample-main-1'
    },
    {
        component: OverlaySampleMain2Component,
        data: interactionsRoutesData['overlay-sample-main-2'],
        path: 'overlay-sample-main-2'
    },
    {
        component: OverlaySampleMain3Component,
        data: interactionsRoutesData['overlay-sample-main-3'],
        path: 'overlay-sample-main-3'
    },
    {
        component: OverlayPositionSample1Component,
        data: interactionsRoutesData['overlay-position-sample-1'],
        path: 'overlay-position-sample-1'
    },
    {
        component: OverlayPositionSample2Component,
        data: interactionsRoutesData['overlay-position-sample-2'],
        path: 'overlay-position-sample-2'
    },
    {
        component: OverlayPositionSample3Component,
        data: interactionsRoutesData['overlay-position-sample-3'],
        path: 'overlay-position-sample-3'
    },
    {
        component: OverlayScrollSample1Component,
        data: interactionsRoutesData['overlay-scroll-sample-1'],
        path: 'overlay-scroll-sample-1'
    },
    {
        component: OverlayScrollSample2Component,
        data: interactionsRoutesData['overlay-scroll-sample-2'],
        path: 'overlay-scroll-sample-2'
    },
    {
        component: OverlayPresetSettingsSampleComponent,
        data: interactionsRoutesData['overlay-preset-settings-sample'],
        path: 'overlay-preset-settings-sample'
    },
    {
        component: ListReorderSampleComponent,
        data: interactionsRoutesData['list-reorder-sample'],
        path: 'list-reorder-sample'
    },
    {
        component: OverlayStylingComponent,
        data: interactionsRoutesData['overlay-styling'],
        path: 'overlay-styling-simple'
    },
    {
        component: EmailSampleComponent,
        data: interactionsRoutesData['email-sample'],
        path: 'email-sample'
    },
    {
        component: KanbanSampleComponent,
        data: interactionsRoutesData['kanban-sample'],
        path: 'kanban-sample'
    },
    {
        component: DragDialogSampleComponent,
        data: interactionsRoutesData['drag-dialog-sample'],
        path: 'drag-dialog-sample'
    },
    {
        component: IconsSampleComponent,
        data: interactionsRoutesData['icons-sample'],
        path: 'icons-sample'
    },
    {
        component: RippleStylingSampleComponent,
        data: interactionsRoutesData['ripple-styling'],
        path: 'ripple-styling'
    },
    {
        component: QueryBuilderSample1Component,
        data: interactionsRoutesData['query-builder-sample-1'],
        path: 'query-builder-sample-1'
    },
    {
        component: QueryBuilderStyleComponent,
        data: interactionsRoutesData['query-builder-style'],
        path: 'query-builder-style'
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
