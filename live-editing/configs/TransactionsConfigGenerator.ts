/* eslint-disable @typescript-eslint/naming-convention */
import { IgxButtonModule } from 'igniteui-angular/directives';
import { IgxCardModule } from 'igniteui-angular/card';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxListModule } from 'igniteui-angular/list';
import { IgxTransactionService } from 'igniteui-angular/core';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';;
export class TransactionsConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        TransactionBasePipe: '../../src/app/services/transaction/pipes/transaction-base.pipe'
};
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'TransactionBaseComponent',
            additionalFiles: ['/src/app/services/transaction/data.ts',
                '/src/app/services/transaction/pipes/transaction-base.pipe.ts'],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: 'services/transaction-base'
        }));

        return configs;
    }
}
