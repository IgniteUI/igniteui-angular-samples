import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { ConnectedPositioningStrategy, HorizontalAlignment, IgxDialogComponent, IgxDropDownComponent, IgxOverlayOutletDirective, NoOpScrollStrategy, VerticalAlignment } from 'igniteui-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    @ViewChild('dropdown', { read: IgxDropDownComponent, static: true })
    public dropdown: IgxDropDownComponent;

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    private igxOverlayOutlet: IgxOverlayOutletDirective;

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    private igxOverlayOutlet1: IgxOverlayOutletDirective;

    @HostBinding('class')
    public themesClass = 'light';

    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;

    public themeOverlaySettings;
    public dropDownSetting;
    private _dialogOverlaySettings2;

    constructor(private _formBuilder: FormBuilder) {}

    public lightTheme() {
        this.themesClass = 'light';
    }

    public darkTheme() {
        this.themesClass = 'dark';
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

        this.dropDownSetting = {
            positionStrategy: new ConnectedPositioningStrategy(),
            scrollStrategy: new NoOpScrollStrategy(),
            closeOnOutsideClick: true,
            modal: false,
            outlet: this.igxOverlayOutlet
        };

        this.themeOverlaySettings = {
            positionStrategy: new ConnectedPositioningStrategy({
                horizontalDirection: HorizontalAlignment.Left,
                horizontalStartPoint: HorizontalAlignment.Right,
                verticalStartPoint: VerticalAlignment.Bottom
            }),
            scrollStrategy: new NoOpScrollStrategy(),
            closeOnOutsideClick: true,
            modal: false,
            outlet: this.igxOverlayOutlet1
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
