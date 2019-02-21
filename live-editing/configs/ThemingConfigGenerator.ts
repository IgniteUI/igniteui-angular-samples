
// tslint:disable:object-literal-sort-keys
import { IgxButtonGroupModule, IgxButtonModule, IgxCalendarModule, IgxDatePickerModule,
    IgxDialogModule, IgxDropDownModule, IgxGridModule, IgxIconModule, IgxInputGroupModule,
    IgxLayoutModule, IgxRippleModule, IgxSnackbarModule, IgxToggleModule } from "igniteui-angular";
import { DarkThemeSampleComponent } from "../../src/app/theming/dark-theme-sample/dark-theme-sample.component";
import { DefaultThemeSampleComponent } from "../../src/app/theming/default-theme-sample/default-theme-sample.component";
import { DisplayDensityComponent } from "../../src/app/theming/display-density/display-density.component";
import { ShadowsSampleComponent } from "../../src/app/theming/shadows/shadows-sample-1/shadows-sample.component";
import { ShadowsSample2Component } from "../../src/app/theming/shadows/shadows-sample-2/shadows-sample-2.component";
import { ThemeChooserSampleComponent } from "../../src/app/theming/theme-chooser/theme-chooser-sample.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ThemingConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: ThemeChooserSampleComponent,
            additionalFiles: ["/src/app/theming/data/data.ts",
                "/src/app/theming/data/record.ts",
                "/src/app/theming/styles/themes.scss",
                "/src/app/theming/styles/theme-classes.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule,
                    IgxGridModule, IgxDialogModule, IgxSnackbarModule, IgxLayoutModule, ThemeChooserSampleComponent,
                    IgxCalendarModule, IgxToggleModule, IgxIconModule, IgxRippleModule, IgxButtonModule,
                    IgxInputGroupModule, IgxDatePickerModule],
                ngDeclarations: [ThemeChooserSampleComponent],
                ngImports: [IgxDropDownModule,
                    IgxDialogModule, IgxSnackbarModule, IgxLayoutModule,
                    IgxToggleModule, IgxIconModule, IgxRippleModule, IgxButtonModule,
                    IgxCalendarModule, IgxInputGroupModule, IgxDatePickerModule,
                    IgxGridModule, IgxLayoutModule]
            }),
            shortenComponentPathBy: "/theming/"
        }));

        configs.push(new Config({
            component: DefaultThemeSampleComponent,
            additionalFiles: ["/src/app/theming/data/data.ts", "/src/app/theming/data/record.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule,
                    IgxGridModule, IgxDialogModule, IgxSnackbarModule, IgxLayoutModule, DefaultThemeSampleComponent,
                    IgxToggleModule, IgxIconModule, IgxRippleModule, IgxButtonModule,
                    IgxCalendarModule, IgxInputGroupModule, IgxDatePickerModule],
                ngDeclarations: [DefaultThemeSampleComponent],
                ngImports: [IgxDropDownModule,
                    IgxDialogModule, IgxSnackbarModule, IgxLayoutModule,
                    IgxToggleModule, IgxIconModule, IgxRippleModule, IgxButtonModule,
                    IgxCalendarModule, IgxInputGroupModule, IgxDatePickerModule,
                    IgxGridModule, IgxLayoutModule]
            }),
            shortenComponentPathBy: "/theming/"
        }));

        configs.push(new Config({
            component: DarkThemeSampleComponent,
            additionalFiles: ["/src/app/theming/data/data.ts", "/src/app/theming/data/record.ts",
                "/src/app/theming/styles/dark-theme.scss",
                "/src/app/theming/styles/dark-theme-class.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule,
                    IgxGridModule, IgxDialogModule, IgxSnackbarModule, IgxLayoutModule, DarkThemeSampleComponent,
                    IgxCalendarModule, IgxToggleModule, IgxIconModule, IgxRippleModule, IgxButtonModule,
                    IgxInputGroupModule, IgxDatePickerModule],
                ngDeclarations: [DarkThemeSampleComponent],
                ngImports: [IgxDropDownModule,
                    IgxDialogModule, IgxSnackbarModule, IgxLayoutModule,
                    IgxToggleModule, IgxIconModule, IgxRippleModule, IgxButtonModule,
                    IgxCalendarModule, IgxInputGroupModule, IgxDatePickerModule,
                    IgxGridModule, IgxLayoutModule]
            }),
            shortenComponentPathBy: "/theming/"
        }));

        configs.push(new Config({
            component: ShadowsSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [ShadowsSampleComponent],
                ngDeclarations: [ShadowsSampleComponent],
                ngImports: []
            }),
            shortenComponentPathBy: "/theming/shadows/"
        }));

        configs.push(new Config({
            component: ShadowsSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [ShadowsSample2Component],
                ngDeclarations: [ShadowsSample2Component],
                ngImports: []
            }),
            shortenComponentPathBy: "/theming/shadows/"
        }));

        configs.push(new Config({
            component: DisplayDensityComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [DisplayDensityComponent, IgxInputGroupModule, IgxButtonGroupModule, IgxIconModule],
                ngDeclarations: [DisplayDensityComponent],
                ngImports: [IgxInputGroupModule, IgxButtonGroupModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/theming/"
        }));

        return configs;
    }
}
