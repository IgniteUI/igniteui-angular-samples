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
    GlobalPositionStrategy, 
    IgxButtonModule,
    IgxToggleModule,
    IgxListModule,
    IgxCardModule} from "igniteui-angular";
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
                imports: [IgxDragDirective, IgxDropDirective, IgxListModule,
                    IgxDragDropModule, IgxIconModule, IgxCheckboxModule, EmailSampleComponent],
                ngDeclarations: [EmailSampleComponent],
                ngImports: [IgxDragDropModule, IgxIconModule, IgxCheckboxModule, IgxListModule]
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: ListReorderSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDragDirective, IgxDropDirective, IgxIconModule, IgxListModule,
                    IgxDragDropModule, ListReorderSampleComponent],
                ngDeclarations: [ListReorderSampleComponent],
                ngImports: [IgxIconModule, IgxListModule, IgxDragDropModule]
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: DragDialogSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDragDropModule, IgxDialogModule, IgxIconModule, IgxButtonModule,
                    IgxToggleModule, NoOpScrollStrategy, ConnectedPositioningStrategy, 
                    GlobalPositionStrategy, DragDialogSampleComponent],
                ngDeclarations: [DragDialogSampleComponent],
                ngImports: [IgxDragDropModule, IgxDialogModule,
                     IgxIconModule, IgxButtonModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: KanbanSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDragDirective, IgxDropDirective,
                    IgxDragDropModule, IgxDialogModule, KanbanSampleComponent, IgxCardModule],
                ngDeclarations: [KanbanSampleComponent],
                ngImports: [IgxDragDropModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/interactions/"
        }));
        return configs;
    }
}
