import { ConnectedPositioningStrategy, GlobalPositionStrategy, NoOpScrollStrategy } from 'igniteui-angular/core';
import { IgxButtonModule, IgxDragDirective, IgxDragDropModule, IgxDropDirective, IgxToggleModule } from 'igniteui-angular/directives';
import { IgxCardModule } from 'igniteui-angular/card';
import { IgxCheckboxModule } from 'igniteui-angular/checkbox';
import { IgxChipsModule } from 'igniteui-angular/chips';
import { IgxDialogModule } from 'igniteui-angular/dialog';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxListModule } from 'igniteui-angular/list';
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
