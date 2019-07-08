// tslint:disable:no-string-literal
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AvatarSample1Component } from "./avatar/avatar-sample-1/avatar-sample-1.component";
import { AvatarSample2Component } from "./avatar/avatar-sample-2/avatar-sample-2.component";
import { AvatarSample3Component } from "./avatar/avatar-sample-3/avatar-sample-3.component";
import { CardSample1Component } from "./card/card-sample-1/card-sample-1.component";
import { CardSample2Component } from "./card/card-sample-2/card-sample-2.component";
import { CardSample3Component } from "./card/card-sample-3/card-sample-3.component";
import { CardSample4Component } from "./card/card-sample-4/card-sample-4.component";
import { CardComponent } from "./card/card.component";
import { CarouselDetailsViewComponent } from "./carousel/carousel-details/carousel-details.component";
import { CarouselSample1Component } from "./carousel/carousel-sample-1/carousel-sample-1.component";
import { CarouselSample2Component } from "./carousel/carousel-sample-2/carousel-sample-2.component";
import { CarouselSample3Component } from "./carousel/carousel-sample-3/carousel-sample-3.component";
import { CarouselSample4Component } from "./carousel/carousel-sample-4/carousel-sample-4.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { DividerDashedComponent } from "./divider/dashed/divider-dashed.component";
import { DividerDefaultComponent } from "./divider/default/divider-default.component";
import { DividerInsetComponent } from "./divider/inset/divider-inset.component";
import { DividerVerticalComponent } from "./divider/vertical/divider-vertical.component";
import { ExpansionPanelSample1Component } from "./expansion-panel/expansion-sample-1/expansion-sample-1.component";
import { ExpansionPanelSample2Component } from "./expansion-panel/expansion-sample-2/expansion-sample-2.component";
import { ExpansionPanelSample3Component } from "./expansion-panel/expansion-sample-3/expansion-sample-3.component";
import { ExpansionPanelSample4Component } from "./expansion-panel/expansion-sample-4/expansion-sample-4.component";
import { ExpansionPanelSample5Component } from "./expansion-panel/expansion-sample-5/expansion-sample-5.component";
import { ExpansionPanelSample6Component } from "./expansion-panel/expansion-sample-6/expansion-sample-6.component";
import { ExpansionPanelSample7Component } from "./expansion-panel/expansion-sample-7/expansion-sample-7.component";
import { LayoutComponent } from "./layout/layout.component";
import { layoutsRoutesData } from "./layouts-routes-data";
import { TabbarSample1Component } from "./tabbar/tabbar-sample-1/tabbar-sample-1.component";
import { TabbarSample2Component } from "./tabbar/tabbar-sample-2/tabbar-sample-2.component";
import {
    BottomNavRoutingView1Component,
    BottomNavRoutingView2Component,
    BottomNavRoutingView3Component,
    TabbarSample3Component } from "./tabbar/tabbar-sample-3/tabbar-sample-3.component";
import { TabbarComponent } from "./tabbar/tabbar.component";
import { TabsSample1Component } from "./tabs/tabs-sample-1/tabs-sample-1.component";
import { TabsSample2Component } from "./tabs/tabs-sample-2/tabs-sample-2.component";
import { TabsSample3Component } from "./tabs/tabs-sample-3/tabs-sample-3.component";
import { TabsSample4Component } from "./tabs/tabs-sample-4/components/tabs-sample-4.component";
import { TabsSample5Component } from "./tabs/tabs-sample-5/components/tabs-sample-5.component";
import {
    TabsRoutingView1Component,
    TabsRoutingView2Component,
    TabsRoutingView3Component,
    TabsSample6Component} from "./tabs/tabs-sample-6/tabs-sample-6.component";

