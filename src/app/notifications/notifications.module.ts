import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxAvatarModule, IgxBannerModule, IgxButtonModule, IgxCardModule, IgxIconModule, IgxInputGroupModule,
     IgxListModule, IgxNavbarModule, IgxRippleModule, IgxSnackbarModule,
     IgxSwitchModule, IgxToastModule } from "igniteui-angular";
import { BannerSample1Component } from "./banner/banner-sample-1/banner-sample-1.component";
import { BannerSample2Component } from "./banner/banner-sample-2/banner-sample-2.component";
import { BannerSample3Component } from "./banner/banner-sample-3/banner-sample-3.component";
import { BannerSample4Component } from "./banner/banner-sample-4/banner-sample-4.component";
import { BannerStylingComponent } from "./banner/banner-styling/banner-styling.component";
import { NotificationsRoutingModule } from "./notifications-routing.module";
import { SnackbarSample1Component } from "./snackbar/snackbar-sample-1/snackbar-sample-1.component";
import { SnackbarSample2Component } from "./snackbar/snackbar-sample-2/snackbar-sample-2.component";
import { SnackbarSample3Component } from "./snackbar/snackbar-sample-3/snackbar-sample-3.component";
import { SnackbarSample4Component } from "./snackbar/snackbar-sample-4/snackbar-sample-4.component";
import { SnackbarSample5Component } from "./snackbar/snackbar-sample-5/snackbar-sample-5.component";
import { ToastSample1Component } from "./toast/toast-sample-1/toast-sample-1.component";
import { ToastSample2Component } from "./toast/toast-sample-2/toast-sample-2.component";
import { ToastSample3Component } from "./toast/toast-sample-3/toast-sample-3.component";
import { ToastSample4Component } from "./toast/toast-sample-4/toast-sample-4.component";
import { ToastSample5Component } from "./toast/toast-sample-5/toast-sample-5.component";

@NgModule({
    declarations: [
        BannerSample1Component,
        BannerSample2Component,
        BannerSample3Component,
        BannerStylingComponent,
        BannerSample4Component,
        SnackbarSample1Component,
        SnackbarSample2Component,
        SnackbarSample3Component,
        SnackbarSample4Component,
        SnackbarSample5Component,
        ToastSample1Component,
        ToastSample2Component,
        ToastSample3Component,
        ToastSample4Component,
        ToastSample5Component
    ],
    imports: [
        CommonModule,
        FormsModule,
        NotificationsRoutingModule,
        IgxAvatarModule,
        IgxBannerModule,
        IgxButtonModule,
        IgxCardModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxListModule,
        IgxNavbarModule,
        IgxRippleModule,
        IgxSnackbarModule,
        IgxSwitchModule,
        IgxToastModule
    ]
})
export class NotificationsModule {}
