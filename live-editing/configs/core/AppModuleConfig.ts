import { ModuleWithProviders, Provider, Type } from "@angular/core";

export class AppModuleConfig {
    public imports: Array<Type<any> | any>;
    public ngDeclarations: Array<Type<any>>;
    public ngImports: Array<Type<any> | ModuleWithProviders | any>;
    public ngProviders: Provider[];
    public ngEntryComponents: Array<Type<any>>;
    public schemas: Array<Type<any> | any>;
    public additionalAdjustments: string[];

    constructor(fields: {
        imports: Array<Type<any> | any>,
        ngDeclarations: Array<Type<any>>,
        ngImports: Array<Type<any> | ModuleWithProviders | any>,
        ngProviders?: Provider[],
        ngEntryComponents?: Array<Type<any>>,
        schemas?: Array<Type<any> | any>,
        additionalAdjustments?: string[]

    }) {
        this.imports = fields.imports;
        this.ngDeclarations = fields.ngDeclarations;
        this.ngImports = fields.ngImports;
        this.ngProviders = fields.ngProviders;
        this.ngEntryComponents = fields.ngEntryComponents;
        this.schemas = fields.schemas;
        this.additionalAdjustments = fields.additionalAdjustments;
    }
}
