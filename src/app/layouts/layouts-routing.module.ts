// tslint:disable:no-string-literal
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarSample1Component } from './avatar/avatar-sample-1/avatar-sample-1.component';
import { AvatarSample2Component } from './avatar/avatar-sample-2/avatar-sample-2.component';
import { AvatarSample3Component } from './avatar/avatar-sample-3/avatar-sample-3.component';
import { AvatarSample4Component } from './avatar/avatar-sample-4/avatar-sample-4.component';
import { AvatarStylingSampleComponent } from './avatar/avatar-styling/avatar-styling.component';
import { AvatarCSSVariablesComponent } from './avatar/avatar-css-variables/avatar-css-variables.component';
import { CardSample1Component } from './card/card-sample-1/card-sample-1.component';
import { CardSample2Component } from './card/card-sample-2/card-sample-2.component';
import { CardSample3Component } from './card/card-sample-3/card-sample-3.component';
import { CardSample4Component } from './card/card-sample-4/card-sample-4.component';
import { CardStylingSampleComponent } from './card/card-styling-sample/card-styling-sample.component';
import { CardComponent } from './card/card.component';
import {
    CarouselAnimationsSampleComponent
} from './carousel/carousel-animations-sample/carousel-animations-sample.component';
import {
    CarouselNoNavigationSampleComponent
} from './carousel/carousel-no-navigation-sample/carousel-no-navigation-sample.component';
import {
    CarouselWithComponentsSampleComponent
} from './carousel/carousel-with-components-sample/carousel-with-components-sample.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DividerDashedComponent } from './divider/dashed/divider-dashed.component';
import { DividerDefaultComponent } from './divider/default/divider-default.component';
import { DividerInsetComponent } from './divider/inset/divider-inset.component';
import { DividerVerticalComponent } from './divider/vertical/divider-vertical.component';
import { DockManagerComponent } from './dock-manager/dock-manager-sample/dock-manager.component';
import { ExpansionPanelSample1Component } from './expansion-panel/expansion-sample-1/expansion-sample-1.component';
import { ExpansionPanelSample2Component } from './expansion-panel/expansion-sample-2/expansion-sample-2.component';
import { ExpansionPanelSample3Component } from './expansion-panel/expansion-sample-3/expansion-sample-3.component';
import { ExpansionPanelSample4Component } from './expansion-panel/expansion-sample-4/expansion-sample-4.component';
import { ExpansionPanelSample5Component } from './expansion-panel/expansion-sample-5/expansion-sample-5.component';
import { ExpansionPanelStylingComponent } from './expansion-panel/expansion-styling/expansion-styling.component';
import { LayoutAlignItemsComponent } from './layout/layout-align-items/layout-align-items.component';
import { LayoutContentSpaceComponent } from './layout/layout-content-space/layout-content-space.component';
import { LayoutCustomOrderComponent } from './layout/layout-custom-order/layout-custom-order.component';
import { LayoutDirectionColumnComponent } from './layout/layout-direction-column/layout-direction-column.component';
import { LayoutDirectionRowComponent } from './layout/layout-direction-row/layout-direction-row.component';
import { LayoutJustifyContentComponent } from './layout/layout-justify-content/layout-justify-content.component';
import { LayoutSampleComponent } from './layout/layout-sample/layout-sample.component';
import { LayoutWrapComponent } from './layout/layout-wrap/layout-wrap.component';
import { layoutsRoutesData } from './layouts-routes-data';
import {
    SplitterHorizontalSampleComponent
} from './splitter/splitter-horizontal-sample/splitter-horizontal-sample.component';
import { SplitterNestedSampleComponent } from './splitter/splitter-nested-sample/splitter-nested-sample.component';
import { SplitterStylingSampleComponent } from './splitter/splitter-styling-sample/splitter-styling-sample.component';
import { TabbarSample1Component } from './tabbar/tabbar-sample-1/tabbar-sample-1.component';
import { TabbarSample2Component } from './tabbar/tabbar-sample-2/tabbar-sample-2.component';
import { TabbarSample3Component } from './tabbar/tabbar-sample-3/components/tabbar-sample-3.component';
import { TabbarStyleComponent } from './tabbar/tabbar-style/tabbar-style.component';
import { TabbarView1Component } from './tabbar/views/view1/view1.component';
import { TabbarView2Component } from './tabbar/views/view2/view2.component';
import { TabbarView3Component } from './tabbar/views/view3/view3.component';
import { TabsSample1Component } from './tabs/tabs-sample-1/tabs-sample-1.component';
import { TabsSample2Component } from './tabs/tabs-sample-2/tabs-sample-2.component';
import { TabsSample3Component } from './tabs/tabs-sample-3/tabs-sample-3.component';
import { TabsSample4Component } from './tabs/tabs-sample-4/components/tabs-sample-4.component';
import { TabsStyleComponent } from './tabs/tabs-style/tabs-style.component';
import { TabsAlignmentComponent } from './tabs/tabs-alignment/tabs-alignment.component';
import { TabsHeaderPrefixSuffixComponent } from './tabs/tabs-header-prefix-suffix/tabs-header-prefix-suffix';
import { View1Component } from './tabs/views/view1/view1.component';
import { View2Component } from './tabs/views/view2/view2.component';
import { View3Component } from './tabs/views/view3/view3.component';
import { AccordionSample1Component } from './accordion/accordion-sample-1/accordion-sample-1.component';
import { AccordionSample2Component } from './accordion/accordion-sample-2/accordion-sample-2.component';
import { AccordionSample3Component } from './accordion/accordion-sample-3/accordion-sample-3.component';
import {
    StepperLabelPositionAndOrientationSampleComponent
} from './stepper/stepper-label-position-and-orientation-sample/stepper-label-position-and-orientation-sample.component';
import { StepperLinearSampleComponent } from './stepper/stepper-linear-sample/stepper-linear-sample.component';
import { StepperStepTypeSampleComponent } from './stepper/stepper-steptype-sample/stepper-steptype-sample.component';
import { StepperStylingSampleComponent } from './stepper/stepper-styling-sample/stepper-styling-sample.component';
import { StepperOverviewSampleComponent } from './stepper/stepper-overview-sample/stepper-overview-sample.component';

