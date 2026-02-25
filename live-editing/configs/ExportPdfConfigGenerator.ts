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

        configs.push(new Config({
            component: 'ExportPdfCustomFontComponent',
            additionalFiles: ['/src/app/services/export-pdf-custom-font/fonts/noto-sans.json', '/src/app/services/export-pdf-custom-font/fonts/OFL.txt'],
            appConfig: BaseAppConfig
        }));

        return configs;
    }
}
