import { provideHttpClient, withInterceptorsFromDi, withXhr } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule, provideClientHydration, withEventReplay, withNoIncrementalHydration } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { AppLobRoutes } from "./app.routes";
import { SEOService } from "./seo.service";
import { provideRouter } from "@angular/router";
import { OverflowService } from "../services/overlow.service";

export const AppConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            BrowserModule,
            FormsModule
        ),
        SEOService,
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
        provideAnimations(),
        provideRouter(AppLobRoutes),
        OverflowService, provideClientHydration(withEventReplay(), withNoIncrementalHydration())
    ]
};
