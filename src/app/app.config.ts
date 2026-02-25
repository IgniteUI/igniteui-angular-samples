import { provideHttpClient, withFetch, withInterceptorsFromDi } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule, HammerModule, provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { provideRouter } from "@angular/router";
import { AppRoutes } from "./app.routes";
import { OverflowService } from "./services/overflow.service";
import { provideIgniteIntl } from "igniteui-angular";

export const AppConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            BrowserModule,
            FormsModule,
            HammerModule,
            NgbModule
        ),
        provideHttpClient(withInterceptorsFromDi(), withFetch()),
        provideAnimations(),
        provideRouter(AppRoutes),
        OverflowService, provideClientHydration(withEventReplay()),
        provideIgniteIntl()
    ]
};
