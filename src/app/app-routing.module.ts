import { FormElementsComponent } from './form-elements/form-elements.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
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
        path: 'list',
        component: ListComponent
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
        path: 'avatar',
        component: AvatarComponent
    },
    {
        path: 'badge',
        component: BadgeComponent
    },
    {
        path: 'form-elements',
        component: FormElementsComponent
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