export const layoutsRoutes: Routes = [
    {
        component: AvatarSample1Component,
        data: layoutsRoutesData["avatar-sample-1"],
        path: "avatar-sample-1"
    },
    {
        component: AvatarSample2Component,
        data: layoutsRoutesData["avatar-sample-2"],
        path: "avatar-sample-2"
    },
    {
        component: AvatarSample3Component,
        data: layoutsRoutesData["avatar-sample-3"],
        path: "avatar-sample-3"
    },
    {
        component: CarouselSample1Component,
        data: layoutsRoutesData["carousel-sample-1"],
        path: "carousel-sample-1"
    },
    {
        component: CarouselSample2Component,
        data: layoutsRoutesData["carousel-sample-2"],
        path: "carousel-sample-2"
    },
    {
        component: CarouselSample3Component,
        data: layoutsRoutesData["carousel-sample-3"],
        path: "carousel-sample-3"
    },
    {
        component: CarouselSample4Component,
        data: layoutsRoutesData["carousel-sample-4"],
        path: "carousel-sample-4"
    },
    {
        component: CarouselComponent,
        data: layoutsRoutesData["carousel"],
        path: "carousel"
    },
    {
        component: CarouselDetailsViewComponent,
        path: "details/:index"
    },
    {
        component: DividerDefaultComponent,
        data: layoutsRoutesData["divider-sample-1"],
        path: "divider-sample-1"
    },
    {
        component: DividerVerticalComponent,
        data: layoutsRoutesData["divider-sample-2"],
        path: "divider-sample-2"
    },
    {
        component: DividerDashedComponent,
        data: layoutsRoutesData["divider-sample-3"],
        path: "divider-sample-3"
    },
    {
        component: DividerInsetComponent,
        data: layoutsRoutesData["divider-sample-4"],
        path: "divider-sample-4"
    },
    {
        component: ExpansionPanelSample1Component,
        data: layoutsRoutesData["expansion-sample-1"],
        path: "expansion-sample-1"
    },
    {
        component: ExpansionPanelSample2Component,
        data: layoutsRoutesData["expansion-sample-2"],
        path: "expansion-sample-2"
    },
    {
        component: ExpansionPanelSample3Component,
        data: layoutsRoutesData["expansion-sample-3"],
        path: "expansion-sample-3"
    },
    {
        component: ExpansionPanelSample4Component,
        data: layoutsRoutesData["expansion-sample-4"],
        path: "expansion-sample-4"
    },
    {
        component: ExpansionPanelSample5Component,
        data: layoutsRoutesData["expansion-sample-5"],
        path: "expansion-sample-5"
    },
    {
        component: ExpansionPanelSample6Component,
        data: layoutsRoutesData["expansion-sample-6"],
        path: "expansion-sample-6"
    },
    {
        component: ExpansionPanelSample7Component,
        data: layoutsRoutesData["expansion-sample-7"],
        path: "expansion-sample-7"
    },
    {
        component: LayoutComponent,
        data: layoutsRoutesData["layout"],
        path: "layout"
    },
    {
        component: TabbarComponent,
        data: layoutsRoutesData["tabbar"],
        path: "tabbar"
    },
    {
        component: TabbarSample1Component,
        data: layoutsRoutesData["tabbar-sample-1"],
        path: "tabbar-sample-1"
    },
    {
        component: TabbarSample2Component,
        data: layoutsRoutesData["tabbar-sample-2"],
        path: "tabbar-sample-2"
    },
    {
        children: [
            { path: "view1", component: BottomNavRoutingView1Component },
            { path: "view2", component: BottomNavRoutingView2Component },
            { path: "view3", component: BottomNavRoutingView3Component }
        ],
        component: TabbarSample3Component,
        data: layoutsRoutesData["tabbar-sample-3"],
        path: "tabbar-sample-3"
    },
    {
        component: TabsSample1Component,
        data: layoutsRoutesData["tabs-sample-1"],
        path: "tabs-sample-1"
    },
    {
        component: TabsSample2Component,
        data: layoutsRoutesData["tabs-sample-2"],
        path: "tabs-sample-2"
    },
    {
        component: TabsSample3Component,
        data: layoutsRoutesData["tabs-sample-3"],
        path: "tabs-sample-3"
    },
    {
        component: TabsSample4Component,
        path: "tabs-sample-4"
    },
    {
        component: TabsSample5Component,
        path: "tabs-sample-5"
    },
    {
        children: [
            { path: "view1", component: TabsRoutingView1Component },
            { path: "view2", component: TabsRoutingView2Component },
            { path: "view3", component: TabsRoutingView3Component }
        ],
        component: TabsSample6Component,
        data: layoutsRoutesData["tabs-sample-6"],
        path: "tabs-sample-6"
    },
    {
        component: CardComponent,
        data: layoutsRoutesData["card-sample-0"],
        path: "card-sample-0"
    },
    {
        component: CardSample1Component,
        data: layoutsRoutesData["card-sample-1"],
        path: "card-sample-1"
    },
    {
        component: CardSample2Component,
        data: layoutsRoutesData["card-sample-2"],
        path: "card-sample-2"
    },
    {
        component: CardSample3Component,
        data: layoutsRoutesData["card-sample-3"],
        path: "card-sample-3"
    },
    {
        component: CardSample4Component,
        data: layoutsRoutesData["card-sample-4"],
        path: "card-sample-4"
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
