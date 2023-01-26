import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxChipsModule,
    IgxDropDownModule,
    IgxFilterModule,
    IgxFocusModule,
    IgxForOfModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxSelectModule,
    IgxListModule,
    IgxMaskModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSnackbarModule,
    IgxSwitchModule,
    IgxTextHighlightModule,
    IgxTextSelectionModule,
    IgxToastModule
} from '@infragistics/igniteui-angular';
import { BadgeSample2Component } from './badge/badge-sample-2/badge-sample-2.component';
import { BadgeSample3Component } from './badge/badge-sample-3/badge-sample-3.component';
import { BadgeStylingSampleComponent } from './badge/badge-styling-sample/badge-styling-sample.component';
import { ChipAreaSampleComponent } from './chip/chip-area-sample/chip-area-sample.component';
import { ChipSimpleComponent } from './chip/chip-simple/chip-simple.component';
import { ChipStylingSampleComponent } from './chip/chip-styling/chip-styling.component';
import { CircularDynamicSampleComponent } from './circular-progressbar/circular-dynamic-sample/circular-dynamic-sample.component';
// eslint-disable-next-line max-len
import { CircularIndeterminateProgressbarComponent } from './circular-progressbar/circular-indeterminate-progressbar/circular-indeterminate-progressbar.component';
import { CircularProgressbarComponent } from './circular-progressbar/circular-progressbar.component';
import { CircularStylingSampleComponent } from './circular-progressbar/circular-styling-sample/circular-styling-sample.component';
import { DataDisplayRoutingModule } from './data-display-routing.module';
import { IconSample1Component } from './icon/icon-sample-1/icon-sample-1.component';
import { IconSample2Component } from './icon/icon-sample-2/icon-sample-2.component';
import { IconSample3Component } from './icon/icon-sample-3/icon-sample-3.component';
import { IconSample4Component } from './icon/icon-sample-4/icon-sample-4.component';
import { IconSample5Component } from './icon/icon-sample-5/icon-sample-5.component';
import { IconStylingSampleComponent } from './icon/icon-styling-sample/icon-styling-sample.component';
import { SvgIconSampleComponent } from './icon/svg-icon-sample/svg-icon-sample.component';
import { IgxForComponent } from './igxFor/igxFor.component';
import { IgxForHorizontalComponent } from './igxFor/igxFor-horizontal-sample/igxFor-horizontal.component';
import { LinearDynamicSampleComponent } from './linear-progressbar/linear-dynamic-sample/linear-dynamic-sample.component';
import { LinearProgressbarSample1Component } from './linear-progressbar/linear-progressbar-sample-1/linear-progressbar-sample-1.component';
import { LinearProgressbarSample2Component } from './linear-progressbar/linear-progressbar-sample-2/linear-progressbar-sample-2.component';
// eslint-disable-next-line max-len
import { LinearProgressbarStylingComponent } from './linear-progressbar/linear-progressbar-styling-sample/linear-progressbar-styling-sample.component';
import { LinearProgressbarComponent } from './linear-progressbar/linear-progressbar.component';
import { MaskSample1Component } from './mask/mask-sample-1/mask-sample-1.component';
import { MaskSample2Component } from './mask/mask-sample-2/mask-sample-2.component';
import { MaskSample3Component } from './mask/mask-sample-3/mask-sample-3.component';
import {
    DisplayFormatPipe,
    InputFormatPipe,
    MaskSample4Component
} from './mask/mask-sample-4/mask-sample-4.component';
import { MaskSample5Component } from './mask/mask-sample-5/mask-sample-5.component';
import { TextHighlightSample1Component } from './text-highlight/text-highlight-sample-1/text-highlight-sample-1.component';
import { TextHighlightSample2Component } from './text-highlight/text-highlight-sample-2/text-highlight-sample-2.component';
import { TextHighlightStyleComponent } from './text-highlight/text-highlight-style/text-highlight-style.component';
import {
    MaterialIconsExtendedComponent,
    CategoriesFilterPipe,
    FilterByName
} from './icon/material-icons-extended/material-icons-extended.component';

@NgModule({
    declarations: [
        DisplayFormatPipe,
        InputFormatPipe,
        BadgeSample2Component,
        BadgeSample3Component,
        BadgeStylingSampleComponent,
        ChipAreaSampleComponent,
        ChipSimpleComponent,
        ChipStylingSampleComponent,
        CircularDynamicSampleComponent,
        CircularProgressbarComponent,
        IconSample1Component,
        IconSample2Component,
        IconSample3Component,
        IconSample4Component,
        IconSample5Component,
        IconStylingSampleComponent,
        SvgIconSampleComponent,
        IgxForComponent,
        IgxForHorizontalComponent,
        LinearDynamicSampleComponent,
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
        TextHighlightStyleComponent,
        MaterialIconsExtendedComponent,
        CategoriesFilterPipe,
        FilterByName
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
        IgxFocusModule,
        IgxTextSelectionModule,
        IgxInputGroupModule,
        IgxToastModule,
        IgxButtonModule,
        IgxIconModule,
        IgxSelectModule,
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
export class DataDisplayModule {}
