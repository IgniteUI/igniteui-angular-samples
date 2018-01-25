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
import { LayoutComponent } from './layout/layout.component';
import { NavdrawerComponent } from './navdrawer/navdrawer.component';
import { ToastComponent } from './toast/toast.component';
import { SliderComponent } from './slider/slider.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrollComponent } from './scroll/scroll.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ListSample1Component } from './list/list-sample-1/list-sample-1.component';
import { ListSample2Component } from './list/list-sample-2/list-sample-2.component';
import { ListSample3Component } from './list/list-sample-3/list-sample-3.component';
import { ListSample4Component } from './list/list-sample-4/list-sample-4.component';
import { CardSample1Component } from './card/card-sample-1/card-sample-1.component';
import { CardSample2Component } from './card/card-sample-2/card-sample-2.component';
import { CardSample3Component } from './card/card-sample-3/card-sample-3.component';

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
    path: 'list-sample-1',
    component: ListSample1Component
  },
  {
    path: 'list-sample-2',
    component: ListSample2Component
  },
  {
    path: 'list-sample-3',
    component: ListSample3Component
  },
  {
    path: 'list-sample-4',
    component: ListSample4Component
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
  },
  {
    path: 'tabbar',
    component: TabbarComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'scroll',
    component: ScrollComponent
  },
  {
    path: 'buttons',
    component: ButtonsComponent
  },
  {
    path: 'card-sample-1',
    component: CardSample1Component
  },
  {
    path: 'card-sample-2',
    component: CardSample2Component
  },
  {
    path: 'card-sample-3',
    component: CardSample3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
