// tslint:disable:max-line-length
import { IgxHierarchicalGridModule } from "igniteui-angular";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

import { HierarchicalGridLoDSampleComponent } from "../../src/app/hierarchical-grid/hierarchical-grid-lod/hierarchical-grid-lod.component";
import { RemoteLoDService } from "../../src/app/hierarchical-grid/services/remote-lod.service"

export class HierarchicalGridConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // Hierarchical Grid Load on Demand Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/services/remote-lod.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HierarchicalGridLoDSampleComponent, RemoteLoDService],
                ngDeclarations: [HierarchicalGridLoDSampleComponent],
                ngImports: [IgxHierarchicalGridModule],
                ngProviders: [RemoteLoDService]
            }),
            component: HierarchicalGridLoDSampleComponent
        }));

        return configs;
    }
}
