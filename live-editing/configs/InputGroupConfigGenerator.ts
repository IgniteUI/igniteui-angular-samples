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
import { BaseAppConfig } from './BaseConfig';
export class InputGroupConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'InputGroupSample1Component',
            additionalFiles: [
                "/src/app/data-entries/input-group/base-input.component.ts"
            ],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/input-group/"
        }));

        // input group sample 2
        configs.push(new Config({
            component: 'InputGroupSample2Component',
            additionalFiles: [
                "/src/app/data-entries/input-group/base-input.component.ts"
            ],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/input-group/"
        }));

        // input group sample 5
        configs.push(new Config({
            component: 'InputGroupSample5Component',
            additionalFiles: [
                "/src/app/data-entries/input-group/base-input.component.ts"
            ],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/input-group/"
        }));

        // reactive forms
        configs.push(new Config({
            component: 'ReactiveFormsSampleComponent',
            additionalFiles: [
                "/src/app/data-entries/input-group/base-input.component.ts"
            ],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/"
        }));

        configs.push(new Config({
            component: 'InputGroupStyleComponent',
            appConfig: BaseAppConfig,
            additionalFiles: ["/src/app/data-entries/input-group/base-input.component.ts", "/src/app/data-entries/input-group/input-group-styling/layout.scss"],
            shortenComponentPathBy: "/data-entries/"
        }));

        configs.push(new Config({
            component: 'InputTextSelectionComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/"
        }));

        // template-driven form validation
        configs.push(new Config({
            component: 'TemplateDrivenFormValidationComponent',
            additionalFiles: [
                "/src/app/data-entries/input-group/base-input.component.ts"
            ],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/"
        }));

        // reactive form validation
        configs.push(new Config({
            component: 'ReactiveFormValidationComponent',
            additionalFiles: [
                "/src/app/data-entries/input-group/base-input.component.ts"
            ],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/"
        }));

        // reactive form custom validation
        configs.push(new Config({
            component: 'ReactiveFormCustomValidationComponent',
            additionalFiles: [
                "/src/app/data-entries/input-group/base-input.component.ts"
            ],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/"
        }));

        return configs;
    }
}
