import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxAvatarModule, IgxBannerModule, IgxButtonModule, IgxCardModule, IgxIconButtonDirective, IgxIconModule, IgxInputGroupModule,
     IgxListModule, IgxNavbarModule, IgxRippleModule, IgxSnackbarModule,
     IgxSwitchModule, IgxToastModule } from 'igniteui-angular';
import { BannerAdvancedSampleComponent } from './banner/banner-advanced-sample/banner-advanced-sample.component';
import { BannerSample1Component } from './banner/banner-sample-1/banner-sample-1.component';
import { BannerSample2Component } from './banner/banner-sample-2/banner-sample-2.component';
import { BannerSample3Component } from './banner/banner-sample-3/banner-sample-3.component';
import { BannerSample4Component } from './banner/banner-sample-4/banner-sample-4.component';
import { BannerStylingComponent } from './banner/banner-styling/banner-styling.component';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { SnackbarSample1Component } from './snackbar/snackbar-sample-1/snackbar-sample-1.component';
import { SnackbarSample2Component } from './snackbar/snackbar-sample-2/snackbar-sample-2.component';
import { SnackbarSample4Component } from './snackbar/snackbar-sample-4/snackbar-sample-4.component';
import { SnackbarSample5Component } from './snackbar/snackbar-sample-5/snackbar-sample-5.component';
import { SnackbarStyleComponent } from './snackbar/snackbar-style/snackbar-style.component';
import { ToastSample1Component } from './toast/toast-sample-1/toast-sample-1.component';
import { ToastSample2Component } from './toast/toast-sample-2/toast-sample-2.component';
import { ToastSample3Component } from './toast/toast-sample-3/toast-sample-3.component';
import { ToastSample4Component } from './toast/toast-sample-4/toast-sample-4.component';
import { ToastSample5Component } from './toast/toast-sample-5/toast-sample-5.component';
import { ToastStyleComponent } from './toast/toast-style/toast-style.component';

@NgModule({
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
        IgxToastModule,
        IgxIconButtonDirective,
        BannerSample1Component,
        BannerSample2Component,
        BannerSample3Component,
        BannerSample4Component,
        BannerAdvancedSampleComponent,
        BannerStylingComponent,
        SnackbarSample1Component,
        SnackbarSample2Component,
        SnackbarSample4Component,
        SnackbarSample5Component,
        SnackbarStyleComponent,
        ToastSample1Component,
        ToastSample2Component,
        ToastSample3Component,
        ToastSample4Component,
        ToastSample5Component,
        ToastStyleComponent
    ]
})
export class NotificationsModule {}
