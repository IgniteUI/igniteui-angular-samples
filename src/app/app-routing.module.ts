import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AvatarComponent } from "./avatar/avatar.component";
import { BadgeComponent } from "./badge/badge.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { CardSample1Component } from "./card/card-sample-1/card-sample-1.component";
import { CardSample2Component } from "./card/card-sample-2/card-sample-2.component";
import { CardSample3Component } from "./card/card-sample-3/card-sample-3.component";
import { CardComponent } from "./card/card.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { DialogComponent } from "./dialog/dialog.component";
import { FormElementsComponent } from "./form-elements/form-elements.component";
import { GridComponent } from "./grid/grid.component";
import { LayoutComponent } from "./layout/layout.component";
import { ListSample1Component } from "./list/list-sample-1/list-sample-1.component";
import { ListSample2Component } from "./list/list-sample-2/list-sample-2.component";
import { ListSample3Component } from "./list/list-sample-3/list-sample-3.component";
import { ListSample4Component } from "./list/list-sample-4/list-sample-4.component";
import { ListComponent } from "./list/list.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NavdrawerComponent } from "./navdrawer/navdrawer.component";
import { ProgressbarComponent } from "./progressbar/progressbar.component";
import { ScrollComponent } from "./scroll/scroll.component";
import { SliderComponent } from "./slider/slider.component";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { TabbarComponent } from "./tabbar/tabbar.component";
import { ToastComponent } from "./toast/toast.component";

const appRoutes: Routes = [
  {
    component: CardComponent,
    path: "card"
  },
  {
    component: CalendarComponent,
    path: "calendar"
  },
  {
    component: CarouselComponent,
    path: "carousel"
  },
  {
    component: DatepickerComponent,
    path: "datepicker"
  },
  {
    component: DialogComponent,
    path: "dialog"
  },
  {
    component: LayoutComponent,
    path: "layout"
  },
  {
    component: ListComponent,
    path: "list"
  },
  {
    component: ListSample1Component,
    path: "list-sample-1"
  },
  {
    component: ListSample2Component,
    path: "list-sample-2"
  },
  {
    component: ListSample3Component,
    path: "list-sample-3"
  },
  {
    component: ListSample4Component,
    path: "list-sample-4"
  },
  {
    component: NavdrawerComponent,
    path: "navigation-drawer"
  },
  {
    component: GridComponent,
    path: "grid"
  },
  {
    component: SnackbarComponent,
    path: "snackbar"
  },
  {
    component: AvatarComponent,
    path: "avatar"
  },
  {
    component: BadgeComponent,
    path: "badge"
  },
  {
    component: FormElementsComponent,
    path: "form-elements"
  },
  {
    component: ToastComponent,
    path: "toast"
  },
  {
    component: SliderComponent,
    path: "slider"
  },
  {
    component: ProgressbarComponent,
    path: "progressbar"
  },
  {
    component: TabbarComponent,
    path: "tabbar"
  },
  {
    component: NavbarComponent,
    path: "navbar"
  },
  {
    component: ScrollComponent,
    path: "scroll"
  },
  {
    component: ButtonsComponent,
    path: "buttons"
  },
  {
    component: CardSample1Component,
    path: "card-sample-1"
  },
  {
    component: CardSample2Component,
    path: "card-sample-2"
  },
  {
    component: CardSample3Component,
    path: "card-sample-3"
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {}
