import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DarkThemeSampleComponent } from "./dark-theme-sample/dark-theme-sample.component";
import { DefaultThemeSampleComponent } from "./default-theme-sample/default-theme-sample.component";
import { DisplayDensityComponent } from "./display-density/display-density.component";
import { ShadowsSampleComponent } from "./shadows/shadows-sample-1/shadows-sample.component";
import { ShadowsSample2Component } from "./shadows/shadows-sample-2/shadows-sample-2.component";
import { ThemeChooserSampleComponent } from "./theme-chooser/theme-chooser-sample.component";
import { themingRoutesData } from "./theming-routes-data";

export const themingRoutes: Routes = [
    {
        component: ThemeChooserSampleComponent,
        data: themingRoutesData["theme-chooser"],
        path: "theme-chooser"
    },
    {
        component: DefaultThemeSampleComponent,
        data: themingRoutesData["default-theme-sample"],
        path: "default-theme-sample"
    },
    {
        component: DarkThemeSampleComponent,
        data: themingRoutesData["dark-theme-sample"],
        path: "dark-theme-sample"
    },
    {
        component: ShadowsSampleComponent,
        data: themingRoutesData["shadows-sample"],
        path: "shadows-sample"
    },
    {
        component: ShadowsSample2Component,
        data: themingRoutesData["shadows-sample-2"],
        path: "shadows-sample-2"
    },
    {
        component: DisplayDensityComponent,
        // tslint:disable-next-line:no-string-literal
        data: themingRoutesData["density"],
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
