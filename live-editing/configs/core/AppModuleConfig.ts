import { Type } from '@angular/core/src/type';
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { Provider } from "@angular/core/src/di/provider";

export class AppModuleConfig {
    public imports: Array<Type<any> | any>;
    public ngDeclarations: Array<Type<any>>;
    public ngImports: Array<Type<any> | ModuleWithProviders | any>;
    public ngProviders: Array<Provider>;

    constructor(fields: {
        imports: Array<Type<any> | any>, ngDeclarations: Array<Type<any>>,
        ngImports: Array<Type<any> | ModuleWithProviders | any>,
        ngProviders?: Array<Provider>
    }) {
        this.imports = fields.imports;
        this.ngDeclarations = fields.ngDeclarations;
        this.ngImports = fields.ngImports;
        this.ngProviders = fields.ngProviders;
    }
}
