import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BadgeSample1Component } from "./badge/badge-sample-1/badge-sample-1.component";
import { BadgeSample2Component } from "./badge/badge-sample-2/badge-sample-2.component";
import { BadgeSample3Component } from "./badge/badge-sample-3/badge-sample-3.component";
import { ChipSampleComponent } from "./chip/chip.component";
// tslint:disable-next-line:max-line-length
import { CircularIndeterminateProgressbarComponent } from "./circular-progressbar/circular-indeterminate-progressbar/circular-indeterminate-progressbar.component";
import { CircularProgressbarComponent } from "./circular-progressbar/circular-progressbar.component";
import { dataDisplayRoutesData } from "./data-display-routes-data";
import { IconSample1Component } from "./icon/icon-sample-1/icon-sample-1.component";
import { IconSample2Component } from "./icon/icon-sample2/icon-sample2.component";
import { SvgIconSampleComponent } from "./icon/svg-icon-sample/svg-icon-sample.component";
import { IgxForComponent } from "./igxFor/igxFor.component";
import { LinearProgressbarSample1Component
} from "./linear-progressbar/linear-progressbar-sample-1/linear-progressbar-sample-1.component";
import { LinearProgressbarSample2Component
} from "./linear-progressbar/linear-progressbar-sample-2/linear-progressbar-sample-2.component";
import { LinearProgressbarComponent } from "./linear-progressbar/linear-progressbar.component";
import { MaskSample1Component } from "./mask/mask-sample-1/mask-sample-1.component";
import { MaskSample2Component } from "./mask/mask-sample-2/mask-sample-2.component";
import { MaskSample3Component } from "./mask/mask-sample-3/mask-sample-3.component";
import { MaskSample4Component } from "./mask/mask-sample-4/mask-sample-4.component";
import { MaskSample5Component } from "./mask/mask-sample-5/mask-sample-5.component";
import { TextHighlightSample1Component
} from "./text-highlight/text-highlight-sample-1/text-highlight-sample-1.component";
import { TextHighlightSample2Component
} from "./text-highlight/text-highlight-sample-2/text-highlight-sample-2.component";

export const dataDisplayRoutes: Routes = [
    {
        component: BadgeSample1Component,
        data: dataDisplayRoutesData["badge-sample-1"],
        path: "badge-sample-1"
    },
    {
        component: BadgeSample2Component,
        data: dataDisplayRoutesData["badge-sample-2"],
        path: "badge-sample-2"
    },
    {
        component: BadgeSample3Component,
        data: dataDisplayRoutesData["badge-sample-3"],
        path: "badge-sample-3"
    },
    {
        component: ChipSampleComponent,
        data: dataDisplayRoutesData["chip-sample"],
        path: "chip-sample"
    },
    {
        component: CircularIndeterminateProgressbarComponent,
        data: dataDisplayRoutesData["circular-indeterminate-progressbar"],
        path: "circular-indeterminate-progressbar"
    },
    {
        component: CircularProgressbarComponent,
        data: dataDisplayRoutesData["circular-progressbar"],
        path: "circular-progressbar"
    },
    {
        component: IconSample1Component,
        data: dataDisplayRoutesData["icon-sample-1"],
        path: "icon-sample-1"
    },
    {
        component: IconSample2Component,
        path: "icon-sample2"
    },
    {
        component: SvgIconSampleComponent,
        data: dataDisplayRoutesData["svg-icon-sample"],
        path: "svg-icon-sample"
    },
    {
        component: IgxForComponent,
        data: dataDisplayRoutesData["igx-for-sample-1"],
        path: "igx-for-sample-1"
    },
    {
        component: LinearProgressbarComponent,
        data: dataDisplayRoutesData["linear-progressbar"],
        path: "linear-progressbar"
    },
    {
        component: LinearProgressbarSample1Component,
        data: dataDisplayRoutesData["linear-progressbar-sample-1"],
        path: "linear-progressbar-sample-1"
    },
    {
        component: LinearProgressbarSample2Component,
        data: dataDisplayRoutesData["linear-progressbar-sample-2"],
        path: "linear-progressbar-sample-2"
    },
    {
        component: MaskSample1Component,
        data: dataDisplayRoutesData["mask-sample-1"],
        path: "mask-sample-1"
    },
    {
        component: MaskSample2Component,
        data: dataDisplayRoutesData["mask-sample-2"],
        path: "mask-sample-2"
    },
    {
        component: MaskSample3Component,
        data: dataDisplayRoutesData["mask-sample-3"],
        path: "mask-sample-3"
    },
    {
        component: MaskSample4Component,
        data: dataDisplayRoutesData["mask-sample-4"],
        path: "mask-sample-4"
    },
    {
        component: MaskSample5Component,
        data: dataDisplayRoutesData["mask-sample-5"],
        path: "mask-sample-5"
    },
    {
        component: TextHighlightSample1Component,
        data: dataDisplayRoutesData["text-highlight-1"],
        path: "text-highlight-1"
    },
    {
        component: TextHighlightSample2Component,
        data: dataDisplayRoutesData["text-highlight-2"],
        path: "text-highlight-2"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(dataDisplayRoutes)
    ]
})
export class DataDisplayRoutingModule { }
