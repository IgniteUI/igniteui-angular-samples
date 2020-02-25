/* tslint:disable:object-literal-sort-keys */
import { IgxLayoutModule } from "igniteui-angular";
import {
    LayoutAlignItemsComponent
} from "../../src/app/layouts/layout/layout-align-items/layout-align-items.component";
import {
    LayoutContentSpaceComponent
} from "../../src/app/layouts/layout/layout-content-space/layout-content-space.component";
import {
    LayoutCustomOrderComponent
} from "../../src/app/layouts/layout/layout-custom-order/layout-custom-order.component";
import {
    LayoutDirectionColumnComponent
} from "../../src/app/layouts/layout/layout-direction-column/layout-direction-column.component";
import {
    LayoutDirectionRowComponent
} from "../../src/app/layouts/layout/layout-direction-row/layout-direction-row.component";
import {
    LayoutJustifyContentComponent
} from "../../src/app/layouts/layout/layout-justify-content/layout-justify-content.component";
import { LayoutWrapComponent } from "../../src/app/layouts/layout/layout-wrap/layout-wrap.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class LayoutConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(
            new Config({
                component: LayoutAlignItemsComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [IgxLayoutModule, LayoutAlignItemsComponent],
                    ngDeclarations: [LayoutAlignItemsComponent],
                    ngImports: [IgxLayoutModule]
                }),
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: LayoutContentSpaceComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [IgxLayoutModule, LayoutContentSpaceComponent],
                    ngDeclarations: [LayoutContentSpaceComponent],
                    ngImports: [IgxLayoutModule]
                }),
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: LayoutCustomOrderComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [IgxLayoutModule, LayoutCustomOrderComponent],
                    ngDeclarations: [LayoutCustomOrderComponent],
                    ngImports: [IgxLayoutModule]
                }),
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: LayoutDirectionColumnComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [IgxLayoutModule, LayoutDirectionColumnComponent],
                    ngDeclarations: [LayoutDirectionColumnComponent],
                    ngImports: [IgxLayoutModule]
                }),
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: LayoutDirectionRowComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [IgxLayoutModule, LayoutDirectionRowComponent],
                    ngDeclarations: [LayoutDirectionRowComponent],
                    ngImports: [IgxLayoutModule]
                }),
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: LayoutJustifyContentComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [IgxLayoutModule, LayoutJustifyContentComponent],
                    ngDeclarations: [LayoutJustifyContentComponent],
                    ngImports: [IgxLayoutModule]
                }),
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: LayoutWrapComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [IgxLayoutModule, LayoutWrapComponent],
                    ngDeclarations: [LayoutWrapComponent],
                    ngImports: [IgxLayoutModule]
                }),
                shortenComponentPathBy: "/layouts/"
            })
        );

        return configs;
    }
}
