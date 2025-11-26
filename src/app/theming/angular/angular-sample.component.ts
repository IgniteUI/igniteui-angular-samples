import { Component, HostBinding, OnInit, ViewChild, inject } from '@angular/core';
import { IgxDialogComponent, IgxOverlayOutletDirective, IgxButtonDirective, IgxIconComponent, IgxLayoutDirective, IgxAvatarComponent, IgxIconButtonDirective, IgxCardComponent, IgxCardMediaDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardActionsComponent, IgxDialogActionsDirective, IgxSuffixDirective, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent, IgxDividerDirective } from 'igniteui-angular';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatToolbar } from '@angular/material/toolbar';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { MatStepper, MatStep, MatStepLabel, MatStepperNext, MatStepperPrevious } from '@angular/material/stepper';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'app-angular-sample',
    styleUrls: ['./angular-sample.component.scss'],
    templateUrl: './angular-sample.component.html',
    imports: [MatToolbar, IgxButtonDirective, MatMenuTrigger, IgxIconComponent, MatMenu, MatMenuItem, IgxLayoutDirective, IgxAvatarComponent, IgxIconButtonDirective, IgxCardComponent, IgxCardMediaDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardActionsComponent, MatButton, IgxDialogComponent, IgxDialogActionsDirective, IgxSuffixDirective, IgxOverlayOutletDirective, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent, MatSlider, MatSliderThumb, IgxDividerDirective, MatStepper, MatStep, FormsModule, ReactiveFormsModule, MatStepLabel, MatFormField, MatLabel, MatInput, MatStepperNext, MatStepperPrevious]
})

export class AngularMaterialComponent implements OnInit {
    private _formBuilder = inject(FormBuilder);
    private overlayContainer = inject(OverlayContainer);

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    public outlet: IgxOverlayOutletDirective;

    @ViewChild('dialog', { read: IgxDialogComponent, static: true })
    public dialog: IgxDialogComponent;

    @HostBinding('class')
    public themesClass: 'light' | 'dark' = 'light';

    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;

    private _dialogOverlaySettings2;

    constructor() {
        this.toggleOverlayClasses(this.themesClass);
    }

    public lightTheme() {
        this.themesClass = 'light';
        this.toggleOverlayClasses(this.themesClass);
    }

    public darkTheme() {
        this.themesClass = 'dark';
        this.toggleOverlayClasses(this.themesClass);
    }

    private toggleOverlayClasses(theme: 'light' | 'dark') {
        const overlayClasses = this.overlayContainer.getContainerElement().classList;
        overlayClasses.add('mat-menu');
    
        switch (theme) {
            case 'light':
                overlayClasses.remove('dark-menu-theme');
                overlayClasses.add('light-menu-theme');
                break;
            case 'dark':
                overlayClasses.remove('light-menu-theme');
                overlayClasses.add('dark-menu-theme');
                break;
        }
    }

    public openDialog() {
        this._dialogOverlaySettings2.outlet = this.outlet;
        this.dialog.open(this._dialogOverlaySettings2);
    }

    public ngOnInit() {
        this._dialogOverlaySettings2 = {
            modal: true,
            outlet: this.outlet
        };

        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', Validators.required]
        });
    }
}
