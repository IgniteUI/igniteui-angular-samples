import {IgxDateTimeEditorModule,
IgxIconModule,
IgxInputGroupModule,
IgxTextSelectionModule} from 'igniteui-angular';
import {AppModuleConfig} from './core/AppModuleConfig';
import {Config} from './core/Config';
import {IConfigGenerator} from './core/IConfigGenerator';
export class DateTimeEditorConfigGenerator implements IConfigGenerator {
    

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // Date Time Basic
        configs.push(
            new Config({
                component: 'DateTimeBasicComponent',
                appModuleConfig: new AppModuleConfig({
                    imports: ['IgxInputGroupModule', 'DateTimeBasicComponent',
                        'IgxDateTimeEditorModule', 'IgxTextSelectionModule'],
                    ngDeclarations: ['DateTimeBasicComponent'],
                    ngImports: ['IgxInputGroupModule', 'IgxDateTimeEditorModule', 'IgxTextSelectionModule']
                }),
                shortenComponentPathBy: "/scheduling/datetimeeditor/"
            })
        );

        // Date Time Advanced
        configs.push(new Config({
            component: 'DateTimeAdvancedComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxInputGroupModule', 'IgxDateTimeEditorModule', 'DateTimeAdvancedComponent', 'IgxIconModule'],
                ngDeclarations: ['DateTimeAdvancedComponent'],
                ngImports: ['IgxInputGroupModule', 'IgxDateTimeEditorModule', 'IgxIconModule']
            }),
            shortenComponentPathBy: "/scheduling/datetimeeditor/"
        }));
        return configs;
    }
}
