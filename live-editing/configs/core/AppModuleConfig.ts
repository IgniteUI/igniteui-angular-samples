import { Type } from '@angular/core/src/type';
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { Provider } from "@angular/core/src/di/provider";

export class AppModuleConfig {
    public imports: Array<Type<any> | any[]>;
    public ngDeclarations: Array<Type<any> | any[]>;
    public ngImports: Array<Type<any> | ModuleWithProviders | any[]>;
    public ngProviders: Array<Provider>;

    constructor(fields: AppModuleConfig) {
        Object.assign(this, fields);
    }
}
