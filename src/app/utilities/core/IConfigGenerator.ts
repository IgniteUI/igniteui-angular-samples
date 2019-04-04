import { Config } from "./Config";

export interface IConfigGenerator {
    generateConfigs(): Config[];
}
