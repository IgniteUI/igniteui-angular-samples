import {Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class VirtualScrollConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // virtual scroll overview
        configs.push(new Config({
            component: 'VirtualScrollOverviewComponent',
            additionalFiles: ["/src/app/data-display/virtual-scroll/employees.ts"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/"
        }));

        // virtual scroll variable item size
        configs.push(new Config({
            component: 'VirtualScrollVariableSizeComponent',
            additionalFiles: ["/src/app/data-display/virtual-scroll/employees.ts"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/"
        }));

        // virtual scroll horizontal
        configs.push(new Config({
            component: 'VirtualScrollHorizontalComponent',
            additionalFiles: ["/src/app/data-display/virtual-scroll/employees.ts"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/"
        }));

        // virtual scroll scroll to index
        configs.push(new Config({
            component: 'VirtualScrollScrollToIndexComponent',
            additionalFiles: ["/src/app/data-display/virtual-scroll/employees.ts"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/"
        }));

        // virtual scroll infinite scroll
        configs.push(new Config({
            component: 'VirtualScrollInfiniteScrollComponent',
            additionalFiles: ["/src/app/data-display/virtual-scroll/employees.ts"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/"
        }));

        // virtual scroll paged data
        configs.push(new Config({
            component: 'VirtualScrollPagedDataComponent',
            additionalFiles: ["/src/app/data-display/virtual-scroll/employees.ts"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/"
        }));

        return configs;
    }
}
