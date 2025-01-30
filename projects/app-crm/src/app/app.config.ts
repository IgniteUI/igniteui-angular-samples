import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule, HammerModule } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { SEOService } from "../../../app-lob/src/app/seo.service";
import { provideRouter } from "@angular/router";
import { GridCrmRoutes } from "./app.routes";

export const AppConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            BrowserModule,
            FormsModule,
            HammerModule
        ),
        SEOService,
        provideAnimations(),
        provideRouter(GridCrmRoutes)
    ]
};
