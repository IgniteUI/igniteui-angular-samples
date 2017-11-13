import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxCalendarModule,
    IgxCardModule,
    IgxCarouselModule,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxFilterModule,
    IgxGridModule,
    IgxIconModule,
    IgxInput,
    IgxLabelModule,
    IgxLayout,
    IgxListModule,
    IgxNavigationDirectives,
    IgxProgressBarModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSnackbarModule,
    IgxSwitchModule,
    NavigationDrawerModule,
    IgxToastModule,
    IgxSliderModule,
    IgxTabBarModule,
    IgxNavbarModule,
    IgxScrollModule
} from 'igniteui-js-blocks/main';


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
import { LayoutComponent } from './layout/layout.component';
import { NavdrawerComponent } from './navdrawer/navdrawer.component';
import { ToastComponent } from './toast/toast.component';
import { SliderComponent } from './slider/slider.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrollComponent } from './scroll/scroll.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    GridComponent,
    CarouselComponent,
    CalendarComponent,
    DialogComponent,
    DatepickerComponent,
    SnackbarComponent,
    LayoutComponent,
    NavdrawerComponent,
    ToastComponent,
    SliderComponent,
    ProgressbarComponent,
    TabbarComponent,
    NavbarComponent,
    ScrollComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    IgxGridModule,
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
    IgxRippleModule,
    IgxIconModule,
    IgxDialogModule,
    IgxDatePickerModule,
    IgxCalendarModule,
    IgxSnackbarModule,
    IgxCardModule,
    IgxListModule,
    IgxToastModule,
    IgxSliderModule,
    IgxTabBarModule,
    IgxNavbarModule,
    IgxScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
