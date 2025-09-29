import { provideServerRendering, withRoutes } from "@angular/ssr";
import { mergeApplicationConfig, ApplicationConfig } from "@angular/core";
import { AppConfig } from "./app.config";
import { serverRoutes } from "./app.routes.server";
import { provideClientHydration } from "@angular/platform-browser";
import { provideHttpClient, withFetch } from "@angular/common/http";

const serverConfig: ApplicationConfig = {
    providers: [
        provideServerRendering(withRoutes(serverRoutes)),
        provideClientHydration(),
        provideHttpClient(withFetch()),
    ],
};

export const config = mergeApplicationConfig(AppConfig, serverConfig);
