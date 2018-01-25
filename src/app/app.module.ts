import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import {
  IgxAvatarModule,
  IgxBadgeModule,
  IgxButtonGroupModule,
  IgxButtonModule,
  IgxCalendarModule,
  IgxCardModule,
  IgxCarouselModule,
  IgxCheckboxModule,
  IgxDatePickerModule,
  IgxDialogModule,
  IgxFilterModule,
  IgxGridModule,
  IgxIconModule,
  IgxInput,
  IgxLabelModule,
  IgxLayout,
  IgxListModule,
  IgxNavbarModule,
  IgxNavigationDirectives,
  IgxProgressBarModule,
  IgxRadioModule,
  IgxRippleModule,
  IgxScrollModule,
  IgxSliderModule,
  IgxSnackbarModule,
  IgxSwitchModule,
  IgxTabBarModule,
  IgxToastModule,
  NavigationDrawerModule
} from "igniteui-angular/main";

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
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
import { DataService } from './grid/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { CardSample1Component } from './card/card-sample-1/card-sample-1.component';
import { CardSample2Component } from './card/card-sample-2/card-sample-2.component';
import { CardSample3Component } from './card/card-sample-3/card-sample-3.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    CardComponent,
    CardSample1Component,
    CardSample2Component,
    CardSample3Component,
    ListComponent,
    ListSample1Component,
    ListSample2Component,
    ListSample3Component,
    ListSample4Component,
    GridComponent,
    CarouselComponent,
    CalendarComponent,
    DialogComponent,
    DatepickerComponent,
    SnackbarComponent,
    AvatarComponent,
    BadgeComponent,
    FormElementsComponent,
    LayoutComponent,
    NavdrawerComponent,
    ToastComponent,
    SliderComponent,
    ProgressbarComponent,
    TabbarComponent,
    NavbarComponent,
    ScrollComponent,
    ButtonsComponent,
    CardSample1Component,
    CardSample2Component,
    CardSample3Component
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    IgxGridModule.forRoot(),
    IgxCarouselModule,
    IgxInput,
    IgxLayout,
    IgxRadioModule,
    IgxSwitchModule,
    IgxNavigationDirectives,
    NavigationDrawerModule,
    IgxProgressBarModule,
    IgxAvatarModule,
    IgxFilterModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxButtonGroupModule,
    IgxRippleModule,
    IgxIconModule,
    IgxDialogModule,
    IgxDatePickerModule,
    IgxCalendarModule,
    IgxSnackbarModule,
    IgxCardModule,
    IgxListModule,
    IgxLabelModule,
    IgxCheckboxModule,
    IgxToastModule,
    IgxSliderModule,
    IgxTabBarModule,
    IgxNavbarModule,
    IgxScrollModule,
    HttpClientModule
  ],
  providers: [DataService]
})
export class AppModule {}
