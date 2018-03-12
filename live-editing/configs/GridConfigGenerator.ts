import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IConfigGenerator } from "./core/IConfigGenerator";
import { GridComponent } from "../../src/app/grid/grid.component";
import { HttpClientModule } from "@angular/common/http";
import {
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputModule,
    IgxLabelModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSwitchModule
} from "igniteui-angular/main";
import { DataService } from "../../src/app/grid/services/data.service";

export class GridConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        configs.push(new Config({
            component: GridComponent,
            additionalFiles: ["/src/app/grid/services/data.service.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputModule, IgxLabelModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, GridComponent, DataService],
                ngDeclarations: [GridComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule.forRoot(),
                    IgxIconModule, IgxInputModule, IgxLabelModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, HttpClientModule],
                ngProviders: [DataService]
            })
        }));

        return configs;
    }
}
