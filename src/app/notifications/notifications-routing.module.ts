import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BannerSample1Component } from "./banner/banner-sample-1/banner-sample-1.component";
import { BannerSample2Component } from "./banner/banner-sample-2/banner-sample-2.component";
import { BannerSample3Component } from "./banner/banner-sample-3/banner-sample-3.component";
import { BannerSample4Component } from "./banner/banner-sample-4/banner-sample-4.component";
import { SnackbarSample1Component } from "./snackbar/snackbar-sample-1/snackbar-sample-1.component";
import { SnackbarSample2Component } from "./snackbar/snackbar-sample-2/snackbar-sample-2.component";
import { SnackbarSample3Component } from "./snackbar/snackbar-sample-3/snackbar-sample-3.component";
import { SnackbarSample4Component } from "./snackbar/snackbar-sample-4/snackbar-sample-4.component";
import { ToastSample1Component } from "./toast/toast-sample-1/toast-sample-1.component";
import { ToastSample2Component } from "./toast/toast-sample-2/toast-sample-2.component";
import { ToastSample3Component } from "./toast/toast-sample-3/toast-sample-3.component";
import { ToastSample4Component } from "./toast/toast-sample-4/toast-sample-4.component";
import { ToastSample5Component } from "./toast/toast-sample-5/toast-sample-5.component";

export const notificationsRoutes: Routes = [
    {
        component: BannerSample1Component,
        data: { displayName: "Basic Banner", parentName: "Banner" },
        path: "banner-sample-1"
    },
    {
        component: BannerSample2Component,
        data: { displayName: "Custom Actions Banner", parentName: "Banner" },
        path: "banner-sample-2"
    },
    {
        component: BannerSample3Component,
        data: { displayName: "Animations Banner", parentName: "Banner" },
        path: "banner-sample-3"
    },
    {
        component: BannerSample4Component,
        data: { displayName: "Settings Banner", parentName: "Banner" },
        path: "banner-sample-4"
    },
    {
        component: SnackbarSample1Component,
        data: { displayName: "Show Snackbar", parentName: "Snackbar" },
        path: "snackbar-sample-1"
    },
    {
        component: SnackbarSample2Component,
        data: { displayName: "Hide/Auto Hide Snackbar", parentName: "Snackbar" },
        path: "snackbar-sample-2"
    },
    {
        component: SnackbarSample3Component,
        data: { displayName: "Snackbar Display Time", parentName: "Snackbar" },
        path: "snackbar-sample-3"
    },
    {
        component: SnackbarSample4Component,
        data: { displayName: "Snackbar in List", parentName: "Snackbar" },
        path: "snackbar-sample-4"
    },
    {
        component: ToastSample1Component,
        data: { displayName: "Toast Overview", parentName: "Toast" },
        path: "toast-sample-1"
    },
    {
        component: ToastSample2Component,
        data: { displayName: "Show Toast", parentName: "Toast" },
        path: "toast-sample-2"
    },
    {
        component: ToastSample3Component,
        data: { displayName: "Hide/Auto Hide Toast", parentName: "Toast" },
        path: "toast-sample-3"
    },
    {
        component: ToastSample4Component,
        data: { displayName: "Toast Display Time", parentName: "Toast" },
        path: "toast-sample-4"
    },
    {
        component: ToastSample5Component,
        data: { displayName: "Toast Positioning", parentName: "Toast" },
        path: "toast-sample-5"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(notificationsRoutes)
    ]
})
export class NotificationsRoutingModule { }
