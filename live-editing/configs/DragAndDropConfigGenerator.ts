/* tslint:disable:object-literal-sort-keys */
import {
    IgxDialogModule,
    IgxDragDirective,
    IgxDragDropModule,
    IgxDropDirective,
    NoOpScrollStrategy,
    ConnectedPositioningStrategy,
    GlobalPositionStrategy } from "igniteui-angular";
import { DragAndDropSampleComponent } from "../../src/app/interactions/drag-drop/drag-drop.component";
import { DragDialogSampleComponent } from "../../src/app/interactions/drag-drop/dialog-sample/drag-dialog-sample.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class DragAndDropConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: DragAndDropSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDragDirective, IgxDropDirective,
                    IgxDragDropModule, IgxDialogModule, DragAndDropSampleComponent],
                ngDeclarations: [DragAndDropSampleComponent],
                ngImports: [IgxDragDropModule, IgxDialogModule]
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: DragDialogSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDragDirective, IgxDropDirective,
                    IgxDragDropModule, IgxDialogModule, DragAndDropSampleComponent, 
                    NoOpScrollStrategy, ConnectedPositioningStrategy, 
                    GlobalPositionStrategy,],
                ngDeclarations: [DragDialogSampleComponent],
                ngImports: [IgxDragDropModule, IgxDialogModule]
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        return configs;
    }
}
