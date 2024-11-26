import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule, HammerModule } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {
    IgxAutocompleteModule,
    IgxRippleModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxInputGroupModule,
    IgxTreeModule,
    IgxButtonModule,
    IgxButtonGroupModule,
    IgxSliderModule,
    IgxDateRangePickerModule,
    IgxDropDownModule
} from "igniteui-angular";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app.routes";
import { OverflowService } from "./services/overflow.service";

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            IgxAutocompleteModule,
            IgxRippleModule,
            IgxNavbarModule,
            IgxNavigationDrawerModule,
            IgxIconModule,
            IgxLayoutModule,
            IgxInputGroupModule,
            IgxTreeModule,
            BrowserModule,
            IgxButtonModule,
            IgxButtonGroupModule,
            FormsModule,
            HammerModule,
            NgbModule,
            IgxSliderModule,
            IgxDateRangePickerModule,
            IgxDropDownModule
        ),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
        provideRouter(appRoutes),
        OverflowService
    ]
};
