import { LiveEditingManager } from "../LiveEditingManager";
import { DV_CONFIG_GENERATORS} from "./AppDVConfigGenerators";
import { CONFIG_GENERATORS} from "./ConfigGenerators";

export const SAMPLE_SRC_FOLDER = "src/";
export const SAMPLE_APP_FOLDER = "src/app/";

export abstract class Generator {
    protected componentPaths = LiveEditingManager.routingPathService.componentPaths;

    constructor() {
    }

    protected getAssetsSamplesDir() {
        return LiveEditingManager.ASSETS_SAMPLES_DIR;
    }

    protected getConfigGenerators() {
        if (LiveEditingManager.DEFAULT_PROJECT) {
            return CONFIG_GENERATORS;
        }
        return DV_CONFIG_GENERATORS;
    }

    protected getConfigGeneratorsFileName() {
        if (LiveEditingManager.DEFAULT_PROJECT) {
            return "ConfigGenerators.ts";
        }
        return "AppDVConfigGenerators.ts";
    }

    protected getModuleRoutes() {
        if (LiveEditingManager.DEFAULT_PROJECT) {
            return LiveEditingManager.routingPathService.appRouting.get("MODULE_ROUTES");
        }
        return LiveEditingManager.routingPathService.appRouting.get("DV_MODULE_ROUTES");
    }
}
