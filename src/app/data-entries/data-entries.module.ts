import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    IgcFormsModule,
    IgxAutocompleteModule, IgxButtonGroupModule, IgxButtonModule, IgxIconButtonDirective, IgxCalendarModule, IgxCardModule, IgxCheckboxModule, IgxChipsAreaComponent, IgxChipsModule, IgxComboModule,
    IgxDatePickerModule, IgxDateRangePickerModule, IgxDialogModule, IgxDividerModule, IgxDropDownModule, IgxFocusModule, IgxForOfModule,
    IgxIconModule, IgxInputGroupModule, IgxNavbarModule, IgxProgressBarModule, IgxRadioModule, IgxRippleModule,
    IgxSelectModule, IgxSlideComponent, IgxSliderModule, IgxSwitchModule, IgxTextSelectionModule, IgxTimePickerModule, IgxToastModule, IgxToggleModule, IgxTreeGridModule, IgxTreeModule
} from 'igniteui-angular';
import { AutocompleteBasicComponent, AutocompletePipeStartsWith } from './autocomplete/autocomplete/autocomplete.component';
import { MovieComponent } from './autocomplete/movie/movie.component';
import { ButtonGroupSample1Component } from './buttonGroup/button-group-sample-1/button-group-sample-1.component';
import { ButtonGroupSample2Component } from './buttonGroup/button-group-sample-2/button-group-sample-2.component';
import { ButtonGroupSample3Component } from './buttonGroup/button-group-sample-3/button-group-sample-3.component';
import { ButtonGroupSampleComponent } from './buttonGroup/button-group-sample-4/button-group-sample.component';
import { ButtonGroupSample5Component } from './buttonGroup/button-group-sample-5/button-group-sample-5.component';
import { ButtonGroupStyleComponent } from './buttonGroup/button-group-style/button-group-style.component';
import { ButtonsDisabledComponent } from './buttons/buttons-disabled-sample/buttons-disabled-sample';
import { ButtonsDisplayDensityComponent } from './buttons/buttons-display-density/buttons-display-density.component';
import { ButtonsRoundnessComponent } from './buttons/buttons-roundness-sample/buttons-roundness-sample';
import { ButtonsSample1Component } from './buttons/buttons-sample-1/buttons-sample-1.component';
import { ButtonsSample2Component } from './buttons/buttons-sample-2/buttons-sample-2.component';
import { ButtonsSample3Component } from './buttons/buttons-sample-3/buttons-sample-3.component';
import { ButtonsSample4Component } from './buttons/buttons-sample-4/buttons-sample-4.component';
import { ButtonsSample5Component } from './buttons/buttons-sample-5/buttons-sample-5.component';
import { ButtonsSample6Component } from './buttons/buttons-sample-6/buttons-sample-6.component';
import { ButtonsSample7Component } from './buttons/buttons-sample-7/buttons-sample-7.component';
import { ButtonsSample8Component } from './buttons/buttons-sample-8/buttons-sample-8.component';
import { ButtonsStyleComponent } from './buttons/buttons-style/buttons-style.component';
import { CheckboxSample1Component } from './checkbox/checkbox-sample-1/checkbox-sample-1.component';
import { CheckboxSample2Component } from './checkbox/checkbox-sample-2/checkbox-sample-2.component';
import { CheckboxSample3Component } from './checkbox/checkbox-sample-3/checkbox-sample-3.component';
import { CheckboxStylingComponent } from './checkbox/checkbox-styling/checkbox-styling.component';
import { DataEntriesRoutingModule } from './data-entries-routing.module';
import { DropDownRemoteComponent } from './dropdown/drop-down-remote-virtual/drop-down-remote.component';
import { DropDownVirtualComponent } from './dropdown/drop-down-virtual/drop-down-virtual.component';
import { DropdownMenuComponent } from './dropdown/dropdown-menu/dropdown-menu.component';
import { DropdownMultiLevelMenuComponent } from './dropdown/dropdown-multi-level-menu/dropdown-multi-level-menu.component';
import { MultiLevelDirective } from './dropdown/dropdown-multi-level-menu/multi-level.directive';
import { DropDownSample1Component } from './dropdown/dropdown-sample-1/dropdown-sample-1.component';
import { DropDownSample2Component } from './dropdown/dropdown-sample-2/dropdown-sample-2.component';
import { DropDownSample3Component } from './dropdown/dropdown-sample-3/dropdown-sample-3.component';
import { DropDownSample4Component } from './dropdown/dropdown-sample-4/dropdown-sample-4.component';
import { DropDownSample5Component } from './dropdown/dropdown-sample-5/dropdown-sample-5.component';
import { DropDownStylingComponent } from './dropdown/dropdown-styling/dropdown-styling.component';
import { DropdownTreeHierarchicalSelectionComponent } from './dropdown/dropdown-tree-hierarchical-selection/dropdown-tree-hierarchical-selection.component';
import { DropdownTreeGridHierarchicalSelectionComponent } from './dropdown/dropdown-tree-grid-hierarchical-selection/dropdown-tree-grid-hierarchical-selection.component';
import { InputGroupSample1Component } from './input-group/input-group-sample-1/input-group-sample-1.component';
import { InputGroupSample2Component } from './input-group/input-group-sample-2/input-group-sample-2.component';
import { InputGroupSample3Component } from './input-group/input-group-sample-3/input-group-sample-3.component';
import { InputGroupSample4Component } from './input-group/input-group-sample-4/input-group-sample-4.component';
import { InputGroupSample5Component } from './input-group/input-group-sample-5/input-group-sample-5.component';
import { InputGroupSample6Component } from './input-group/input-group-sample-6/input-group-sample-6.component';
import { InputGroupStyleComponent } from './input-group/input-group-styling/input-group-styling.component';
import { InputTextSelectionComponent } from './input-group/input-text-selection/input-text-selection.component';
import { ReactiveFormsSampleComponent } from '../how-to/reactive-forms/reactive-forms.component';
import { RadioGroupVerticalComponent } from './radio/radio-group-vertical/radio-group-vertical.component';
import { RadioGroupSampleComponent } from './radio/radio-group-sample/radio-group-sample.component';
import { RadioSample1Component } from './radio/radio-sample-1/radio-sample-1.component';
import { RadioSample2Component } from './radio/radio-sample-2/radio-sample-2.component';
import { RadioSample3Component } from './radio/radio-sample-3/radio-sample-3.component';
import { RadioStylingSampleComponent } from './radio/radio-styling-sample/radio-styling-sample.component';
import { SelectHeaderFooterComponent } from './select/select-header-footer/select-header-footer.component';
import { SelectInputDirectivesComponent } from './select/select-input-directives/select-input-directives';
import { SelectSample1Component } from './select/select-sample-1/select-sample-1.component';
import { SelectSample2Component } from './select/select-sample-2/select-sample-2.component';
import { SelectSample4Component } from './select/select-sample-4/select-sample-4.component';
import { SelectStylingComponent } from './select/select-styling/select-styling.component';
import { SwitchSample1Component } from './switch/switch-sample-1/switch-sample-1.component';
import { SwitchSample2Component } from './switch/switch-sample-2/switch-sample-2.component';
import { SwitchStylingComponent } from './switch/switch-styling/switch-styling.component';
import { TypedFormComponent } from './input-group/typed-form/typed-form.component';
import { RatingInFormComponent } from './rating/rating-form/rating-form.component';
import { TemplateDrivenFormValidationComponent } from './input-group/template-driven-form-validation/template-driven-form-validation.component';
import { ReactiveFormValidationComponent } from './input-group/reactive-form-validation/reactive-form-validation.component';
import { ReactiveFormCustomValidationComponent } from './input-group/reactive-form-custom-validation/reactive-form-custom-validation.component';
import { IconButtonOverviewComponent } from './icon-button/icon-button-overview/icon-button-overview.component';
import { FlatIconButtonComponent } from './icon-button/flat-icon-button/flat-icon-button.component';
import { ContainedIconButtonComponent } from './icon-button/contained-icon-button/contained-icon-button.component';
import { OutlinedIconButtonComponent } from './icon-button/outlined-icon-button/outlined-icon-button.component';
import { DisabledIconButtonComponent } from './icon-button/disabled-icon-button/disabled-icon-button.component';
import { SVGIconButtonComponent } from './icon-button/svg-icon-button/svg-icon-button.component';
import { IconButtonSizeComponent } from './icon-button/icon-button-size/icon-button-size.component';
import { IconButtonStylingComponent } from './icon-button/icon-button-styling/icon-button-styling.component';

