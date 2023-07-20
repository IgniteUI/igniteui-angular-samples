import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeIconComponent } from './badge/badge-icon/badge-icon.component';
import { BadgeSample2Component } from './badge/badge-sample-2/badge-sample-2.component';
import { BadgeSample3Component } from './badge/badge-sample-3/badge-sample-3.component';
import {
    BadgeStylingSampleComponent
} from './badge/badge-styling-sample/badge-styling-sample.component';
import { ChipAreaSampleComponent } from './chip/chip-area-sample/chip-area-sample.component';
import { ChipSimpleComponent } from './chip/chip-simple/chip-simple.component';
import { ChipStylingSampleComponent } from './chip/chip-styling/chip-styling.component';
import {
    CircularDynamicSampleComponent
} from './circular-progressbar/circular-dynamic-sample/circular-dynamic-sample.component';
// eslint-disable-next-line max-len
import { CircularIndeterminateProgressbarComponent } from './circular-progressbar/circular-indeterminate-progressbar/circular-indeterminate-progressbar.component';
import { CircularProgressbarComponent } from './circular-progressbar/circular-progressbar.component';
import {
    CircularStylingSampleComponent
} from './circular-progressbar/circular-styling-sample/circular-styling-sample.component';
import { dataDisplayRoutesData } from './data-display-routes-data';
import { IconSample1Component } from './icon/icon-sample-1/icon-sample-1.component';
import { IconSample2Component } from './icon/icon-sample-2/icon-sample-2.component';
import { IconSample3Component } from './icon/icon-sample-3/icon-sample-3.component';
import { IconSample4Component } from './icon/icon-sample-4/icon-sample-4.component';
import { IconSample5Component } from './icon/icon-sample-5/icon-sample-5.component';
import { IconStylingSampleComponent } from './icon/icon-styling-sample/icon-styling-sample.component';
import { SvgIconSampleComponent } from './icon/svg-icon-sample/svg-icon-sample.component';
import { IgxForComponent } from './igxFor/igxFor.component';
import { IgxForHorizontalComponent } from './igxFor/igxFor-horizontal-sample/igxFor-horizontal.component';
import {
    LinearDynamicSampleComponent
} from './linear-progressbar/linear-dynamic-sample/linear-dynamic-sample.component';
import { LinearProgressbarSample1Component
} from './linear-progressbar/linear-progressbar-sample-1/linear-progressbar-sample-1.component';
import { LinearProgressbarSample2Component
} from './linear-progressbar/linear-progressbar-sample-2/linear-progressbar-sample-2.component';
import {
    LinearProgressbarStylingComponent
} from './linear-progressbar/linear-progressbar-styling-sample/linear-progressbar-styling-sample.component';
import { LinearProgressbarComponent } from './linear-progressbar/linear-progressbar.component';
import { MaskSample1Component } from './mask/mask-sample-1/mask-sample-1.component';
import { MaskSample2Component } from './mask/mask-sample-2/mask-sample-2.component';
import { MaskSample3Component } from './mask/mask-sample-3/mask-sample-3.component';
import { MaskSample4Component } from './mask/mask-sample-4/mask-sample-4.component';
import { MaskSample5Component } from './mask/mask-sample-5/mask-sample-5.component';
import { TextHighlightSample1Component
} from './text-highlight/text-highlight-sample-1/text-highlight-sample-1.component';
import { TextHighlightSample2Component
} from './text-highlight/text-highlight-sample-2/text-highlight-sample-2.component';
import { TextHighlightStyleComponent } from './text-highlight/text-highlight-style/text-highlight-style.component';
import { MaterialSymbolsComponent } from './icon/material-symbols/material-symbols.component';
import { MaterialIconsExtendedComponent } from './icon/material-icons-extended/material-icons-extended.component';

