import { IgxAvatarModule,
IgxButtonGroupModule,
IgxButtonModule,
IgxCalendarModule,
IgxCardModule,
IgxDatePickerModule,
IgxDialogModule,
IgxDividerModule,
IgxDropDownModule,
IgxExpansionPanelModule,
IgxGridModule,
IgxIconModule,
IgxInputGroupModule,
IgxLayoutModule,
IgxListModule,
IgxRippleModule,
IgxSelectModule,
IgxSnackbarModule,
IgxToggleModule} from '@infragistics/igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
export class ThemingConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'DefaultThemeSampleComponent',
            additionalFiles: ['/src/app/theming/data/data.ts', '/src/app/theming/data/record.ts'],
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
            shortenComponentPathBy: '/theming/'
        }));

        configs.push(new Config({
            component: 'ShadowsSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['ShadowsSampleComponent'],
                ngDeclarations: ['ShadowsSampleComponent'],
                ngImports: []
            }),
            shortenComponentPathBy: '/theming/shadows/'
        }));

        configs.push(new Config({
            component: 'ShadowsSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['ShadowsSample2Component'],
                ngDeclarations: ['ShadowsSample2Component'],
                ngImports: []
            }),
            shortenComponentPathBy: '/theming/shadows/'
        }));

        configs.push(new Config({
            component: 'CardSampleShadowComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['CardSampleShadowComponent', 'IgxCardModule', 'IgxButtonModule', 'IgxIconModule'],
                ngDeclarations: ['CardSampleShadowComponent'],
                ngImports: ['IgxCardModule', 'IgxIconModule', 'IgxButtonModule']
            }),
            shortenComponentPathBy: '/theming/shadows/'
        }));

        configs.push(new Config({
            component: 'DisplayDensityComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['DisplayDensityComponent', 'IgxInputGroupModule', 'IgxButtonGroupModule', 'IgxIconModule'],
                ngDeclarations: ['DisplayDensityComponent'],
                ngImports: ['IgxInputGroupModule', 'IgxButtonGroupModule', 'IgxIconModule']
            }),
            shortenComponentPathBy: '/theming/'
        }));

        configs.push(new Config({
            component: 'AnimationsSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['AnimationsSampleComponent', 'IgxDialogModule', 'IgxButtonModule', 'IgxListModule'],
                ngDeclarations: ['AnimationsSampleComponent'],
                ngImports: ['IgxDialogModule', 'IgxButtonModule', 'IgxListModule']
            }),
            shortenComponentPathBy: '/theming/animations/'
        }));

        configs.push(new Config({
            component: 'AnimationsSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['AnimationsSample2Component', 'IgxCardModule', 'IgxButtonModule', 'IgxIconModule', 'IgxDividerModule'],
                ngDeclarations: ['AnimationsSample2Component'],
                ngImports: ['IgxCardModule', 'IgxButtonModule', 'IgxIconModule', 'IgxDividerModule']
            }),
            shortenComponentPathBy: '/theming/animations/'
        }));

        configs.push(new Config({
            component: 'BootstrapComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['BootstrapComponent', 'IgxAvatarModule', 'IgxCardModule', 'IgxButtonModule',
                          'IgxIconModule', 'IgxDialogModule', 'IgxListModule', 'NgbModule'],
                ngDeclarations: ['BootstrapComponent'],
                ngImports: ['IgxAvatarModule', 'IgxCardModule', 'IgxButtonModule',
                            'IgxIconModule', 'IgxDialogModule', 'IgxListModule', 'NgbModule']
            }),
            additionalDependencies: ['bootstrap', '@ng-bootstrap/ng-bootstrap'],
            shortenComponentPathBy: '/theming/bootstrap/'
        }));

        configs.push(new Config({
            component: 'AngularMaterialComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['AngularMaterialComponent', 'IgxAvatarModule', 'IgxCardModule', 'IgxButtonModule',
                          'IgxIconModule', 'IgxDialogModule', 'IgxDividerModule', 'IgxExpansionPanelModule',
                          'FormsModule', 'MatButtonModule', 'MatFormFieldModule', 'MatInputModule', 'MatMenuModule',
                          'MatSliderModule', 'MatStepperModule', 'MatToolbarModule', 'ReactiveFormsModule'],
                ngDeclarations: ['AngularMaterialComponent'],
                ngImports: ['IgxAvatarModule', 'IgxCardModule', 'IgxButtonModule',
                            'IgxIconModule', 'IgxDialogModule', 'IgxDividerModule', 'IgxExpansionPanelModule',
                            'FormsModule', 'MatButtonModule', 'MatFormFieldModule', 'MatInputModule', 'MatMenuModule',
                            'MatSliderModule', 'MatStepperModule', 'MatToolbarModule', 'ReactiveFormsModule']
            }),
            additionalDependencies: ['@angular/cdk', '@angular/material'],
            shortenComponentPathBy: '/theming/angular/'
        }));

        return configs;
    }
}