@NgModule({ declarations: [
        AutocompleteBasicComponent,
        AutocompletePipeStartsWith,
        ButtonGroupSample1Component,
        ButtonGroupSample2Component,
        ButtonGroupSample3Component,
        ButtonGroupSample5Component,
        ButtonsDisabledComponent,
        ButtonsRoundnessComponent,
        ButtonsSample1Component,
        ButtonsSample2Component,
        ButtonsSample3Component,
        ButtonsSample4Component,
        ButtonsSample5Component,
        ButtonsSample6Component,
        ButtonsSample7Component,
        ButtonsSample8Component,
        CheckboxSample1Component,
        CheckboxSample2Component,
        CheckboxSample3Component,
        CheckboxStylingComponent,
        DropDownRemoteComponent,
        DropDownVirtualComponent,
        DropdownMenuComponent,
        DropdownMultiLevelMenuComponent,
        MultiLevelDirective,
        DropDownSample1Component,
        DropDownSample2Component,
        DropDownSample3Component,
        DropDownSample4Component,
        DropDownSample5Component,
        DropDownStylingComponent,
        DropdownTreeHierarchicalSelectionComponent,
        DropdownTreeGridHierarchicalSelectionComponent,
        IconButtonOverviewComponent,
        FlatIconButtonComponent,
        ContainedIconButtonComponent,
        OutlinedIconButtonComponent,
        DisabledIconButtonComponent,
        SVGIconButtonComponent,
        IconButtonSizeComponent,
        IconButtonStylingComponent,
        InputGroupSample1Component,
        InputGroupSample2Component,
        InputGroupSample3Component,
        InputGroupSample4Component,
        InputGroupSample5Component,
        InputGroupSample6Component,
        InputGroupStyleComponent,
        MovieComponent,
        ReactiveFormsSampleComponent,
        RadioGroupVerticalComponent,
        RadioGroupSampleComponent,
        RadioSample1Component,
        RadioSample2Component,
        RadioSample3Component,
        RadioStylingSampleComponent,
        RatingInFormComponent,
        SwitchSample1Component,
        SwitchSample2Component,
        SwitchStylingComponent,
        SelectSample1Component,
        SelectSample2Component,
        SelectSample4Component,
        SelectStylingComponent,
        SelectInputDirectivesComponent,
        SelectHeaderFooterComponent,
        ButtonGroupSampleComponent,
        ButtonsDisplayDensityComponent,
        ButtonsStyleComponent,
        ButtonGroupStyleComponent,
        InputTextSelectionComponent,
        TypedFormComponent,
        TemplateDrivenFormValidationComponent,
        ReactiveFormValidationComponent,
        ReactiveFormCustomValidationComponent
    ], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DataEntriesRoutingModule,
        IgxAutocompleteModule,
        IgxButtonGroupModule,
        IgxButtonModule,
        IgxIconButtonDirective,
        IgxDialogModule,
        IgxIconModule,
        IgxRippleModule,
        IgxCheckboxModule,
        IgxDropDownModule,
        IgxInputGroupModule,
        IgxNavbarModule,
        IgxToggleModule,
        IgxComboModule,
        IgxDatePickerModule,
        IgxTimePickerModule,
        IgxToastModule,
        IgxRadioModule,
        IgxSelectModule,
        IgxSwitchModule,
        IgxProgressBarModule,
        IgxForOfModule,
        IgxTextSelectionModule,
        IgxFocusModule,
        IgxCardModule,
        IgxDividerModule,
        IgcFormsModule,
        IgxChipsModule,
        IgxTreeModule,
        IgxTreeGridModule,
        IgxSliderModule,
        IgxDateRangePickerModule,
        IgxCalendarModule,
        IgxCardModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class DataEntriesModule { }
