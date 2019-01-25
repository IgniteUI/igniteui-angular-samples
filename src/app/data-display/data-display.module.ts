import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxChipsModule, IgxDropDownModule,
    IgxFilterModule, IgxForOfModule, IgxIconModule, IgxInputGroupModule, IgxListModule,
    IgxMaskModule, IgxProgressBarModule, IgxRippleModule, IgxSnackbarModule, IgxSwitchModule,
    IgxTextHighlightModule, IgxToastModule} from "igniteui-angular";
import { BadgeSample1Component } from "./badge/badge-sample-1/badge-sample-1.component";
import { BadgeSample2Component } from "./badge/badge-sample-2/badge-sample-2.component";
import { BadgeSample3Component } from "./badge/badge-sample-3/badge-sample-3.component";
import { ChipSampleComponent, EmailFilterPipe } from "./chip/chip.component";
import { CircularIndeterminateProgressbarComponent } from "./circular-progressbar/circular-indeterminate-progressbar/circular-indeterminate-progressbar.component";
import { CircularProgressbarComponent } from "./circular-progressbar/circular-progressbar.component";
import { DataDisplayRoutingModule } from "./data-display-routing.module";
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
import { DisplayFormatPipe, InputFormatPipe, MaskSample4Component } from "./mask/mask-sample-4/mask-sample-4.component";
import { MaskSample5Component } from "./mask/mask-sample-5/mask-sample-5.component";
import { TextHighlightSample1Component
} from "./text-highlight/text-highlight-sample-1/text-highlight-sample-1.component";
import { TextHighlightSample2Component
} from "./text-highlight/text-highlight-sample-2/text-highlight-sample-2.component";

@NgModule({
    declarations: [
        EmailFilterPipe,
        DisplayFormatPipe,
        InputFormatPipe,
        BadgeSample1Component,
        BadgeSample2Component,
        BadgeSample3Component,
        ChipSampleComponent,
        CircularProgressbarComponent,
        IconSample1Component,
        IconSample2Component,
        SvgIconSampleComponent,
        IgxForComponent,
        LinearProgressbarComponent,
        LinearProgressbarSample1Component,
        LinearProgressbarSample2Component,
        MaskSample1Component,
        MaskSample2Component,
        MaskSample3Component,
        MaskSample4Component,
        MaskSample5Component,
        TextHighlightSample1Component,
        TextHighlightSample2Component,
        CircularIndeterminateProgressbarComponent
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
