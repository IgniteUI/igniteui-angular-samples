import { DVGridConfigGenerator } from "../configs/app-dv-configs/DVGridConfig";
import { DVHierarchicalGridConfigGenerator } from "../configs/app-dv-configs/DVHierarchicalGridConfig";
import { DVTreeGridConfigGenerator } from "../configs/app-dv-configs/DVTreeGridConfig";

export const DV_CONFIG_GENERATORS =
    [
        DVGridConfigGenerator,
        DVTreeGridConfigGenerator,
        DVHierarchicalGridConfigGenerator
    ];
