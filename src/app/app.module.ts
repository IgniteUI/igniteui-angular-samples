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

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AvatarComponent } from "./avatar/avatar.component";
import { BadgeComponent } from "./badge/badge.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { CardSample1Component } from "./card/card-sample-1/card-sample-1.component";
import { CardSample2Component } from "./card/card-sample-2/card-sample-2.component";
import { CardSample3Component } from "./card/card-sample-3/card-sample-3.component";
import { CardComponent } from "./card/card.component";
import { CarouselDetailsViewComponent } from "./carousel/carousel-details/carousel-details.component";
import { CarouselSample1Component } from "./carousel/carousel-sample-1/carousel-sample-1.component";
import { CarouselSample2Component } from "./carousel/carousel-sample-2/carousel-sample-2.component";
import { CarouselSample3Component } from "./carousel/carousel-sample-3/carousel-sample-3.component";
import { CarouselSample4Component } from "./carousel/carousel-sample-4/carousel-sample-4.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { DialogComponent } from "./dialog/dialog.component";
import { CheckboxSample1Component } from "./form-elements/checkbox/checkbox-sample-1/checkbox-sample-1.component";
import { CheckboxSample2Component } from "./form-elements/checkbox/checkbox-sample-2/checkbox-sample-2.component";
import { FormElementsComponent } from "./form-elements/form-elements.component";
import { RadioSample1Component } from "./form-elements/radio/radio-sample-1/radio-sample-1.component";
import { RadioSample2Component } from "./form-elements/radio/radio-sample-2/radio-sample-2.component";
import { SwitchSample1Component } from "./form-elements/switch/switch-sample-1/switch-sample-1.component";
import { SwitchSample2Component } from "./form-elements/switch/switch-sample-2/switch-sample-2.component";
import { GridComponent } from "./grid/grid.component";
import { DataService } from "./grid/services/data.service";
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
import { SliderSample1Component } from "./slider/slider-sample-1/slider-sample-1.component";
import { SliderSample2Component } from "./slider/slider-sample-2/slider-sample-2.component";
import { SliderSample3Component } from "./slider/slider-sample-3/slider-sample-3.component";
import { SliderSample4Component } from "./slider/slider-sample-4/slider-sample-4.component";
import { SliderSample5Component } from "./slider/slider-sample-5/slider-sample-5.component";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { TabbarComponent } from "./tabbar/tabbar.component";
import { ToastComponent } from "./toast/toast.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    CardComponent,
    CardSample1Component,
    CardSample2Component,
    CardSample3Component,
    CheckboxSample1Component,
    CheckboxSample2Component,
    ListComponent,
    ListSample1Component,
    ListSample2Component,
    ListSample3Component,
    ListSample4Component,
    GridComponent,
    CarouselComponent,
    CarouselDetailsViewComponent,
    CarouselSample1Component,
    CarouselSample2Component,
    CarouselSample3Component,
    CarouselSample4Component,
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
    ProgressbarComponent,
    TabbarComponent,
    NavbarComponent,
    ScrollComponent,
    ButtonsComponent,
    SliderSample1Component,
    SliderSample2Component,
    SliderSample3Component,
    SliderSample4Component,
    SliderSample5Component,
    CardSample1Component,
    CardSample2Component,
    CardSample3Component,
    SwitchSample1Component,
    SwitchSample2Component,
    RadioSample1Component,
    RadioSample2Component
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
