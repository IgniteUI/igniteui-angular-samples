// tslint:disable:max-line-length
import { NgModule } from "@angular/core";
import { NavigationStart, Router, RouterModule, Routes } from "@angular/router";
import "rxjs/add/operator/filter";
import { HomeComponent } from "./home/home.component";
import { DocsLayoutComponent } from "./index/docs-layout.component";
import { IndexComponent } from "./index/index.component";
import { CardSample1Component } from "./layouts/card/card-sample-1/card-sample-1.component";

export const samplesRoutes: Routes = [
    {
        component: HomeComponent,
        data: { displayName: "Home" },
        path: "home"
    },
    {
        loadChildren: "./data-display/data-display.module#DataDisplayModule",
        path: "data-display"
    },
    {
        loadChildren: "./data-entries/data-entries.module#DataEntriesModule",
        path: "data-entries"
    },
    {
        loadChildren: "./interactions/interactions.module#InteractionsModule",
        path: "interactions"
    },
    {
        loadChildren: "./notifications/notifications.module#NotificationsModule",
        path: "notifications"
    },
    {
        loadChildren: "./charts/charts.module#ChartsModule",
        path: "charts"
    },
    {
        loadChildren: "./lists/lists.module#ListsModule",
        path: "lists"
    },
    {
        loadChildren: "./theming/theming.module#ThemingModule",
        path: "theming"
    },
    {
        loadChildren: "./scheduling/scheduling.module#SchedulingModule",
        path: "scheduling"
    },
    {
        loadChildren: "./excel-library/excel-library.module#ExcelLibraryModule",
        path: "excel-library"
    },
    {
        loadChildren: "./gauges/gauges.module#GaugesModule",
        path: "gauges"
    },
    {
        loadChildren: "./menus/menus.module#MenusModule",
        path: "menus"
    },
    {
        loadChildren: "./layouts/layouts.module#LayoutsModule",
        path: "layouts"
    },
    {
        loadChildren: "./services/services.module#ServicesModule",
        path: "services"
    },
    {
        loadChildren: "./tree-grid/tree-grid.module#TreeGridModule",
        path: "tree-grid"
    },
    {
        loadChildren: "./grid/grids.module#GridsModule",
        path: "grid"
    },
    {
        loadChildren: "./hierarchical-grid/hgrid.module#HGridModule",
        path: "hierarchical-grid"
    },
    {
        loadChildren: "./grid-crm/grid-crm.module#GridCRMModule",
        path: "grid-crm"
    },
    {
        component: CardSample1Component,
        data: { displayName: "Card with Header and Content", parentName: "Card" },
        path: "card-sample-1"
    },
    {
        loadChildren: "./grid-finjs/grid-finjs.module#GridFinjsModule",
        path: "finjs-sample"
    },
    {
        loadChildren: "./treegrid-finjs/treegrid-finjs.module#TreeGridFinjsModule",
        path: "treegrid-finjs-sample"
    }
];
export const appRoutes: Routes = [
    {
        path: "", pathMatch: "full", redirectTo: "/samples/home"
    },
    {
        children: samplesRoutes,
        component: DocsLayoutComponent,
        path: ""
    },
    {
        children: samplesRoutes,
        component: IndexComponent,
        path: "samples"
    }
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {

    constructor(private router: Router) {
        router.events
            .filter((event) => event instanceof NavigationStart)
            .subscribe((event: NavigationStart) => {
                this.setOverflow(event.url);
            });
    }

    public setOverflow(url: string) {
        if (url.endsWith("finjs-sample")) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
    }
}
