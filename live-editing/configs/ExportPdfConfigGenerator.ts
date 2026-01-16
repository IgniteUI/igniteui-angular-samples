/* eslint-disable @typescript-eslint/naming-convention */
import { Config, IConfigGenerator } from 'igniteui-live-editing';
import { BaseAppConfig } from './BaseConfig';

export class ExportPdfConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'PdfExportComponent',
            appConfig: BaseAppConfig
        }));

        return configs;
    }
}
