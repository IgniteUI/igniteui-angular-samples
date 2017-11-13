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
    IgxCheckboxModule,
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
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { FormElementsComponent } from './form-elements/form-elements.component';


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
    AvatarComponent,
    BadgeComponent,
    FormElementsComponent
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
    IgxLabelModule,
    IgxCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
