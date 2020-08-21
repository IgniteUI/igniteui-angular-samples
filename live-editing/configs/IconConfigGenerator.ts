/* tslint:disable:object-literal-sort-keys */
import { IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxSelectModule } from "igniteui-angular";
import { IconSample1Component } from "../../src/app/data-display/icon/icon-sample-1/icon-sample-1.component";
import { SvgIconSampleComponent } from "../../src/app/data-display/icon/svg-icon-sample/svg-icon-sample.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
import { IconStylingSample } from '../../src/app/data-display/icon/icon-styling-sample/icon-styling-sample.component';
import { MaterialIconsExtendedComponent, CategoriesFilterPipe, FilterByName } from '../../src/app/data-display/icon/material-icons-extended/material-icons-extended.component';

export class IconConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // icon sample 1
        configs.push(new Config({
            component: IconSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IconSample1Component],
                ngDeclarations: [IconSample1Component],
                ngImports: [IgxIconModule]
            }),
            shortenComponentPathBy: "/data-display/icon/"
        }));

        // SVG icon sample
        configs.push(new Config({
            component: SvgIconSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, SvgIconSampleComponent],
                ngDeclarations: [SvgIconSampleComponent],
                ngImports: [IgxIconModule]
            }),
            shortenComponentPathBy: "/data-display/icon/"
        }));

        // Icon Styling Sample
        configs.push(new Config({
            component: IconStylingSample,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IconStylingSample],
                ngDeclarations: [IconStylingSample],
                ngImports: [IgxIconModule]
            }),
            shortenComponentPathBy: "/data-display/icon/"
        }));

        // Material icons extended sample
        configs.push(new Config({
            component: MaterialIconsExtendedComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxSelectModule, MaterialIconsExtendedComponent, CategoriesFilterPipe, FilterByName],
                ngDeclarations: [MaterialIconsExtendedComponent, CategoriesFilterPipe, FilterByName],
                ngImports: [IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxSelectModule]
            }),
            additionalDependencies: ['file-saver', '@igniteui/material-icons-extended'],
            shortenComponentPathBy: "/data-display/icon/"
        }));

        return configs;
    }
}
