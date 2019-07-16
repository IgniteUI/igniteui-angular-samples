import {
    IgxCardModule, IgxChipsModule, IgxExpansionPanelModule,
    IgxIconModule, IgxListModule, IgxTransactionService
} from "igniteui-angular";
import {
    TransactionBaseComponent
} from "../../src/app/services/transaction/transaction-base/transaction-base.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class TransactionsConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: TransactionBaseComponent,
            additionalFiles: ["/src/app/services/transaction/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxListModule, IgxCardModule,
                    IgxExpansionPanelModule, IgxChipsModule, IgxIconModule],
                ngDeclarations: [TransactionBaseComponent],
                ngImports: [IgxListModule, IgxCardModule,
                    IgxExpansionPanelModule, IgxChipsModule, IgxIconModule],
                ngProviders: [IgxTransactionService]
            }),
            shortenComponentPathBy: "services/transaction-base"
        }));

        return configs;
    }
}
