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
NoOpScrollStrategy} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class DragAndDropConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'IconsSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: 'EmailSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: 'ListReorderSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: 'DragDialogSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: 'KanbanSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/"
        }));
        return configs;
    }
}
