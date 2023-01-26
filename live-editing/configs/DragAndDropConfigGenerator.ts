import {ConnectedPositioningStrategy,
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
NoOpScrollStrategy} from '@infragistics/igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class DragAndDropConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'IconsSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxDragDirective',
                    'IgxDropDirective',
                    'IgxDragDropModule',
                    'IgxDialogModule',
                    'IconsSampleComponent'
                ],
                ngDeclarations: ['IconsSampleComponent'],
                ngImports: [
                    'IgxDragDropModule',
                    'IgxDialogModule'
                ]
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: 'EmailSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxDragDirective',
                    'IgxDropDirective',
                    'IgxListModule',
                    'IgxDragDropModule',
                    'IgxIconModule',
                    'IgxCheckboxModule',
                    'EmailSampleComponent'
                ],
                ngDeclarations: ['EmailSampleComponent'],
                ngImports: ['IgxDragDropModule',
                    'IgxIconModule',
                    'IgxCheckboxModule',
                    'IgxListModule'
                ]
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: 'ListReorderSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxDragDirective',
                    'IgxDropDirective',
                    'IgxIconModule',
                    'IgxListModule',
                    'IgxDragDropModule',
                    'ListReorderSampleComponent'
                ],
                ngDeclarations: ['ListReorderSampleComponent'],
                ngImports: [
                    'IgxIconModule',
                    'IgxListModule',
                    'IgxDragDropModule'
                ]
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: 'DragDialogSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxDragDropModule',
                    'IgxDialogModule',
                    'IgxIconModule',
                    'IgxButtonModule',
                    'IgxToggleModule',
                    'NoOpScrollStrategy',
                    'ConnectedPositioningStrategy',
                    'GlobalPositionStrategy',
                    'DragDialogSampleComponent'
                ],
                ngDeclarations: ['DragDialogSampleComponent'],
                ngImports: [
                    'IgxDragDropModule',
                    'IgxDialogModule',
                    'IgxIconModule',
                    'IgxButtonModule',
                    'IgxToggleModule']
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: 'KanbanSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'KanbanSampleComponent',
                    'IgxDragDirective',
                    'IgxDropDirective',
                    'IgxDragDropModule',
                    'IgxDialogModule',
                    'IgxCardModule',
                    'IgxChipsModule'
                ],
                ngDeclarations: ['KanbanSampleComponent'],
                ngImports: [
                    'IgxDragDropModule',
                    'IgxCardModule',
                    'IgxChipsModule'
                ]
            }),
            shortenComponentPathBy: "/interactions/"
        }));
        return configs;
    }
}
