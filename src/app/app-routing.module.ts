import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AvatarComponent } from "./avatar/avatar.component";
import { BadgeComponent } from "./badge/badge.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CalendarComponent } from "./calendar/calendar.component";
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
    path: "card",
    component: CardComponent
  },
  {
    path: "calendar",
    component: CalendarComponent
  },
  {
    path: "carousel",
    component: CarouselComponent
  },
  {
    path: "datepicker",
    component: DatepickerComponent
  },
  {
    path: "dialog",
    component: DialogComponent
  },
  {
    path: "layout",
    component: LayoutComponent
  },
  {
    path: "list",
    component: ListComponent
  },
  {
    path: "list-sample-1",
    component: ListSample1Component
  },
  {
    path: "list-sample-2",
    component: ListSample2Component
  },
  {
    path: "list-sample-3",
    component: ListSample3Component
  },
  {
    path: "list-sample-4",
    component: ListSample4Component
  },
  {
    path: "navigation-drawer",
    component: NavdrawerComponent
  },
  {
    path: "grid",
    component: GridComponent
  },
  {
    path: "snackbar",
    component: SnackbarComponent
  },
  {
    path: "avatar",
    component: AvatarComponent
  },
  {
    path: "badge",
    component: BadgeComponent
  },
  {
    path: "form-elements",
    component: FormElementsComponent
  },
  {
    path: "toast",
    component: ToastComponent
  },
  {
    path: "slider",
    component: SliderComponent
  },
  {
    path: "progressbar",
    component: ProgressbarComponent
  },
  {
    path: "tabbar",
    component: TabbarComponent
  },
  {
    path: "navbar",
    component: NavbarComponent
  },
  {
    path: "scroll",
    component: ScrollComponent
  },
  {
    path: "buttons",
    component: ButtonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
