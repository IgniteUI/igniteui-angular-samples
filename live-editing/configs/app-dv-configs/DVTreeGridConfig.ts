import {IgxButtonGroupModule,
IgxButtonModule,
IgxCsvExporterService,
IgxExcelExporterService,
IgxIconModule,
IgxRippleModule,
IgxSliderModule,
IgxSwitchModule,
IgxToggleModule,
IgxTreeGridModule} from 'igniteui-angular';
import {IgxSparklineCoreModule,
IgxSparklineModule} from 'igniteui-angular-charts';
import {AppModuleConfig} from '../core/AppModuleConfig';
import {Config} from '../core/Config';
import {IConfigGenerator} from '../core/IConfigGenerator';
export class DVTreeGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        'LocalDataService': '../../../projects/app-lob/src/app/grid-finjs/localData.service',
        'TreeGridGroupingPipe': '../../../projects/app-lob/src/app/treegrid-finjs/tree-grid-grouping.pipe',
        'IgxPreventDocumentScrollModule': '../../../src/app/directives/prevent-scroll.directive'
};

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

                // TreeGrid ChildDataKey Sample
        configs.push(new Config({
                    additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/projects/app-lob/src/app/tree-grid/tree-grid-childdatakey-sample/data.ts"],
                    additionalDependencies: ["igniteui-angular-charts", "igniteui-angular-core"],
                    appModuleConfig: new AppModuleConfig({
                        imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridChilddatakeySampleComponent', 'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxSparklineCoreModule', 'IgxSparklineModule'],
                        ngDeclarations: ['TreeGridChilddatakeySampleComponent'],
                        ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxSparklineCoreModule', 'IgxSparklineModule'],
                        ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
                    }),
                    component: 'TreeGridChilddatakeySampleComponent',
                    shortenComponentPathBy: "/tree-grid/"
                }));

        // TreeGrid Primary/Foreign Key Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/projects/app-lob/src/app/tree-grid/tree-grid-primaryforeignkey-sample/data.ts"],
            additionalDependencies: ["igniteui-angular-charts", "igniteui-angular-core"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridPrimaryforeignkeySampleComponent', 'IgxSparklineCoreModule', 'IgxSparklineModule'],
                ngDeclarations: ['TreeGridPrimaryforeignkeySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxSparklineCoreModule', 'IgxSparklineModule']
            }),
            component: 'TreeGridPrimaryforeignkeySampleComponent',
            shortenComponentPathBy: "/tree-grid/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/projects/app-lob/src/app/grid-finjs/localData.service.ts",
                "/projects/app-lob/src/app/services/financialData.ts",
                "/projects/app-lob/src/app/treegrid-finjs/tree-grid-grouping.pipe.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxSliderModule', 'IgxToggleModule',
                    'IgxButtonModule', 'IgxExcelExporterService', 'IgxSwitchModule', 'IgxRippleModule', 'TreeGridFinJSComponent',
                    'LocalDataService', 'TreeGridGroupingPipe'],
                ngDeclarations: ['TreeGridFinJSComponent', 'TreeGridGroupingPipe'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxSliderModule', 'IgxToggleModule',
                    'IgxButtonModule', 'IgxSwitchModule', 'IgxRippleModule'],
                ngProviders: ['LocalDataService', 'IgxExcelExporterService']
            }),
            component: 'TreeGridFinJSComponent'
        }));

        return configs;
    }
}
