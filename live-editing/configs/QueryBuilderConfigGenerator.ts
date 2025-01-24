import {IgxQueryBuilderModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class QueryBuilderConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'QueryBuilderSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxQueryBuilderModule', 'QueryBuilderSample1Component'],
                ngDeclarations: ['QueryBuilderSample1Component'],
                ngImports: ['IgxQueryBuilderModule']
            }),
            shortenComponentPathBy: "/interactions/query-builder/"
        }));

        configs.push(new Config({
            component: 'QueryBuilderStyleComponent',
            additionalFiles: ["/src/app/interactions/query-builder/query-builder-style/layout.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxQueryBuilderModule', 'QueryBuilderStyleComponent'],
                ngDeclarations: ['QueryBuilderStyleComponent'],
                ngImports: ['IgxQueryBuilderModule']
            }),
            shortenComponentPathBy: "/interactions/query-builder/"
        }));

        return configs;
    }
}
