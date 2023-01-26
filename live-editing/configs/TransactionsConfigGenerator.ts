/* eslint-disable @typescript-eslint/naming-convention */
import {IgxButtonModule,
IgxCardModule,
IgxIconModule,
IgxListModule,
IgxTransactionService} from '@infragistics/igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing';
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
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxListModule', 'IgxCardModule', 'IgxIconModule', 'IgxButtonModule',
                    'IgxTransactionService', 'TransactionBaseComponent', 'TransactionBasePipe'],
                ngDeclarations: ['TransactionBaseComponent', 'TransactionBasePipe'],
                ngImports: ['IgxListModule', 'IgxCardModule', 'IgxButtonModule', 'IgxIconModule'],
                ngProviders: ['IgxTransactionService']
            }),
            shortenComponentPathBy: 'services/transaction-base'
        }));

        return configs;
    }
}
