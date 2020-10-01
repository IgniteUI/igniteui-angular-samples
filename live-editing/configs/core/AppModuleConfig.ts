export class AppModuleConfig {
    public imports: string[];
    public ngDeclarations: string[];
    public ngImports: string[];
    public ngProviders: string[];
    public ngEntryComponents: string[];
    public schemas: string[];
    public additionalAdjustments: string[];

    constructor(fields: {
        imports: string[],
        ngDeclarations: string[],
        ngImports: string[],
        ngProviders?: string[],
        ngEntryComponents?: string[],
        schemas?: string[],
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
