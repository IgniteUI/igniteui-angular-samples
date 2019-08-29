/* tslint:disable:object-literal-sort-keys */
import { KanbanSampleComponent } from "../../src/app/interactions/drag-drop/kanban-sample/kanban-sample.component";
import {
    IgxDialogModule,
    IgxDragDirective,
    IgxDragDropModule,
    IgxDropDirective,
    IgxIconModule,
    IgxCheckboxModule,
    NoOpScrollStrategy,
    ConnectedPositioningStrategy,
    GlobalPositionStrategy } from "igniteui-angular";
import { DragDialogSampleComponent } from "../../src/app/interactions/drag-drop/dialog-sample/drag-dialog-sample.component";
import { ListReorderSampleComponent } from "../../src/app/interactions/drag-drop/list-reorder-sample/list-reorder-sample.component";
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

        configs.push(new Config({
            component: ListReorderSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDragDirective, IgxDropDirective,
                    IgxDragDropModule, ListReorderSampleComponent],
                ngDeclarations: [ListReorderSampleComponent],
                ngImports: [IgxDragDropModule]
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: DragDialogSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDragDirective, IgxDropDirective,
                    IgxDragDropModule, IgxDialogModule, 
                    NoOpScrollStrategy, ConnectedPositioningStrategy, 
                    GlobalPositionStrategy,],
                ngDeclarations: [DragDialogSampleComponent],
                ngImports: [IgxDragDropModule, IgxDialogModule]
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: KanbanSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDragDirective, IgxDropDirective,
                    IgxDragDropModule, IgxDialogModule, KanbanSampleComponent],
                ngDeclarations: [KanbanSampleComponent],
                ngImports: [IgxDragDropModule]
            }),
            shortenComponentPathBy: "/interactions/"
        }));
        return configs;
    }
}
