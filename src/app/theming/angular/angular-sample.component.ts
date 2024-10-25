import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent, IgxOverlayOutletDirective } from 'igniteui-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
    selector: 'app-angular-sample',
    styleUrls: ['./angular-sample.component.scss'],
    templateUrl: './angular-sample.component.html'
})

export class AngularMaterialComponent implements OnInit {
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

    constructor(private _formBuilder: FormBuilder, private overlayContainer: OverlayContainer) {
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
