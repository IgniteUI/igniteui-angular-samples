import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DarkThemeSampleComponent } from "./dark-theme-sample/dark-theme-sample.component";
import { DefaultThemeSampleComponent } from "./default-theme-sample/default-theme-sample.component";
import { DisplayDensityComponent } from "./display-density/display-density.component";
import { ShadowsSampleComponent } from "./shadows/shadows-sample-1/shadows-sample.component";
import { ShadowsSample2Component } from "./shadows/shadows-sample-2/shadows-sample-2.component";
import { ThemeChooserSampleComponent } from "./theme-chooser/theme-chooser-sample.component";

export const themingRoutes: Routes = [
    {
        component: ThemeChooserSampleComponent,
        data: { displayName: "Style components with custom themes", parentName: "Themes" },
        path: "theme-chooser"
    },
    {
        component: DefaultThemeSampleComponent,
        data: { displayName: "Default theme sample", parentName: "Themes" },
        path: "default-theme-sample"
    },
    {
        component: DarkThemeSampleComponent,
        data: { displayName: "Dark theme sample", parentName: "Themes" },
        path: "dark-theme-sample"
    },
    {
        component: ShadowsSampleComponent,
        data: { displayName: "Shadows sample", parentName: "Shadows" },
        path: "shadows-sample"
    },
    {
        component: ShadowsSample2Component,
        data: { displayName: "Shadows sample 2", parentName: "Shadows" },
        path: "shadows-sample-2"
    },
    {
        component: DisplayDensityComponent,
        data: { displayName: "Display density sample", parentName: "Themes" },
        path: "density"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(themingRoutes)
    ]
})
export class ThemingRoutingModule { }
