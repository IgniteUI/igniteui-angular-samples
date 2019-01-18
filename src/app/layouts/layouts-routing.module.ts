import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AvatarSample1Component } from "./avatar/avatar-sample-1/avatar-sample-1.component";
import { AvatarSample2Component } from "./avatar/avatar-sample-2/avatar-sample-2.component";
import { AvatarSample3Component } from "./avatar/avatar-sample-3/avatar-sample-3.component";
import { CardSample2Component } from "./card/card-sample-2/card-sample-2.component";
import { CardSample3Component } from "./card/card-sample-3/card-sample-3.component";
import { CardComponent } from "./card/card.component";
import { CarouselDetailsViewComponent } from "./carousel/carousel-details/carousel-details.component";
import { CarouselSample1Component } from "./carousel/carousel-sample-1/carousel-sample-1.component";
import { CarouselSample2Component } from "./carousel/carousel-sample-2/carousel-sample-2.component";
import { CarouselSample3Component } from "./carousel/carousel-sample-3/carousel-sample-3.component";
import { CarouselSample4Component } from "./carousel/carousel-sample-4/carousel-sample-4.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { ExpansionPanelSample1Component } from "./expansion-panel/expansion-sample-1/expansion-sample-1.component";
import { ExpansionPanelSample2Component } from "./expansion-panel/expansion-sample-2/expansion-sample-2.component";
import { ExpansionPanelSample3Component } from "./expansion-panel/expansion-sample-3/expansion-sample-3.component";
import { ExpansionPanelSample4Component } from "./expansion-panel/expansion-sample-4/expansion-sample-4.component";
import { ExpansionPanelSample5Component } from "./expansion-panel/expansion-sample-5/expansion-sample-5.component";
import { ExpansionPanelSample6Component } from "./expansion-panel/expansion-sample-6/expansion-sample-6.component";
import { ExpansionPanelSample7Component } from "./expansion-panel/expansion-sample-7/expansion-sample-7.component";
import { LayoutComponent } from "./layout/layout.component";
import { TabbarSample1Component } from "./tabbar/tabbar-sample-1/tabbar-sample-1.component";
import { TabbarSample2Component } from "./tabbar/tabbar-sample-2/tabbar-sample-2.component";
import { TabbarComponent } from "./tabbar/tabbar.component";
import { TabsSample1Component } from "./tabs/tabs-sample-1/tabs-sample-1.component";
import { TabsSample2Component } from "./tabs/tabs-sample-2/tabs-sample-2.component";
import { TabsSample3Component } from "./tabs/tabs-sample-3/tabs-sample-3.component";
import { TabsSample4Component } from "./tabs/tabs-sample-4/components/tabs-sample-4.component";
import { TabsSample5Component } from "./tabs/tabs-sample-5/components/tabs-sample-5.component";

export const layoutsRoutes: Routes = [
    {
        component: AvatarSample1Component,
        data: { displayName: "Avatar with Initials", parentName: "Avatar" },
        path: "avatar-sample-1"
    },
    {
        component: AvatarSample2Component,
        data: { displayName: "Avatar with Image", parentName: "Avatar" },
        path: "avatar-sample-2"
    },
    {
        component: AvatarSample3Component,
        data: { displayName: "Multiple avatars", parentName: "Avatar" },
        path: "avatar-sample-3"
    },
    {
        component: CardComponent,
        data: { displayName: "Card Overview", parentName: "Card" },
        path: "card"
    },
    {
        component: CarouselSample1Component,
        data: { displayName: "Carousel items with text", parentName: "Carousel" },
        path: "carousel-sample-1"
    },
    {
        component: CarouselSample2Component,
        data: { displayName: "Slides with ngFor directive", parentName: "Carousel" },
        path: "carousel-sample-2"
    },
    {
        component: CarouselSample3Component,
        data: { displayName: "Carousel Navigation", parentName: "Carousel" },
        path: "carousel-sample-3"
    },
    {
        component: CarouselSample4Component,
        data: { displayName: "Carousel Router Navigation", parentName: "Carousel" },
        path: "carousel-sample-4"
    },
    {
        component: CarouselComponent,
        data: { displayName: "Carousel Image Viewer", parentName: "Carousel" },
        path: "carousel"
    },
    {
        component: CarouselDetailsViewComponent,
        path: "details/:index"
    },
    {
        component: ExpansionPanelSample1Component,
        data: { displayName: "Expansion Panel 1", parentName: "Expansion Panel" },
        path: "expansion-sample-1"
    },
    {
        component: ExpansionPanelSample2Component,
        data: { displayName: "Expansion Panel 2", parentName: "Expansion Panel" },
        path: "expansion-sample-2"
    },
    {
        component: ExpansionPanelSample3Component,
        data: { displayName: "Expansion Panel 3", parentName: "Expansion Panel" },
        path: "expansion-sample-3"
    },
    {
        component: ExpansionPanelSample4Component,
        data: { displayName: "Expansion Panel 4", parentName: "Expansion Panel" },
        path: "expansion-sample-4"
    },
    {
        component: ExpansionPanelSample5Component,
        data: { displayName: "Expansion Panel 5", parentName: "Expansion Panel" },
        path: "expansion-sample-5"
    },
    {
        component: ExpansionPanelSample6Component,
        data: { displayName: "Expansion Panel 6", parentName: "Expansion Panel" },
        path: "expansion-sample-6"
    },
    {
        component: ExpansionPanelSample7Component,
        data: { displayName: "Expansion Panel 7", parentName: "Expansion Panel" },
        path: "expansion-sample-7"
    },
    {
        component: LayoutComponent,
        data: { displayName: "Layout Overview", parentName: "Layout" },
        path: "layout"
    },
    {
        component: TabbarComponent,
        data: { displayName: "Bottom Navigation Overview", parentName: "Bottom Navigation" },
        path: "tabbar"
    },
    {
        component: TabbarSample1Component,
        data: { displayName: "Bottom Navigation Simple Panels", parentName: "Bottom Navigation" },
        path: "tabbar-sample-1"
    },
    {
        component: TabbarSample2Component,
        data: { displayName: "Bottom Navigation Customizing Panels", parentName: "Bottom Navigation" },
        path: "tabbar-sample-2"
    },
    {
        component: TabsSample1Component,
        data: { displayName: "Tabs Overview", parentName: "Tabs" },
        path: "tabs-sample-1"
    },
    {
        component: TabsSample2Component,
        data: { displayName: "Tabs Types", parentName: "Tabs" },
        path: "tabs-sample-2"
    },
    {
        component: TabsSample3Component,
        data: { displayName: "Tabs Customizing", parentName: "Tabs" },
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
        component: CardSample2Component,
        data: { displayName: "Card with Avatar and Image", parentName: "Card" },
        path: "card-sample-2"
    },
    {
        component: CardSample3Component,
        data: { displayName: "Card Actions", parentName: "Card" },
        path: "card-sample-3"
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
