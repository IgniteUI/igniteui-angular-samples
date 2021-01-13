import {IgxButtonGroupModule,
IgxButtonModule,
IgxCalendarModule,
IgxCardModule,
IgxDatePickerModule,
IgxDialogModule,
IgxDividerModule,
IgxDropDownModule,
IgxGridModule,
IgxIconModule,
IgxInputGroupModule,
IgxLayoutModule,
IgxListModule,
IgxRippleModule,
IgxSelectModule,
IgxSnackbarModule,
IgxToggleModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class ThemingConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'ThemeChooserSampleComponent',
            additionalFiles: ["/src/app/theming/data/data.ts",
                "/src/app/theming/data/record.ts",
                "/src/app/theming/styles/themes.scss",
                "/src/app/theming/styles/theme-classes.scss",
                "src/app/theming/styles/schemas.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDropDownModule',
                    'IgxGridModule', 'IgxDialogModule', 'IgxSnackbarModule', 'IgxLayoutModule', 'ThemeChooserSampleComponent',
                    'IgxCalendarModule', 'IgxToggleModule', 'IgxIconModule', 'IgxRippleModule', 'IgxButtonModule',
                    'IgxInputGroupModule', 'IgxDatePickerModule', 'IgxSelectModule'],
                ngDeclarations: ['ThemeChooserSampleComponent'],
                ngImports: ['IgxDropDownModule',
                    'IgxDialogModule', 'IgxSnackbarModule', 'IgxLayoutModule',
                    'IgxToggleModule', 'IgxIconModule', 'IgxRippleModule', 'IgxButtonModule',
                    'IgxCalendarModule', 'IgxInputGroupModule', 'IgxDatePickerModule',
                    'IgxGridModule', 'IgxLayoutModule', 'IgxSelectModule']
            }),
            shortenComponentPathBy: "/theming/"
        }));

        configs.push(new Config({
            component: 'DefaultThemeSampleComponent',
            additionalFiles: ["/src/app/theming/data/data.ts", "/src/app/theming/data/record.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDropDownModule',
                    'IgxGridModule', 'IgxDialogModule', 'IgxSnackbarModule', 'IgxLayoutModule', 'DefaultThemeSampleComponent',
                    'IgxToggleModule', 'IgxIconModule', 'IgxRippleModule', 'IgxButtonModule',
                    'IgxCalendarModule', 'IgxInputGroupModule', 'IgxDatePickerModule'],
                ngDeclarations: ['DefaultThemeSampleComponent'],
                ngImports: ['IgxDropDownModule',
                    'IgxDialogModule', 'IgxSnackbarModule', 'IgxLayoutModule',
                    'IgxToggleModule', 'IgxIconModule', 'IgxRippleModule', 'IgxButtonModule',
                    'IgxCalendarModule', 'IgxInputGroupModule', 'IgxDatePickerModule',
                    'IgxGridModule', 'IgxLayoutModule']
            }),
            shortenComponentPathBy: "/theming/"
        }));

        configs.push(new Config({
            component: 'DarkThemeSampleComponent',
            additionalFiles: ["/src/app/theming/data/data.ts", "/src/app/theming/data/record.ts",
                "/src/app/theming/styles/dark-theme.scss",
                "/src/app/theming/styles/dark-theme-class.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDropDownModule',
                    'IgxGridModule', 'IgxDialogModule', 'IgxSnackbarModule', 'IgxLayoutModule', 'DarkThemeSampleComponent',
                    'IgxCalendarModule', 'IgxToggleModule', 'IgxIconModule', 'IgxRippleModule', 'IgxButtonModule',
                    'IgxInputGroupModule', 'IgxDatePickerModule'],
                ngDeclarations: ['DarkThemeSampleComponent'],
                ngImports: ['IgxDropDownModule',
                    'IgxDialogModule', 'IgxSnackbarModule', 'IgxLayoutModule',
                    'IgxToggleModule', 'IgxIconModule', 'IgxRippleModule', 'IgxButtonModule',
                    'IgxCalendarModule', 'IgxInputGroupModule', 'IgxDatePickerModule',
                    'IgxGridModule', 'IgxLayoutModule']
            }),
            shortenComponentPathBy: "/theming/"
        }));

        configs.push(new Config({
            component: 'ShadowsSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['ShadowsSampleComponent'],
                ngDeclarations: ['ShadowsSampleComponent'],
                ngImports: []
            }),
            shortenComponentPathBy: "/theming/shadows/"
        }));

        configs.push(new Config({
            component: 'ShadowsSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['ShadowsSample2Component'],
                ngDeclarations: ['ShadowsSample2Component'],
                ngImports: []
            }),
            shortenComponentPathBy: "/theming/shadows/"
        }));

        configs.push(new Config({
            component: 'CardSampleShadowComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['CardSampleShadowComponent', 'IgxCardModule', 'IgxButtonModule', 'IgxIconModule'],
                ngDeclarations: ['CardSampleShadowComponent'],
                ngImports: ['IgxCardModule', 'IgxIconModule', 'IgxButtonModule']
            }),
            shortenComponentPathBy: "/theming/shadows/"
        }));

        configs.push(new Config({
            component: 'DisplayDensityComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['DisplayDensityComponent', 'IgxInputGroupModule', 'IgxButtonGroupModule', 'IgxIconModule'],
                ngDeclarations: ['DisplayDensityComponent'],
                ngImports: ['IgxInputGroupModule', 'IgxButtonGroupModule', 'IgxIconModule']
            }),
            shortenComponentPathBy: "/theming/"
        }));

        configs.push(new Config({
            component: 'AnimationsSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['AnimationsSampleComponent', 'IgxDialogModule', 'IgxButtonModule', 'IgxListModule'],
                ngDeclarations: ['AnimationsSampleComponent'],
                ngImports: ['IgxDialogModule', 'IgxButtonModule', 'IgxListModule']
            }),
            shortenComponentPathBy: "/theming/animations/"
        }));

        configs.push(new Config({
            component: 'AnimationsSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['AnimationsSample2Component', 'IgxCardModule', 'IgxButtonModule', 'IgxIconModule', 'IgxDividerModule'],
                ngDeclarations: ['AnimationsSample2Component'],
                ngImports: ['IgxCardModule', 'IgxButtonModule', 'IgxIconModule', 'IgxDividerModule']
            }),
            shortenComponentPathBy: "/theming/animations/"
        }));

        return configs;
    }
}