export const layoutsRoutes: Routes = [
    {
        component: AccordionSample1Component,
        data: layoutsRoutesData['accordion-sample-1'],
        path: 'accordion-sample-1'
    },
    {
        component: AccordionSample2Component,
        data: layoutsRoutesData['accordion-sample-2'],
        path: 'accordion-sample-2'
    },
    {
        component: AccordionSample3Component,
        data: layoutsRoutesData['accordion-sample-3'],
        path: 'accordion-sample-3'
    },
    {
        component: AvatarSample1Component,
        data: layoutsRoutesData['avatar-sample-1'],
        path: 'avatar-sample-1'
    },
    {
        component: AvatarSample2Component,
        data: layoutsRoutesData['avatar-sample-2'],
        path: 'avatar-sample-2'
    },
    {
        component: AvatarSample3Component,
        data: layoutsRoutesData['avatar-sample-3'],
        path: 'avatar-sample-3'
    },
    {
        component: AvatarSample4Component,
        data: layoutsRoutesData['avatar-sample-4'],
        path: 'avatar-sample-4'
    },
    {
        component: AvatarStylingSampleComponent,
        data: layoutsRoutesData['avatar-styling'],
        path: 'avatar-styling'
    },
    {
        component: AvatarCSSVariablesComponent,
        data: layoutsRoutesData['avatar-css-variables'],
        path: 'avatar-css-variables'
    },
    {
        component: CarouselNoNavigationSampleComponent,
        data: layoutsRoutesData['carousel-no-navigation-sample'],
        path: 'carousel-no-navigation-sample'
    },
    {
        component: CarouselAnimationsSampleComponent,
        data: layoutsRoutesData['carousel-animations-sample'],
        path: 'carousel-animations-sample'
    },
    {
        component: CarouselWithComponentsSampleComponent,
        data: layoutsRoutesData['carousel-with-components-sample'],
        path: 'carousel-with-components-sample'
    },
    {
        component: CarouselComponent,
        data: layoutsRoutesData['carousel'],
        path: 'carousel'
    },
    {
        component: DividerDefaultComponent,
        data: layoutsRoutesData['divider-sample-1'],
        path: 'divider-sample-1'
    },
    {
        component: DividerVerticalComponent,
        data: layoutsRoutesData['divider-sample-2'],
        path: 'divider-sample-2'
    },
    {
        component: DividerDashedComponent,
        data: layoutsRoutesData['divider-sample-3'],
        path: 'divider-sample-3'
    },
    {
        component: DividerInsetComponent,
        data: layoutsRoutesData['divider-sample-4'],
        path: 'divider-sample-4'
    },
    {
        component: DockManagerComponent,
        data: layoutsRoutesData['dock-manager-sample'],
        path: 'dock-manager-sample'
    },
    {
        component: ExpansionPanelSample1Component,
        data: layoutsRoutesData['expansion-sample-1'],
        path: 'expansion-sample-1'
    },
    {
        component: ExpansionPanelSample2Component,
        data: layoutsRoutesData['expansion-sample-2'],
        path: 'expansion-sample-2'
    },
    {
        component: ExpansionPanelSample3Component,
        data: layoutsRoutesData['expansion-sample-3'],
        path: 'expansion-sample-3'
    },
    {
        component: ExpansionPanelSample4Component,
        data: layoutsRoutesData['expansion-sample-4'],
        path: 'expansion-sample-4'
    },
    {
        component: ExpansionPanelSample5Component,
        data: layoutsRoutesData['expansion-sample-5'],
        path: 'expansion-sample-5'
    },
    {
        component: ExpansionPanelStylingComponent,
        data: layoutsRoutesData['expansion-styling'],
        path: 'expansion-styling'
    },
    {
        component: LayoutDirectionRowComponent,
        data: layoutsRoutesData['layout-direction-row'],
        path: 'layout-direction-row'
    },
    {
        component: LayoutDirectionColumnComponent,
        data: layoutsRoutesData['layout-direction-column'],
        path: 'layout-direction-column'
    },
    {
        component: LayoutCustomOrderComponent,
        data: layoutsRoutesData['layout-custom-order'],
        path: 'layout-custom-order'
    },
    {
        component: LayoutJustifyContentComponent,
        data: layoutsRoutesData['layout-justify-content'],
        path: 'layout-justify-content'
    },
    {
        component: LayoutAlignItemsComponent,
        data: layoutsRoutesData['layout-align-items'],
        path: 'layout-align-items'
    },
    {
        component: LayoutContentSpaceComponent,
        data: layoutsRoutesData['layout-content-space'],
        path: 'layout-content-space'
    },
    {
        component: LayoutSampleComponent,
        data: layoutsRoutesData['layout-sample'],
        path: 'layout-sample'
    },
    {
        component: LayoutWrapComponent,
        data: layoutsRoutesData['layout-wrap'],
        path: 'layout-wrap'
    },
    {
        component: SplitterHorizontalSampleComponent,
        data: layoutsRoutesData['splitter-horizontal-sample'],
        path: 'splitter-horizontal-sample'
    },
    {
        component: SplitterNestedSampleComponent,
        data: layoutsRoutesData['splitter-nested-sample'],
        path: 'splitter-nested-sample'
    },
    {
        component: SplitterStylingSampleComponent,
        data: layoutsRoutesData['splitter-styling-sample'],
        path: 'splitter-styling-sample'
    },
    {
        component: StepperLabelPositionAndOrientationSampleComponent,
        data: layoutsRoutesData['stepper-label-position-and-orientation-sample'],
        path: 'stepper-label-position-and-orientation-sample'
    },
    {
        component: StepperLinearSampleComponent,
        data: layoutsRoutesData['stepper-linear-sample'],
        path: 'stepper-linear-sample'
    },
    {
        component: StepperOverviewSampleComponent,
        data: layoutsRoutesData['stepper-overview-sample'],
        path: 'stepper-overview-sample'
    },
    {
        component: StepperStepTypeSampleComponent,
        data: layoutsRoutesData['stepper-steptype-sample'],
        path: 'stepper-steptype-sample'
    },
    {
        component: StepperStylingSampleComponent,
        data: layoutsRoutesData['stepper-styling-sample'],
        path: 'stepper-styling-sample'
    },
    {
        component: TabbarSample1Component,
        data: layoutsRoutesData['tabbar-sample-1'],
        path: 'tabbar-sample-1'
    },
    {
        component: TabbarSample2Component,
        data: layoutsRoutesData['tabbar-sample-2'],
        path: 'tabbar-sample-2'
    },
    {
        component: TabbarSample3Component,
        data: layoutsRoutesData['tabbar-sample-3'],
        path: 'tabbar-sample-3',
        children: [
            { path: 'tabbar-view1', component: TabbarView1Component },
            { path: 'tabbar-view2', component: TabbarView2Component },
            { path: 'tabbar-view3', component: TabbarView3Component }
        ]
    },
    {
        component: TabbarStyleComponent,
        data: layoutsRoutesData['tabbar-style'],
        path: 'tabbar-style'
    },
    {
        component: TabsSample1Component,
        data: layoutsRoutesData['tabs-sample-1'],
        path: 'tabs-sample-1'
    },
    {
        component: TabsSample2Component,
        data: layoutsRoutesData['tabs-sample-2'],
        path: 'tabs-sample-2'
    },
    {
        component: TabsSample3Component,
        data: layoutsRoutesData['tabs-sample-3'],
        path: 'tabs-sample-3'
    },
    {
        component: TabsSample4Component,
        path: 'tabs-sample-4',
        children: [
            { path: 'view1', component: View1Component },
            { path: 'view2', component: View2Component },
            { path: 'view3', component: View3Component }
        ]
    },
    {
        component: TabsStyleComponent,
        path: 'tabs-style'
    },
    {
        component: TabsAlignmentComponent,
        path: 'tabs-alignment'
    },
    {
        component: TabsHeaderPrefixSuffixComponent,
        path: 'tabs-header-prefix-suffix'
    },
    {
        component: CardComponent,
        data: layoutsRoutesData['card-sample-0'],
        path: 'card-sample-0'
    },
    {
        component: CardSample1Component,
        data: layoutsRoutesData['card-sample-1'],
        path: 'card-sample-1'
    },
    {
        component: CardSample2Component,
        data: layoutsRoutesData['card-sample-2'],
        path: 'card-sample-2'
    },
    {
        component: CardSample3Component,
        data: layoutsRoutesData['card-sample-3'],
        path: 'card-sample-3'
    },
    {
        component: CardSample4Component,
        data: layoutsRoutesData['card-sample-4'],
        path: 'card-sample-4'
    },
    {
        component: CardStylingSampleComponent,
        data: layoutsRoutesData['card-styling-sample'],
        path: 'card-styling-sample'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(layoutsRoutes)
    ]
})
export class LayoutsRoutingModule { }
