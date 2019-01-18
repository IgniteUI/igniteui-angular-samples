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
        loadChildren: "app/data-display/data-display.module#DataDisplayModule",
        path: "data-display"
    },
    {
        loadChildren: "app/data-entries/data-entries.module#DataEntriesModule",
        path: "data-entries"
    },
    {
        loadChildren: "app/interactions/interactions.module#InteractionsModule",
        path: "interactions"
    },
    {
        loadChildren: "app/notifications/notifications.module#NotificationsModule",
        path: "notifications"
    },
    {
        loadChildren: "app/charts/charts.module#ChartsModule",
        path: "charts"
    },
    {
        loadChildren: "app/lists/lists.module#ListsModule",
        path: "lists"
    },
    {
        loadChildren: "app/theming/theming.module#ThemingModule",
        path: "theming"
    },
    {
        loadChildren: "app/scheduling/scheduling.module#SchedulingModule",
        path: "scheduling"
    },
    {
        loadChildren: "app/excel-library/excel-library.module#ExcelLibraryModule",
        path: "excel-library"
    },
    {
        loadChildren: "app/gauges/gauges.module#GaugesModule",
        path: "gauges"
    },
    {
        loadChildren: "app/interactions/interactions.module#InteractionsModule",
        path: "interactions"
    },
    {
        loadChildren: "app/menus/menus.module#MenusModule",
        path: "menus"
    },
    {
        loadChildren: "app/layouts/layouts.module#LayoutsModule",
        path: "layouts"
    },
    {
        loadChildren: "app/services/services.module#ServicesModule",
        path: "services"
    },
    {
        loadChildren: "app/tree-grid/tree-grid.module#TreeGridModule",
        path: "tree-grid"
    },
    {
        loadChildren: "app/grid/grids.module#GridsModule",
        path: "grid"
    },
    {
        loadChildren: "app/grid-crm/grid-crm.module#GridCRMModule",
        path: "grid-crm"
    },
        // excel library samples with lazy loading:
    // {
    //     data: { displayName: "Workbooks Operations", parentName: "Excel Library" },
    //     loadChildren: "app/excel-library/operations-on/workbooks.module#ExcelLibraryOperationsOnWorkbooksModule",
    //     path: "excel-library-operations-on-workbooks"
    // },
    {
        component: CardSample1Component,
        data: { displayName: "Card with Header and Content", parentName: "Card" },
        path: "card-sample-1"
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
