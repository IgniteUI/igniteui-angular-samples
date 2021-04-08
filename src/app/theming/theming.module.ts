import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxButtonGroupModule, IgxButtonModule, IgxCalendarModule, IgxCardModule, IgxDatePickerModule,
    IgxDialogModule, IgxDividerModule, IgxDropDownModule, IgxGridModule, IgxIconModule, IgxInputGroupModule,
    IgxLayoutModule, IgxListModule, IgxRippleModule, IgxSelectModule, IgxSnackbarModule, IgxToggleModule } from 'igniteui-angular';
import { AnimationsSampleComponent } from './animations/animations-sample-1/animations-sample-1.component';
import { AnimationsSample2Component } from './animations/animations-sample-2/animations-sample-2.component';
import { DefaultThemeSampleComponent } from './default-theme-sample/default-theme-sample.component';
import { DisplayDensityComponent } from './display-density/display-density.component';
import { CardSampleShadowComponent } from './shadows/card-sample-shadow/card-sample-shadow';
import { ShadowsSampleComponent } from './shadows/shadows-sample-1/shadows-sample.component';
import { ShadowsSample2Component } from './shadows/shadows-sample-2/shadows-sample-2.component';
import { ThemingRoutingModule } from './theming-routing.module';

@NgModule({
    declarations: [
        DefaultThemeSampleComponent,
        DisplayDensityComponent,
        ShadowsSampleComponent,
        ShadowsSample2Component,
        CardSampleShadowComponent,
        AnimationsSampleComponent,
        AnimationsSample2Component
    ],
    exports: [
        DefaultThemeSampleComponent,
        DisplayDensityComponent,
        ShadowsSampleComponent,
        ShadowsSample2Component,
        CardSampleShadowComponent,
        AnimationsSampleComponent,
        AnimationsSample2Component
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxCardModule,
        ThemingRoutingModule,
        IgxButtonGroupModule,
        IgxButtonModule,
        IgxCalendarModule,
        IgxDatePickerModule,
        IgxDialogModule,
        IgxDividerModule,
        IgxDropDownModule,
        IgxGridModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxLayoutModule,
        IgxListModule,
        IgxRippleModule,
        IgxSnackbarModule,
        IgxToggleModule,
        IgxSelectModule
    ]
})
export class ThemingModule {}
