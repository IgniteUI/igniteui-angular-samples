/* tslint:disable:object-literal-sort-keys */
import { KanbanSampleComponent } from "../../src/app/interactions/drag-drop/kanban-sample/kanban-sample.component";
import {
    ConnectedPositioningStrategy,
    GlobalPositionStrategy,
    IgxButtonModule,
    IgxCardModule,
    IgxCheckboxModule,
    IgxChipsModule,
    IgxDialogModule,
    IgxDragDirective,
    IgxDragDropModule,
    IgxDropDirective,
    IgxIconModule,
    IgxListModule,
    IgxToggleModule,
    NoOpScrollStrategy
} from "igniteui-angular";
import {
    DragDialogSampleComponent
} from "../../src/app/interactions/drag-drop/dialog-sample/drag-dialog-sample.component";
import {
    EmailSampleComponent
} from "../../src/app/interactions/drag-drop/email-sample/email-sample.component";
import {
    IconsSampleComponent
} from "../../src/app/interactions/drag-drop/icons-sample/icons-sample.component";
import {
    ListReorderSampleComponent
} from "../../src/app/interactions/drag-drop/list-reorder-sample/list-reorder-sample.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class DragAndDropConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: IconsSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxDragDirective,
                    IgxDropDirective,
                    IgxDragDropModule,
                    IgxDialogModule,
                    IconsSampleComponent
                ],
                ngDeclarations: [IconsSampleComponent],
                ngImports: [
                    IgxDragDropModule,
                    IgxDialogModule
                ]
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: EmailSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxDragDirective,
                    IgxDropDirective,
                    IgxListModule,
                    IgxDragDropModule,
                    IgxIconModule,
                    IgxCheckboxModule,
                    EmailSampleComponent
                ],
                ngDeclarations: [EmailSampleComponent],
                ngImports: [IgxDragDropModule,
                    IgxIconModule,
                    IgxCheckboxModule,
                    IgxListModule
                ]
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: ListReorderSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxDragDirective,
                    IgxDropDirective,
                    IgxIconModule,
                    IgxListModule,
                    IgxDragDropModule,
                    ListReorderSampleComponent
                ],
                ngDeclarations: [ListReorderSampleComponent],
                ngImports: [
                    IgxIconModule,
                    IgxListModule,
                    IgxDragDropModule
                ]
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: DragDialogSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxDragDropModule,
                    IgxDialogModule,
                    IgxIconModule,
                    IgxButtonModule,
                    IgxToggleModule,
                    NoOpScrollStrategy,
                    ConnectedPositioningStrategy,
                    GlobalPositionStrategy,
                    DragDialogSampleComponent
                ],
                ngDeclarations: [DragDialogSampleComponent],
                ngImports: [
                    IgxDragDropModule,
                    IgxDialogModule,
                    IgxIconModule,
                    IgxButtonModule,
                    IgxToggleModule]
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: KanbanSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    KanbanSampleComponent,
                    IgxDragDirective,
                    IgxDropDirective,
                    IgxDragDropModule,
                    IgxDialogModule,
                    IgxCardModule,
                    IgxChipsModule
                ],
                ngDeclarations: [KanbanSampleComponent],
                ngImports: [
                    IgxDragDropModule,
                    IgxCardModule,
                    IgxChipsModule
                ]
            }),
            shortenComponentPathBy: "/interactions/"
        }));
        return configs;
    }
}
