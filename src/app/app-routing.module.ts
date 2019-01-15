// tslint:disable:max-line-length
import { NgModule } from "@angular/core";
import { NavigationStart, Router, RouterModule, Routes } from "@angular/router";
import "rxjs/add/operator/filter";
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
import { ChipSampleComponent } from "./chip/chip.component";
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
import { CardSample1Component } from "./layouts/card/card-sample-1/card-sample-1.component";
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
import { MaskSample4Component } from "./mask/mask-sample-4/mask-sample-4.component";
import { MaskSample5Component } from "./mask/mask-sample-5/mask-sample-5.component";
import {
    TextHighlightSample1Component
} from "./text-highlight/text-highlight-sample-1/text-highlight-sample-1.component";
import {
    TextHighlightSample2Component
} from "./text-highlight/text-highlight-sample-2/text-highlight-sample-2.component";

export const samplesRoutes: Routes = [
    {
        component: HomeComponent,
        data: { displayName: "Home" },
        path: "home"
    },
    {
        loadChildren: "app/interactions/interactions.module#InteractionsModule",
        path: "interactions"
    },
    {
        loadChildren: "app/notifications/notifications.module#NotificationsModule",
        path: "notifications"
    },
    {
        loadChildren: "app/charts/charts.module#ChartsModule",
        path: "charts"
    },
    {
        loadChildren: "app/lists/lists.module#ListsModule",
        path: "lists"
    }, {
        loadChildren: "app/theming/theming.module#ThemingModule",
        path: "theming"
    },
    {
        loadChildren: "app/scheduling/scheduling.module#SchedulingModule",
        path: "scheduling"
    },
    {
        loadChildren: "app/excel-library/excel-library.module#ExcelLibraryModule",
        path: "excel-library"
    },
    {
        loadChildren: "app/gauges/gauges.module#GaugesModule",
        path: "gauges"
    },
    {
        loadChildren: "app/interactions/interactions.module#InteractionsModule",
        path: "interactions"
    },
    {
        loadChildren: "app/menus/menus.module#MenusModule",
        path: "menus"
    },
    {
        loadChildren: "app/layouts/layouts.module#LayoutsModule",
        path: "layouts"
    },
    {
        loadChildren: "app/services/services.module#ServicesModule",
        path: "services"
    },
    {
        loadChildren: "app/tree-grid/tree-grid.module#TreeGridModule",
        path: "tree-grid"
    },
    {
        loadChildren: "app/grid/grids.module#GridsModule",
        path: "grid"
    },
    {
        loadChildren: "app/grid-crm/grid-crm.module#GridCRMModule",
        path: "grid-crm"
    },
        // excel library samples with lazy loading:
    // {
    //     data: { displayName: "Workbooks Operations", parentName: "Excel Library" },
    //     loadChildren: "app/excel-library/operations-on/workbooks.module#ExcelLibraryOperationsOnWorkbooksModule",
    //     path: "excel-library-operations-on-workbooks"
    // },
    {
        component: BadgeSample1Component,
        data: { displayName: "Badge for List", parentName: "Badge" },
        path: "badge-sample-1"
    },
    {
        component: BadgeSample2Component,
        data: { displayName: "Badge for List with Avatars", parentName: "Badge" },
        path: "badge-sample-2"
    },
    {
        component: BadgeSample3Component,
        data: { displayName: "Badge for List Items", parentName: "Badge" },
        path: "badge-sample-3"
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
        component: CircularProgressbarComponent,
        data: { displayName: "Circular Progressbar Sample", parentName: "Circular Progressbar" },
        path: "circular-progressbar"
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
        component: LinearProgressbarComponent,
        data: { displayName: "Simple Linear Progressbar", parentName: "Linear Progressbar" },
        path: "linear-progressbar"
    },
    {
        component: LinearProgressbarSample1Component,
        data: { displayName: "Linear Progressbar Types", parentName: "Linear Progressbar" },
        path: "linear-progressbar-sample-1"
    },
    {
        component: LinearProgressbarSample2Component,
        data: { displayName: "Linear Progressbar Styling", parentName: "Linear Progressbar" },
        path: "linear-progressbar-sample-2"
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
        component: CardSample1Component,
        data: { displayName: "Card with Header and Content", parentName: "Card" },
        path: "card-sample-1"
    },
    {
        component: IconSample1Component,
        data: { displayName: "Simple Icons", parentName: "Icon" },
        path: "icon-sample-1"
    },
    {
        component: IconSample2Component,
        path: "icon-sample2"
    },
    {
        component: SvgIconSampleComponent,
        data: { displayName: "SVG Icons", parentName: "Icon" },
        path: "svg-icon-sample"
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
        component: IgxForComponent,
        data: { displayName: "List with igxFor directive", parentName: "For" },
        path: "igx-for-sample-1"
    },
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
        component: MaskSample1Component,
        data: { displayName: "Mask Overview", parentName: "Mask" },
        path: "mask-sample-1"
    },
    {
        component: MaskSample2Component,
        data: { displayName: "Mask on Input", parentName: "Mask" },
        path: "mask-sample-2"
    },
    {
        component: MaskSample3Component,
        data: { displayName: "Mask binding to Formatted/Raw Value", parentName: "Mask" },
        path: "mask-sample-3"
    },
    {
        component: MaskSample4Component,
        data: { displayName: "Additional custom formatting", parentName: "Mask" },
        path: "mask-sample-4"
    },
    {
        component: MaskSample5Component,
        data: { displayName: "Placeholder", parentName: "Mask" },
        path: "mask-sample-5"
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
        component: ChipSampleComponent,
        data: { displayName: "Chip Overview", parentName: "Chip" },
        path: "chip-sample"
    },
    {
        component: TextHighlightSample1Component,
        data: { displayName: "Search within a single container", parentName: "Text Highlight" },
        path: "text-highlight-1"
    },
    {
        component: TextHighlightSample2Component,
        data: { displayName: "Search within multiple containers", parentName: "Text Highlight" },
        path: "text-highlight-2"
    }
];
export const appRoutes: Routes = [
    {
        path: "", pathMatch: "full", redirectTo: "/samples/home"
    },
    {
        children: samplesRoutes,
        component: DocsLayoutComponent,
        path: ""
    },
    {
        children: samplesRoutes,
        component: IndexComponent,
        path: "samples"
    }
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {

    constructor(private router: Router) {
        router.events
            .filter((event) => event instanceof NavigationStart)
            .subscribe((event: NavigationStart) => {
                this.setOverflow(event.url);
            });
    }

    public setOverflow(url: string) {
        if (url.endsWith("finjs-sample")) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
    }
}
