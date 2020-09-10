/* tslint:disable:object-literal-sort-keys */
// tslint:disable: max-line-length
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IgxButtonModule, IgxComboModule, IgxDatePickerModule,
         IgxDropDownModule, IgxFocusModule,
         IgxIconModule, IgxInputGroupModule,
         IgxRippleModule, IgxSelectModule,
         IgxTextSelectionModule, IgxTimePickerModule } from "igniteui-angular";
import { InputGroupSample1Component } from "../../src/app/data-entries/input-group/input-group-sample-1/input-group-sample-1.component";
import { InputGroupSample2Component } from "../../src/app/data-entries/input-group/input-group-sample-2/input-group-sample-2.component";
import { InputGroupSample5Component } from "../../src/app/data-entries/input-group/input-group-sample-5/input-group-sample-5.component";
import { InputGroupStyleComponent } from "../../src/app/data-entries/input-group/input-group-styling/input-group-styling.component";
import { InputTextSelectionComponent } from "../../src/app/data-entries/input-group/input-text-selection/input-text-selection.component";
import { ReactiveFormsSampleComponent } from "../../src/app/data-entries/input-group/reactive-forms/reactive-forms.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class InputGroupConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'InputGroupSample1Component',
            additionalFiles: [
                "/src/app/data-entries/input-group/base-input.component.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxInputGroupModule', 'InputGroupSample1Component'],
                ngDeclarations: ['InputGroupSample1Component'],
                ngImports: ['IgxInputGroupModule']
            }),
            shortenComponentPathBy: "/data-entries/input-group/"
        }));

        // input group sample 2
        configs.push(new Config({
            component: 'InputGroupSample2Component',
            additionalFiles: [
                "/src/app/data-entries/input-group/base-input.component.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxInputGroupModule', 'InputGroupSample2Component'],
                ngDeclarations: ['InputGroupSample2Component'],
                ngImports: ['IgxInputGroupModule']
            }),
            shortenComponentPathBy: "/data-entries/input-group/"
        }));

        // input group sample 5
        configs.push(new Config({
            component: 'InputGroupSample5Component',
            additionalFiles: [
                "/src/app/data-entries/input-group/base-input.component.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxInputGroupModule', 'InputGroupSample5Component'],
                ngDeclarations: ['InputGroupSample5Component'],
                ngImports: ['IgxIconModule', 'IgxInputGroupModule']
            }),
            shortenComponentPathBy: "/data-entries/input-group/"
        }));

        // reactive forms
        configs.push(new Config({
            component: 'ReactiveFormsSampleComponent',
            additionalFiles: [
                "/src/app/data-entries/input-group/base-input.component.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxInputGroupModule', 'IgxButtonModule',
                     'IgxRippleModule', 'ReactiveFormsSampleComponent', 'IgxDatePickerModule', 'IgxTimePickerModule',
                     'IgxComboModule', 'FormsModule', 'ReactiveFormsModule', 'IgxDropDownModule', 'IgxSelectModule'],
                ngDeclarations: ['ReactiveFormsSampleComponent'],
                ngImports: ['IgxIconModule', 'IgxInputGroupModule', 'IgxButtonModule',
                     'IgxRippleModule', 'IgxDatePickerModule', 'IgxTimePickerModule', 'IgxComboModule',
                     'FormsModule', 'ReactiveFormsModule', 'IgxDropDownModule', 'IgxSelectModule']
            }),
            shortenComponentPathBy: "/data-entries/"
        }));

        configs.push(new Config({
            component: 'InputGroupStyleComponent',
            additionalFiles: [
                "/src/app/data-entries/input-group/base-input.component.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxInputGroupModule', 'InputGroupStyleComponent'],
                ngDeclarations: ['InputGroupStyleComponent'],
                ngImports: ['IgxIconModule', 'IgxInputGroupModule']
            }),
            shortenComponentPathBy: "/data-entries/"
        }));

        configs.push(new Config({
            component: 'InputTextSelectionComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxInputGroupModule', 'InputTextSelectionComponent', 'IgxTextSelectionModule', 'IgxFocusModule'],
                ngDeclarations: ['InputTextSelectionComponent'],
                ngImports: ['IgxInputGroupModule', 'IgxTextSelectionModule', 'IgxFocusModule']
            }),
            shortenComponentPathBy: "/data-entries/"
        }));

        return configs;
    }
}
