import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IgxAvatarModule, IgxButtonGroupModule, IgxButtonModule, IgxCalendarModule, IgxCardModule, IgxDatePickerModule,
    IgxDialogModule, IgxDividerModule, IgxDropDownModule, IgxExpansionPanelModule, IgxGridModule, IgxIconButtonDirective, IgxIconModule, IgxInputGroupModule,
    IgxLayoutModule, IgxListModule, IgxRippleModule, IgxSelectModule, IgxSnackbarModule, IgxToggleModule } from 'igniteui-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
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
        IgxIconButtonDirective,
        NgbModule,
        DefaultThemeSampleComponent,
        DisplayDensityComponent,
        ShadowsSampleComponent,
        ShadowsSample2Component,
        CardSampleShadowComponent,
        AnimationsSampleComponent,
        AnimationsSample2Component,
        AngularMaterialComponent,
        BootstrapComponent
    ]
})
export class ThemingModule {}
