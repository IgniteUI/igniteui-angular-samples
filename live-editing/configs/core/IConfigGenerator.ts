import { Config } from "./Config";

export interface IConfigGenerator {
    generateConfigs(): Array<Config>;
}
