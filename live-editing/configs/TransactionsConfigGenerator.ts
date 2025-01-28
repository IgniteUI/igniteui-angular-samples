/* eslint-disable @typescript-eslint/naming-convention */
import {IgxButtonModule,
IgxCardModule,
IgxIconModule,
IgxListModule,
IgxTransactionService} from 'igniteui-angular';
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