export const dataDisplayRoutes: Routes = [
    {
        component: BadgeIconComponent,
        data: dataDisplayRoutesData['badge-icon'],
        path: 'badge-icon'
    },
    {
        component: BadgeSample2Component,
        data: dataDisplayRoutesData['badge-sample-2'],
        path: 'badge-sample-2'
    },
    {
        component: BadgeSample3Component,
        data: dataDisplayRoutesData['badge-sample-3'],
        path: 'badge-sample-3'
    },
    {
        component: BadgeStylingSampleComponent,
        data: dataDisplayRoutesData['badge-styling-sample'],
        path: 'badge-styling-sample'
    },
    {
        component: ChipAreaSampleComponent,
        data: dataDisplayRoutesData['chip-area-sample'],
        path: 'chip-area-sample'
    },
    {
        component: ChipSimpleComponent,
        data: dataDisplayRoutesData['chip-simple'],
        path: 'chip-simple'
    },
    {
        component: CircularDynamicSampleComponent,
        data: dataDisplayRoutesData['circular-dynamic-sample'],
        path: 'circular-dynamic-sample'
    },
    {
        component: CircularIndeterminateProgressbarComponent,
        data: dataDisplayRoutesData['circular-indeterminate-progressbar'],
        path: 'circular-indeterminate-progressbar'
    },
    {
        component: CircularStylingSampleComponent,
        data: dataDisplayRoutesData['circular-styling-sample'],
        path: 'circular-styling-sample'
    },
    {
        component: CircularProgressbarComponent,
        data: dataDisplayRoutesData['circular-progressbar'],
        path: 'circular-progressbar'
    },
    {
        component: IconSample1Component,
        data: dataDisplayRoutesData['icon-sample-1'],
        path: 'icon-sample-1'
    },
    {
        component: IconSample2Component,
        data: dataDisplayRoutesData['icon-sample-2'],
        path: 'icon-sample-2'
    },
    {
        component: IconSample3Component,
        data: dataDisplayRoutesData['icon-sample-3'],
        path: 'icon-sample-3'
    },
    {
        component: IconSample4Component,
        data: dataDisplayRoutesData['icon-sample-4'],
        path: 'icon-sample-4'
    },
    {
        component: IconSample5Component,
        data: dataDisplayRoutesData['icon-sample-5'],
        path: 'icon-sample-5'
    },
    {
        component: SvgIconSampleComponent,
        data: dataDisplayRoutesData['svg-icon-sample'],
        path: 'svg-icon-sample'
    },
    {
        component: IgxForComponent,
        data: dataDisplayRoutesData['igx-for-sample-1'],
        path: 'igx-for-sample-1'
    },
    {
        component: IgxForHorizontalComponent,
        data: dataDisplayRoutesData['igx-for-sample-2'],
        path: 'igx-for-sample-2'
    },
    {
        component: LinearDynamicSampleComponent,
        data: dataDisplayRoutesData['linear-dynamic-sample'],
        path: 'linear-dynamic-sample'
    },
    {
        component: LinearProgressbarComponent,
        data: dataDisplayRoutesData['linear-progressbar'],
        path: 'linear-progressbar'
    },
    {
        component: LinearProgressbarSample1Component,
        data: dataDisplayRoutesData['linear-progressbar-sample-1'],
        path: 'linear-progressbar-sample-1'
    },
    {
        component: LinearProgressbarSample2Component,
        data: dataDisplayRoutesData['linear-progressbar-sample-2'],
        path: 'linear-progressbar-sample-2'
    },
    {
        component: LinearProgressbarStylingComponent,
        data: dataDisplayRoutesData['linear-progressbar-styling'],
        path: 'linear-progressbar-styling'
    },
    {
        component: MaskSample1Component,
        data: dataDisplayRoutesData['mask-sample-1'],
        path: 'mask-sample-1'
    },
    {
        component: MaskSample2Component,
        data: dataDisplayRoutesData['mask-sample-2'],
        path: 'mask-sample-2'
    },
    {
        component: MaskSample3Component,
        data: dataDisplayRoutesData['mask-sample-3'],
        path: 'mask-sample-3'
    },
    {
        component: MaskSample4Component,
        data: dataDisplayRoutesData['mask-sample-4'],
        path: 'mask-sample-4'
    },
    {
        component: MaskSample5Component,
        data: dataDisplayRoutesData['mask-sample-5'],
        path: 'mask-sample-5'
    },
    {
        component: TextHighlightSample1Component,
        data: dataDisplayRoutesData['text-highlight-1'],
        path: 'text-highlight-1'
    },
    {
        component: TextHighlightSample2Component,
        data: dataDisplayRoutesData['text-highlight-2'],
        path: 'text-highlight-2'
    },
    {
        component: TextHighlightStyleComponent,
        data: dataDisplayRoutesData['text-highlight-style'],
        path: 'text-highlight-style'
    },
    {
        component: IconStylingSampleComponent,
        data: dataDisplayRoutesData['icon-styling'],
        path: 'icon-styling'
    },
    {
        component: ChipStylingSampleComponent,
        data: dataDisplayRoutesData['chip-styling'],
        path: 'chip-styling'
    },
    {
        component: MaterialSymbolsComponent,
        data: dataDisplayRoutesData['material-symbols'],
        path: 'material-symbols'
    },
    {
        component: MaterialIconsExtendedComponent,
        data: dataDisplayRoutesData['material-icons-extended'],
        path: 'material-icons-extended'
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
