import {FormsModule,
ReactiveFormsModule} from '@angular/forms';
import {IgxButtonModule,
IgxComboModule,
IgxDatePickerModule,
IgxDropDownModule,
IgxFocusModule,
IgxIconModule,
IgxInputGroupModule,
IgxRippleModule,
IgxSelectModule,
IgxTextSelectionModule,
IgxTimePickerModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
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
                     'IgxComboModule', 'ReactiveFormsModule', 'IgxDropDownModule', 'IgxSelectModule'],

                ngDeclarations: ['ReactiveFormsSampleComponent'],
                ngImports: ['IgxIconModule', 'IgxInputGroupModule', 'IgxButtonModule',
                     'IgxRippleModule', 'IgxDatePickerModule', 'IgxTimePickerModule', 'IgxComboModule', 'ReactiveFormsModule', 'IgxDropDownModule', 'IgxSelectModule']
            }),
            shortenComponentPathBy: "/data-entries/"
        }));

        configs.push(new Config({
            component: 'InputGroupStyleComponent',
            additionalFiles: ["/src/app/data-entries/input-group/base-input.component.ts", "/src/app/data-entries/input-group/input-group-styling/layout.scss"],
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

        // template-driven form validation
        configs.push(new Config({
            component: 'TemplateDrivenFormValidationComponent',
            additionalFiles: [
                "/src/app/data-entries/input-group/base-input.component.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxInputGroupModule', 'IgxButtonModule', 'IgxRippleModule', 'TemplateDrivenFormValidationComponent'],
                ngDeclarations: ['TemplateDrivenFormValidationComponent'],
                ngImports: ['IgxInputGroupModule', 'IgxButtonModule', 'IgxRippleModule']
            }),
            shortenComponentPathBy: "/data-entries/"
        }));

        // reactive form validation
        configs.push(new Config({
            component: 'ReactiveFormValidationComponent',
            additionalFiles: [
                "/src/app/data-entries/input-group/base-input.component.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxInputGroupModule', 'IgxButtonModule', 'IgxRippleModule', 'ReactiveFormsModule', 'ReactiveFormValidationComponent'],
                ngDeclarations: ['ReactiveFormValidationComponent'],
                ngImports: ['IgxInputGroupModule', 'IgxButtonModule', 'IgxRippleModule', 'ReactiveFormsModule']
            }),
            shortenComponentPathBy: "/data-entries/"
        }));

        // reactive form custom validation
        configs.push(new Config({
            component: 'ReactiveFormCustomValidationComponent',
            additionalFiles: [
                "/src/app/data-entries/input-group/base-input.component.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxInputGroupModule', 'IgxButtonModule', 'IgxRippleModule', 'ReactiveFormsModule', 'ReactiveFormCustomValidationComponent'],
                ngDeclarations: ['ReactiveFormCustomValidationComponent'],
                ngImports: ['IgxInputGroupModule', 'IgxButtonModule', 'IgxRippleModule', 'ReactiveFormsModule']
            }),
            shortenComponentPathBy: "/data-entries/"
        }));

        return configs;
    }
}
