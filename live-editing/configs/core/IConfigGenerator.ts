import { Config } from "./Config";

export type importsType = { [key: string]: string };
export interface IConfigGenerator {
    generateConfigs(): Config[];
    additionalImports?: importsType;
}
