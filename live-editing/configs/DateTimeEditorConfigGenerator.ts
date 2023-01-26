import {IgxDateTimeEditorModule,
IgxIconModule,
IgxInputGroupModule,
IgxTextSelectionModule} from '@infragistics/igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
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
