import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    IgxAvatarModule,
    IgxBadgeModule,
    IgxBannerModule,
    IgxBottomNavModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCalendarModule,
    IgxCardModule,
    IgxCarouselModule,
    IgxCheckboxModule,
    IgxChipsModule,
    IgxColumnHidingModule,
    IgxComboModule,
    IgxCsvExporterService,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxDragDropModule,
    IgxDropDownModule,
    IgxExcelExporterService,
    IgxExpansionPanelModule,
    IgxFilterModule,
    IgxForOfModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxLayoutModule,
    IgxListModule,
    IgxMaskModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    IgxNavigationModule,
    IgxOverlayService,
    IgxProgressBarModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSliderModule,
    IgxSnackbarModule,
    IgxSwitchModule,
    IgxTabsModule,
    IgxTextHighlightModule,
    IgxTimePickerModule,
    IgxToastModule,
    IgxToggleModule,
    IgxTooltipModule,
    IgxTreeGridModule
} from "igniteui-angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BadgeSample1Component } from "./badge/badge-sample-1/badge-sample-1.component";
import { BadgeSample2Component } from "./badge/badge-sample-2/badge-sample-2.component";
import { BadgeSample3Component } from "./badge/badge-sample-3/badge-sample-3.component";
import { ButtonGroupSample1Component } from "./buttonGroup/button-group-sample-1/button-group-sample-1.component";
import { ButtonGroupSample2Component } from "./buttonGroup/button-group-sample-2/button-group-sample-2.component";
import { ButtonGroupSample3Component } from "./buttonGroup/button-group-sample-3/button-group-sample-3.component";
import { ButtonsSample1Component } from "./buttons/buttons-sample-1/buttons-sample-1.component";
import { ButtonsSample2Component } from "./buttons/buttons-sample-2/buttons-sample-2.component";
import { ButtonsSample3Component } from "./buttons/buttons-sample-3/buttons-sample-3.component";
import { ButtonsSample4Component } from "./buttons/buttons-sample-4/buttons-sample-4.component";
import { ButtonsSample5Component } from "./buttons/buttons-sample-5/buttons-sample-5.component";
import { ButtonsSample6Component } from "./buttons/buttons-sample-6/buttons-sample-6.component";
import { ButtonsSample7Component } from "./buttons/buttons-sample-7/buttons-sample-7.component";
import { ChipSampleComponent, EmailFilterPipe } from "./chip/chip.component";
import { CircularProgressbarComponent } from "./circular-progressbar/circular-progressbar.component";
import { DropdownMenuComponent } from "./dropdown/dropdown-menu/dropdown-menu.component";
import { DropDownSample1Component } from "./dropdown/dropdown-sample-1/dropdown-sample-1.component";
import { DropDownSample2Component } from "./dropdown/dropdown-sample-2/dropdown-sample-2.component";
import { DropDownSample3Component } from "./dropdown/dropdown-sample-3/dropdown-sample-3.component";
import { DropDownSample4Component } from "./dropdown/dropdown-sample-4/dropdown-sample-4.component";
import { CheckboxSample1Component } from "./form-elements/checkbox/checkbox-sample-1/checkbox-sample-1.component";
import { CheckboxSample2Component } from "./form-elements/checkbox/checkbox-sample-2/checkbox-sample-2.component";
import { RadioGroupSampleComponent } from "./form-elements/radio/radio-group-sample/radio-group-sample.component";
import { RadioSample1Component } from "./form-elements/radio/radio-sample-1/radio-sample-1.component";
import { RadioSample2Component } from "./form-elements/radio/radio-sample-2/radio-sample-2.component";
import { SwitchSample1Component } from "./form-elements/switch/switch-sample-1/switch-sample-1.component";
import { SwitchSample2Component } from "./form-elements/switch/switch-sample-2/switch-sample-2.component";
import { HomeComponent } from "./home/home.component";
import { IconSample1Component } from "./icon/icon-sample-1/icon-sample-1.component";
import { IconSample2Component } from "./icon/icon-sample2/icon-sample2.component";
import { SvgIconSampleComponent } from "./icon/svg-icon-sample/svg-icon-sample.component";
import { IgxForComponent } from "./igxFor/igxFor.component";
import { DocsLayoutComponent } from "./index/docs-layout.component";
import { IndexComponent } from "./index/index.component";
import { InputGroupSample1Component } from "./input-group/input-group-sample-1/input-group-sample-1.component";
import { InputGroupSample2Component } from "./input-group/input-group-sample-2/input-group-sample-2.component";
import { InputGroupSample3Component } from "./input-group/input-group-sample-3/input-group-sample-3.component";
import { InputGroupSample4Component } from "./input-group/input-group-sample-4/input-group-sample-4.component";
import { InputGroupSample5Component } from "./input-group/input-group-sample-5/input-group-sample-5.component";
import { InputGroupSample6Component } from "./input-group/input-group-sample-6/input-group-sample-6.component";
import { ReactiveFormsSampleComponent } from "./input-group/reactive-forms/reactive-forms.component";
import { CardSampleModule } from "./layouts/card/card-sample-1/card-sample-1.module";
import {
    LinearProgressbarSample1Component
} from "./linear-progressbar/linear-progressbar-sample-1/linear-progressbar-sample-1.component";
import {
    LinearProgressbarSample2Component
} from "./linear-progressbar/linear-progressbar-sample-2/linear-progressbar-sample-2.component";
import { LinearProgressbarComponent } from "./linear-progressbar/linear-progressbar.component";
import { MaskSample1Component } from "./mask/mask-sample-1/mask-sample-1.component";
import { MaskSample2Component } from "./mask/mask-sample-2/mask-sample-2.component";
import { MaskSample3Component } from "./mask/mask-sample-3/mask-sample-3.component";
import { DisplayFormatPipe, InputFormatPipe, MaskSample4Component } from "./mask/mask-sample-4/mask-sample-4.component";
import { MaskSample5Component } from "./mask/mask-sample-5/mask-sample-5.component";
import {
    TextHighlightSample1Component
} from "./text-highlight/text-highlight-sample-1/text-highlight-sample-1.component";
import {
    TextHighlightSample2Component
} from "./text-highlight/text-highlight-sample-2/text-highlight-sample-2.component";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        EmailFilterPipe,
        DisplayFormatPipe,
        InputFormatPipe,
        AppComponent,
        BadgeSample1Component,
        BadgeSample2Component,
        BadgeSample3Component,
        CheckboxSample1Component,
        CheckboxSample2Component,
        CircularProgressbarComponent,
        LinearProgressbarComponent,
        DropDownSample1Component,
        DropDownSample2Component,
        DropDownSample3Component,
        DropDownSample4Component,
        ButtonsSample1Component,
        ButtonsSample2Component,
        ButtonsSample3Component,
        ButtonsSample4Component,
        ButtonsSample5Component,
        ButtonsSample6Component,
        ButtonsSample7Component,
        SwitchSample1Component,
        SwitchSample2Component,
        RadioSample1Component,
        RadioSample2Component,
        IconSample1Component,
        IconSample2Component,
        SvgIconSampleComponent,
        IgxForComponent,
        LinearProgressbarSample1Component,
        LinearProgressbarSample2Component,
        ButtonGroupSample1Component,
        ButtonGroupSample2Component,
        ButtonGroupSample3Component,
        MaskSample1Component,
        MaskSample2Component,
        MaskSample3Component,
        MaskSample4Component,
        MaskSample5Component,
        InputGroupSample1Component,
        InputGroupSample2Component,
        InputGroupSample3Component,
        InputGroupSample4Component,
        InputGroupSample5Component,
        InputGroupSample6Component,
        ChipSampleComponent,
        RadioGroupSampleComponent,
        ReactiveFormsSampleComponent,
        RadioGroupSampleComponent,
        HomeComponent,
        DocsLayoutComponent,
        IndexComponent,
        TextHighlightSample1Component,
        TextHighlightSample2Component,
        SvgIconSampleComponent,
        DropdownMenuComponent
    ],
    imports: [
        IgxDropDownModule,
        IgxInputGroupModule,
        IgxChipsModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        IgxGridModule.forRoot(),
        IgxCarouselModule,
        IgxComboModule,
        IgxLayoutModule,
        IgxRadioModule,
        IgxSwitchModule,
        IgxNavigationModule,
        IgxNavigationDrawerModule,
        IgxProgressBarModule,
        IgxAvatarModule,
        IgxFilterModule,
        IgxBadgeModule,
        IgxBannerModule,
        IgxButtonModule,
        IgxButtonGroupModule,
        IgxRippleModule,
        IgxIconModule,
        IgxDialogModule,
        IgxDatePickerModule,
        IgxExpansionPanelModule,
        IgxCalendarModule,
        IgxSnackbarModule,
        IgxCardModule,
        IgxListModule,
        IgxCheckboxModule,
        IgxToastModule,
        IgxSliderModule,
        IgxBottomNavModule,
        IgxTabsModule,
        IgxNavbarModule,
        IgxToggleModule,
        HttpClientModule,
        HttpModule,
        IgxForOfModule,
        IgxMaskModule,
        IgxTimePickerModule,
        IgxInputGroupModule,
        IgxColumnHidingModule,
        IgxTextHighlightModule,
        IgxDragDropModule,
        IgxTooltipModule,
        IgxTreeGridModule,
        CardSampleModule
    ],
    providers: [
        IgxCsvExporterService,
        IgxExcelExporterService,
        IgxOverlayService
    ]
})
export class AppModule { }
