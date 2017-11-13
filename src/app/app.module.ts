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
    IgxListModule,
    IgxProgressBarModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSnackbarModule,
    IgxSwitchModule,
    IgxToastModule,
    IgxSliderModule
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
import { ToastComponent } from './toast/toast.component';
import { SliderComponent } from './slider/slider.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';


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
    ToastComponent,
    SliderComponent,
    ProgressbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    IgxGridModule,
    IgxCarouselModule,
    IgxInput,
    IgxRadioModule,
    IgxSwitchModule,
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
    IgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
