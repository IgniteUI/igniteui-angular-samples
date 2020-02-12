import { LiveEditingManager } from "../LiveEditingManager";
import { DV_CONFIG_GENERATORS} from "./AppDVConfigGenerators";
import { CONFIG_GENERATORS} from "./ConfigGenerators";
import { StyleSyntax } from "./misc/StyleSyntax";
import { DV_MODULE_ROUTES, MODULE_ROUTES} from "./Routes";

import * as AppDvRouting from "../../projects/app-lob/src/app/app-routing.module";
import * as AppRouting from "../../src/app/app-routing.module";

export const SAMPLE_SRC_FOLDER = "src/";
export const SAMPLE_APP_FOLDER = "src/app/";

export abstract class Generator {
    protected styleSyntax: StyleSyntax;

    constructor(styleSyntax: StyleSyntax) {
        this.styleSyntax = styleSyntax;
    }

    protected getAssetsSamplesDir() {
        if (this.styleSyntax === StyleSyntax.CSS) {
            return LiveEditingManager.ASSETS_SAMPLES_CSS_SUPPORT_DIR;
        }

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
            return MODULE_ROUTES;
        }
        return DV_MODULE_ROUTES;
    }

    protected getAppRouting() {
        if (LiveEditingManager.DEFAULT_PROJECT) {
            return AppRouting.samplesRoutes;
        }
        return AppDvRouting.samplesRoutes;
    }
}
