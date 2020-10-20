import { DependenciesType } from "../../services/DependenciesType";
import { AppModuleConfig } from "./AppModuleConfig";

export class Config {
    public component: string;
    public usesRouting: boolean;
    public additionalFiles: string[];
    public appModuleConfig: AppModuleConfig;
    public dependenciesType: DependenciesType;
    public additionalDependencies: string[];
    public shortenComponentPathBy: string;

    constructor(fields: {
        component: string,
        additionalFiles?: string[],
        appModuleConfig: AppModuleConfig,
        dependenciesType?: DependenciesType,
        additionalDependencies?: string[]
        shortenComponentPathBy?: string
    }) {
        this.component = fields.component;
        this.additionalFiles = fields.additionalFiles;
        this.appModuleConfig = fields.appModuleConfig;
        this.dependenciesType = fields.dependenciesType === undefined ?
            DependenciesType.Default : fields.dependenciesType;
        this.additionalDependencies = fields.additionalDependencies;
        this.shortenComponentPathBy = fields.shortenComponentPathBy;
    }
}
