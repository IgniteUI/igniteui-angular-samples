import { DialogComponent } from './dialog/dialog.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { LayoutComponent } from './layout/layout.component';
import { NavdrawerComponent } from './navdrawer/navdrawer.component';
import { ToastComponent } from './toast/toast.component';
import { SliderComponent } from './slider/slider.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';


const appRoutes: Routes = [
    {
        path: 'card',
        component: CardComponent
    },
    {
        path: 'calendar',
        component: CalendarComponent
    },
    {
        path: 'carousel',
        component: CarouselComponent
    },
    {
        path: 'datepicker',
        component: DatepickerComponent
    },
    {
        path: 'dialog',
        component: DialogComponent
    },
    {
        path: 'layout',
        component: LayoutComponent
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'navigation-drawer',
        component: NavdrawerComponent
    },
    {
        path: 'grid',
        component: GridComponent
    },
    {
        path: 'snackbar',
        component: SnackbarComponent
    },
    {
        path: 'toast',
        component: ToastComponent
    },
    {
        path: 'slider',
        component: SliderComponent
    },
    {
        path: 'progressbar',
        component: ProgressbarComponent
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
