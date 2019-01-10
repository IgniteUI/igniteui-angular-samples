import { IgxDialogModule, IgxDragDirective, IgxDropDirective, IgxDragDropModule } from "igniteui-angular";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
import { DragAndDropSampleComponent } from "../../src/app/drag-drop/drag-drop.component";

export class DragAndDropConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: DragAndDropSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDragDirective, IgxDropDirective, IgxDragDropModule, 
                    DragAndDropSampleComponent, IgxDialogModule],
                ngDeclarations: [DragAndDropSampleComponent],
                ngImports: [IgxDragDropModule, IgxDialogModule]
            })
        }));

        return configs;
    }
}
