import { Routes } from '@angular/router';
import { BannerAdvancedSampleComponent } from './banner/banner-advanced-sample/banner-advanced-sample.component';
import { BannerSample1Component } from './banner/banner-sample-1/banner-sample-1.component';
import { BannerSample2Component } from './banner/banner-sample-2/banner-sample-2.component';
import { BannerSample3Component } from './banner/banner-sample-3/banner-sample-3.component';
import { BannerSample4Component } from './banner/banner-sample-4/banner-sample-4.component';
import { BannerStylingComponent } from './banner/banner-styling/banner-styling.component';
import { notificationsRoutesData } from './notifications-routes-data';
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

export const NotificationsRoutes: Routes = [
    {
        component: BannerSample1Component,
        data: notificationsRoutesData['banner-sample-1'],
        path: 'banner-sample-1'
    },
    {
        component: BannerSample2Component,
        data: notificationsRoutesData['banner-sample-2'],
        path: 'banner-sample-2'
    },
    {
        component: BannerSample3Component,
        data: notificationsRoutesData['banner-sample-3'],
        path: 'banner-sample-3'
    },
    {
        component: BannerSample4Component,
        data: notificationsRoutesData['banner-sample-4'],
        path: 'banner-sample-4'
    },
    {
        component: BannerAdvancedSampleComponent,
        data: notificationsRoutesData['banner-advanced-sample'],
        path: 'banner-advanced-sample'
    },
    {
        component: BannerStylingComponent,
        data: notificationsRoutesData['banner-styling'],
        path: 'banner-styling'
    },
    {
        component: SnackbarSample1Component,
        data: notificationsRoutesData['snackbar-sample-1'],
        path: 'snackbar-sample-1'
    },
    {
        component: SnackbarSample2Component,
        data: notificationsRoutesData['snackbar-sample-2'],
        path: 'snackbar-sample-2'
    },
    {
        component: SnackbarSample4Component,
        data: notificationsRoutesData['snackbar-sample-4'],
        path: 'snackbar-sample-4'
    },
    {
        component: SnackbarStyleComponent,
        data: notificationsRoutesData['snackbar-style'],
        path: 'snackbar-style'
    },
    {
        component: SnackbarSample5Component,
        data: notificationsRoutesData['snackbar-sample-5'],
        path: 'snackbar-sample-5'
    },
    {
        component: ToastSample1Component,
        data: notificationsRoutesData['toast-sample-1'],
        path: 'toast-sample-1'
    },
    {
        component: ToastSample2Component,
        data: notificationsRoutesData['toast-sample-2'],
        path: 'toast-sample-2'
    },
    {
        component: ToastSample3Component,
        data: notificationsRoutesData['toast-sample-3'],
        path: 'toast-sample-3'
    },
    {
        component: ToastSample4Component,
        data: notificationsRoutesData['toast-sample-4'],
        path: 'toast-sample-4'
    },
    {
        component: ToastSample5Component,
        data: notificationsRoutesData['toast-sample-5'],
        path: 'toast-sample-5'
    },
    {
        component: ToastStyleComponent,
        data: notificationsRoutesData['toast-style'],
        path: 'toast-style'
    }
];
