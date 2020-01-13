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
        data: ["GridCRMModule"],
        loadChildren: () => import("./grid-crm//grid-crm/grid-crm.module").then(m => m.GridCRMModule),
        path: "grid-crm"
    },
    {
        data: ["GridFinjsModule"],
        loadChildren: () => import("./grid-finjs/grid-finjs.module").then(m => m.GridFinjsModule),
        path: "finjs-sample"
    },
    {
        data: ["TreeGridFinjsModule"],
        loadChildren: () => import("./treegrid-finjs/treegrid-finjs.module").then(m => m.TreeGridFinjsModule),
        path: "treegrid-finjs-sample"
    },
    // {
    //     data: ["TreeGridModule"],
    //     loadChildren: () => import("./tree-grid/tree-grid.module").then(m => m.TreeGridModule),
    //     path: "tree-grid"
    // },
    {
        data: ["GridsModule"],
        loadChildren: () => import("./grid/grids.module").then(m => m.GridsModule),
        path: "grid/grid"
    }
    // {
    //     data: ["HierarchicalGridModule"],
    //     loadChildren: () => import("./hierarchical-grid/hierarchical-grid.module").then(m => m.HierarchicalGridModule),
    //     path: "hierarchical-grid"
    // }
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
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
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
