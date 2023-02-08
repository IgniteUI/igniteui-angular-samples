import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IgxAvatarModule, IgxButtonGroupModule, IgxButtonModule, IgxCalendarModule, IgxCardModule, IgxDatePickerModule,
    IgxDialogModule, IgxDividerModule, IgxDropDownModule, IgxExpansionPanelModule, IgxGridModule, IgxIconModule, IgxInputGroupModule,
    IgxLayoutModule, IgxListModule, IgxRippleModule, IgxSelectModule, IgxSnackbarModule, IgxToggleModule } from 'igniteui-angular';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AnimationsSampleComponent } from './animations/animations-sample-1/animations-sample-1.component';
import { AnimationsSample2Component } from './animations/animations-sample-2/animations-sample-2.component';
import { AngularMaterialComponent } from './angular/angular-sample.component';
import { BootstrapComponent } from './bootstrap/bootstrap-sample.component';
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
        AnimationsSample2Component,
        AngularMaterialComponent,
        BootstrapComponent
    ],
    exports: [
        DefaultThemeSampleComponent,
        DisplayDensityComponent,
        ShadowsSampleComponent,
        ShadowsSample2Component,
        CardSampleShadowComponent,
        AnimationsSampleComponent,
        AnimationsSample2Component,
        AngularMaterialComponent,
        BootstrapComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IgxAvatarModule,
        IgxCardModule,
        ThemingRoutingModule,
        IgxButtonGroupModule,
        IgxButtonModule,
        IgxCalendarModule,
        IgxDatePickerModule,
        IgxDialogModule,
        IgxDividerModule,
        IgxDropDownModule,
        IgxExpansionPanelModule,
        IgxGridModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxLayoutModule,
        IgxListModule,
        IgxRippleModule,
        IgxSnackbarModule,
        IgxToggleModule,
        IgxSelectModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatSliderModule,
        MatStepperModule,
        MatToolbarModule,
        NgbModule
    ]
})
export class ThemingModule {}
