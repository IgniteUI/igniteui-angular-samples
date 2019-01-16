import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
import { CheckboxSample1Component } from "./checkbox/checkbox-sample-1/checkbox-sample-1.component";
import { CheckboxSample2Component } from "./checkbox/checkbox-sample-2/checkbox-sample-2.component";
import { DropdownMenuComponent } from "./dropdown/dropdown-menu/dropdown-menu.component";
import { DropDownSample1Component } from "./dropdown/dropdown-sample-1/dropdown-sample-1.component";
import { DropDownSample2Component } from "./dropdown/dropdown-sample-2/dropdown-sample-2.component";
import { DropDownSample3Component } from "./dropdown/dropdown-sample-3/dropdown-sample-3.component";
import { DropDownSample4Component } from "./dropdown/dropdown-sample-4/dropdown-sample-4.component";
import { InputGroupSample1Component } from "./input-group/input-group-sample-1/input-group-sample-1.component";
import { InputGroupSample2Component } from "./input-group/input-group-sample-2/input-group-sample-2.component";
import { InputGroupSample3Component } from "./input-group/input-group-sample-3/input-group-sample-3.component";
import { InputGroupSample4Component } from "./input-group/input-group-sample-4/input-group-sample-4.component";
import { InputGroupSample5Component } from "./input-group/input-group-sample-5/input-group-sample-5.component";
import { InputGroupSample6Component } from "./input-group/input-group-sample-6/input-group-sample-6.component";
import { ReactiveFormsSampleComponent } from "./input-group/reactive-forms/reactive-forms.component";
import { RadioGroupSampleComponent } from "./radio/radio-group-sample/radio-group-sample.component";
import { RadioSample1Component } from "./radio/radio-sample-1/radio-sample-1.component";
import { RadioSample2Component } from "./radio/radio-sample-2/radio-sample-2.component";
import { SwitchSample1Component } from "./switch/switch-sample-1/switch-sample-1.component";
import { SwitchSample2Component } from "./switch/switch-sample-2/switch-sample-2.component";

export const dataEntriesRoutes: Routes = [
    {
        component: ButtonGroupSample1Component,
        data: { displayName: "Button Group Overview", parentName: "Button Group" },
        path: "button-group-sample-1"
    },
    {
        component: ButtonGroupSample2Component,
        data: { displayName: "Vertical Button Group", parentName: "Button Group" },
        path: "button-group-sample-2"
    },
    {
        component: ButtonGroupSample3Component,
        data: { displayName: "Horizontal Button Group", parentName: "Button Group" },
        path: "button-group-sample-3"
    },
    {
        component: ButtonsSample1Component,
        data: { displayName: "Flat Buttons Overview", parentName: "Buttons" },
        path: "buttons-sample-1"
    },
    {
        component: ButtonsSample2Component,
        data: { displayName: "Flat Button", parentName: "Buttons" },
        path: "buttons-sample-2"
    },
    {
        component: ButtonsSample3Component,
        data: { displayName: "Flat Button Ripple Color", parentName: "Buttons" },
        path: "buttons-sample-3"
    },
    {
        component: ButtonsSample4Component,
        data: { displayName: "Flat Button Ripple Color 2", parentName: "Buttons" },
        path: "buttons-sample-4"
    },
    {
        component: ButtonsSample5Component,
        data: { displayName: "Raised Button", parentName: "Buttons" },
        path: "buttons-sample-5"
    },
    {
        component: ButtonsSample6Component,
        data: { displayName: "Floating Action Button", parentName: "Buttons" },
        path: "buttons-sample-6"
    },
    {
        component: ButtonsSample7Component,
        data: { displayName: "Icon Button", parentName: "Buttons" },
        path: "buttons-sample-7"
    },
    {
        component: CheckboxSample1Component,
        data: { displayName: "Simple Checkbox", parentName: "Checkbox" },
        path: "checkbox-sample-1"
    },
    {
        component: CheckboxSample2Component,
        data: { displayName: "Multiple Checkboxes", parentName: "Checkbox" },
        path: "checkbox-sample-2"
    },
    {
        component: DropdownMenuComponent,
        data: { displayName: "Dropdown as Menu", parentName: "Dropdown" },
        path: "dropdown-menu"
    },
    {
        component: DropDownSample1Component,
        data: { displayName: "Simple Dropdown", parentName: "Dropdown" },
        path: "dropdown-sample-1"
    },
    {
        component: DropDownSample2Component,
        data: { displayName: "Dropdown Selection", parentName: "Dropdown" },
        path: "dropdown-sample-2"
    },
    {
        component: DropDownSample3Component,
        data: { displayName: "Dropdown Headers", parentName: "Dropdown" },
        path: "dropdown-sample-3"
    },
    {
        component: DropDownSample4Component,
        data: { displayName: "Input Dropdown Selection", parentName: "Dropdown" },
        path: "dropdown-sample-4"
    },
    {
        component: InputGroupSample1Component,
        data: { displayName: "Simple Input Group", parentName: "Input Group" },
        path: "input-group-sample-1"
    },
    {
        component: InputGroupSample2Component,
        data: { displayName: "Input Required", parentName: "Input Group" },
        path: "input-group-sample-2"
    },
    {
        component: InputGroupSample3Component,
        data: { displayName: "Input Group Prefix and Sufix", parentName: "Input Group" },
        path: "input-group-sample-3"
    },
    {
        component: InputGroupSample4Component,
        data: { displayName: "Input Group Hint", parentName: "Input Group" },
        path: "input-group-sample-4"
    },
    {
        component: InputGroupSample5Component,
        data: { displayName: "Input Group Styling", parentName: "Input Group" },
        path: "input-group-sample-5"
    },
    {
        component: InputGroupSample6Component,
        data: { displayName: "Input Group Full Form", parentName: "Input Group" },
        path: "input-group-sample-6"
    },
    {
        component: ReactiveFormsSampleComponent,
        data: { displayName: "Reactive Forms Overview", parentName: "Reactive Forms" },
        path: "reactive-forms"
    },
    {
        component: RadioSample1Component,
        data: { displayName: "Simple Radio Buttons", parentName: "Radio" },
        path: "radio-sample-1"
    },
    {
        component: RadioSample2Component,
        data: { displayName: "Radio Button Binding", parentName: "Radio" },
        path: "radio-sample-2"
    },
    {
        component: RadioGroupSampleComponent,
        data: { displayName: "Radio Group", parentName: "Radio" },
        path: "radio-group-sample"
    },
    {
        component: SwitchSample1Component,
        data: { displayName: "Switch Overview", parentName: "Switch" },
        path: "switch-sample-1"
    },
    {
        component: SwitchSample2Component,
        data: { displayName: "Multiple Switches", parentName: "Switch" },
        path: "switch-sample-2"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(dataEntriesRoutes)
    ]
})
export class DataEntriesRoutingModule { }
