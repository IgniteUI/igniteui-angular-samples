// tslint:disable:max-line-length
import { NgModule } from "@angular/core";
import { NavigationStart, Router, RouterModule, Routes } from "@angular/router";
import "rxjs/add/operator/filter";
import { HomeComponent } from "./home/home.component";
import { DocsLayoutComponent } from "./index/docs-layout.component";
import { IndexComponent } from "./index/index.component";

export const samplesRoutes: Routes = [
    {
        component: HomeComponent,
        data: { displayName: "Home" },
        path: "home"
    },
    {
        loadChildren: () => import("./data-display/data-display.module").then(m => m.DataDisplayModule),
        path: "data-display"
    },
    {
        loadChildren: () => import("./data-entries/data-entries.module").then(m => m.DataEntriesModule),
        path: "data-entries"
    },
    {
        loadChildren: () => import("./interactions/interactions.module").then(m => m.InteractionsModule),
        path: "interactions"
    },
    {
        loadChildren: () => import("./notifications/notifications.module").then(m => m.NotificationsModule),
        path: "notifications"
    },
    {
        loadChildren: () => import("./charts/charts.module").then(m => m.ChartsModule),
        path: "charts"
    },
    {
        loadChildren: () => import("./lists/lists.module").then(m => m.ListsModule),
        path: "lists"
    },
    {
        loadChildren: () => import("./theming/theming.module").then(m => m.ThemingModule),
        path: "theming"
    },
    {
        loadChildren: () => import("./scheduling/scheduling.module").then(m => m.SchedulingModule),
        path: "scheduling"
    },
    {
        loadChildren: () => import("./excel-library/excel-library.module").then(m => m.ExcelLibraryModule),
        path: "excel-library"
    },
    {
        loadChildren: () => import("./gauges/gauges.module").then(m => m.GaugesModule),
        path: "gauges"
    },
    {
        loadChildren: () => import("./menus/menus.module").then(m => m.MenusModule),
        path: "menus"
    },
    {
        loadChildren: () => import("./layouts/layouts.module").then(m => m.LayoutsModule),
        path: "layouts"
    },
    {
        loadChildren: () => import("./services/services.module").then(m => m.ServicesModule),
        path: "services"
    },
    {
        loadChildren: () => import("./spreadsheet/spreadsheet.module").then(m => m.SpreadsheetModule),
        path: "spreadsheet"
    },
    {
        loadChildren: () => import("./tree-grid/tree-grid.module").then(m => m.TreeGridModule),
        path: "tree-grid"
    },
    {
        loadChildren: () => import("./grid/grids.module").then(m => m.GridsModule),
        path: "grid"
    },
    {
        loadChildren: () => import("./hierarchical-grid/hierarchical-grid.module").then(m => m.HierarchicalGridModule),
        path: "hierarchical-grid"
    },
    {
        loadChildren: () => import("./grid-crm/grid-crm.module").then(m => m.GridCRMModule),
        path: "grid-crm"
    },
    {
        loadChildren: () => import("./grid-finjs/grid-finjs.module").then(m => m.GridFinjsModule),
        path: "finjs-sample"
    },
    {
        loadChildren: () => import("./treegrid-finjs/treegrid-finjs.module").then(m => m.TreeGridFinjsModule),
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
