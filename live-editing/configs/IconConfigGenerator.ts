import { HttpClientModule } from '@angular/common/http';
import {IgxIconModule,
IgxInputGroupModule,
IgxButtonModule,
IgxSelectModule} from '@infragistics/igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class IconConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        CategoriesFilterPipe: '../../src/app/data-display/icon/material-icons-extended/material-icons-extended.component',
        FilterByName: '../../src/app/data-display/icon/material-icons-extended/material-icons-extended.component'
};
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // icon sample 1
        configs.push(new Config({
            component: 'IconSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IconSample1Component'],
                ngDeclarations: ['IconSample1Component'],
                ngImports: ['IgxIconModule']
            }),
            shortenComponentPathBy: "/data-display/icon/"
        }));

        // SVG icon sample
        configs.push(new Config({
            component: 'SvgIconSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'SvgIconSampleComponent', 'HttpClientModule'],
                ngDeclarations: ['SvgIconSampleComponent'],
                ngImports: ['IgxIconModule', 'HttpClientModule']
            }),
            shortenComponentPathBy: "/data-display/icon/"
        }));

        // Icon Styling Sample
        configs.push(new Config({
            component: 'IconStylingSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IconStylingSampleComponent'],
                ngDeclarations: ['IconStylingSampleComponent'],
                ngImports: ['IgxIconModule']
            }),
            shortenComponentPathBy: "/data-display/icon/"
        }));

        // Material icons extended sample
        configs.push(new Config({
            component: 'MaterialIconsExtendedComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxInputGroupModule', 'IgxButtonModule', 'IgxSelectModule', 'MaterialIconsExtendedComponent', 'CategoriesFilterPipe', 'FilterByName'],
                ngDeclarations: ['MaterialIconsExtendedComponent', 'CategoriesFilterPipe', 'FilterByName'],
                ngImports: ['IgxIconModule', 'IgxInputGroupModule', 'IgxButtonModule', 'IgxSelectModule']
            }),
            additionalDependencies: ['file-saver', '@igniteui/material-icons-extended'],
            shortenComponentPathBy: "/data-display/icon/"
        }));

        return configs;
    }
}
