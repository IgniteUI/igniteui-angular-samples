import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxButtonGroupModule, IgxButtonModule, IgxCalendarModule, IgxDatePickerModule,
    IgxDialogModule, IgxDropDownModule, IgxGridModule, IgxIconModule, IgxInputGroupModule,
    IgxLayoutModule, IgxRippleModule, IgxSnackbarModule, IgxToggleModule } from "igniteui-angular";
import { DarkThemeSampleComponent } from "./dark-theme-sample/dark-theme-sample.component";
import { DefaultThemeSampleComponent } from "./default-theme-sample/default-theme-sample.component";
import { DisplayDensityComponent } from "./display-density/display-density.component";
import { ShadowsSampleComponent } from "./shadows/shadows-sample-1/shadows-sample.component";
import { ShadowsSample2Component } from "./shadows/shadows-sample-2/shadows-sample-2.component";
import { ThemeChooserSampleComponent } from "./theme-chooser/theme-chooser-sample.component";
import { ThemingRoutingModule } from "./theming-routing.module";

@NgModule({
    declarations: [
        DarkThemeSampleComponent,
        DefaultThemeSampleComponent,
        DisplayDensityComponent,
        ShadowsSampleComponent,
        ShadowsSample2Component,
        ThemeChooserSampleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ThemingRoutingModule,
        IgxButtonGroupModule,
        IgxButtonModule,
        IgxCalendarModule,
        IgxDatePickerModule,
        IgxDialogModule,
        IgxDropDownModule,
        IgxGridModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxLayoutModule,
        IgxRippleModule,
        IgxSnackbarModule,
        IgxToggleModule
    ]
})
export class ThemingModule {}
