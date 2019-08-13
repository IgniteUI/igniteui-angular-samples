/* tslint:disable:object-literal-sort-keys */
import { IgxDialogModule, IgxDragDirective, IgxDragDropModule, IgxDropDirective, IgxIconModule, IgxCheckboxModule } from "igniteui-angular";
import { IconsSampleComponent } from "../../src/app/interactions/drag-drop/icons-sample/icons-sample.component";
import { EmailSampleComponent } from "../../src/app/interactions/drag-drop/email-sample/email-sample.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class DragAndDropConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: IconsSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDragDirective, IgxDropDirective,
                    IgxDragDropModule, IgxDialogModule, IconsSampleComponent],
                ngDeclarations: [IconsSampleComponent],
                ngImports: [IgxDragDropModule, IgxDialogModule]
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: EmailSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDragDirective, IgxDropDirective,
                    IgxDragDropModule, IgxIconModule, IgxCheckboxModule, EmailSampleComponent],
                ngDeclarations: [EmailSampleComponent],
                ngImports: [IgxDragDropModule, IgxIconModule, IgxCheckboxModule]
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        return configs;
    }
}
