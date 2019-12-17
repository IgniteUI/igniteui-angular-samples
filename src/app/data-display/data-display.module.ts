import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxChipsModule,
    IgxDropDownModule, IgxFilterModule, IgxForOfModule, IgxIconModule, IgxInputGroupModule,
    IgxListModule, IgxMaskModule, IgxProgressBarModule, IgxRippleModule, IgxSnackbarModule,
    IgxSwitchModule, IgxTextHighlightModule, IgxToastModule
} from "igniteui-angular";
import { BadgeSample1Component } from "./badge/badge-sample-1/badge-sample-1.component";
import { BadgeSample2Component } from "./badge/badge-sample-2/badge-sample-2.component";
import { BadgeSample3Component } from "./badge/badge-sample-3/badge-sample-3.component";
import {
    BadgeStylingSampleComponent
} from "./badge/badge-styling-sample/badge-styling-sample.component";
import { ChipStylingSampleComponent } from "./chip-styling/chip-styling.component";
import { ChipSampleComponent } from "./chip/chip.component";
import { EmailFilterPipe } from "./chip/email-filter-pipe";
// tslint:disable-next-line:max-line-length
import { CircularIndeterminateProgressbarComponent } from "./circular-progressbar/circular-indeterminate-progressbar/circular-indeterminate-progressbar.component";
import { CircularProgressbarComponent } from "./circular-progressbar/circular-progressbar.component";
import {
    CircularStylingSampleComponent
} from "./circular-progressbar/circular-styling-sample/circular-styling-sample.component";
import { DataDisplayRoutingModule } from "./data-display-routing.module";
import { IconSample1Component } from "./icon/icon-sample-1/icon-sample-1.component";
import { IconSample2Component } from "./icon/icon-sample2/icon-sample2.component";
import { IconStylingSample } from "./icon/icon-styling-sample/icon-styling-sample.component";
import { SvgIconSampleComponent } from "./icon/svg-icon-sample/svg-icon-sample.component";
import { IgxForComponent } from "./igxFor/igxFor.component";
import {
    LinearProgressbarSample1Component
} from "./linear-progressbar/linear-progressbar-sample-1/linear-progressbar-sample-1.component";
import {
    LinearProgressbarSample2Component
} from "./linear-progressbar/linear-progressbar-sample-2/linear-progressbar-sample-2.component";
import {
    LinearProgressbarStylingComponent
} from "./linear-progressbar/linear-progressbar-styling-sample/linear-progressbar-styling-sample.component";
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
import { TextHighlightStyleComponent } from "./text-highlight/text-highlight-style/text-highlight-style.component";

@NgModule({
    declarations: [
        EmailFilterPipe,
        DisplayFormatPipe,
        InputFormatPipe,
        BadgeSample1Component,
        BadgeSample2Component,
        BadgeSample3Component,
        BadgeStylingSampleComponent,
        ChipSampleComponent,
        CircularProgressbarComponent,
        IconSample1Component,
        IconSample2Component,
        IconStylingSample,
        SvgIconSampleComponent,
        IgxForComponent,
        LinearProgressbarComponent,
        LinearProgressbarSample1Component,
        LinearProgressbarSample2Component,
        LinearProgressbarStylingComponent,
        MaskSample1Component,
        MaskSample2Component,
        MaskSample3Component,
        MaskSample4Component,
        MaskSample5Component,
        TextHighlightSample1Component,
        TextHighlightSample2Component,
        CircularIndeterminateProgressbarComponent,
        CircularStylingSampleComponent,
        ChipStylingSampleComponent,
        TextHighlightStyleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        DataDisplayRoutingModule,
        IgxAvatarModule,
        IgxBadgeModule,
        IgxListModule,
        IgxChipsModule,
        IgxDropDownModule,
        IgxInputGroupModule,
        IgxToastModule,
        IgxButtonModule,
        IgxIconModule,
        IgxProgressBarModule,
        IgxRippleModule,
        IgxFilterModule,
        IgxForOfModule,
        IgxMaskModule,
        IgxSnackbarModule,
        IgxSwitchModule,
        IgxButtonModule,
        IgxTextHighlightModule
    ]
})
export class DataDisplayModule { }
