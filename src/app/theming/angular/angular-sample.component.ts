import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { ConnectedPositioningStrategy, HorizontalAlignment, IgxDialogComponent, IgxOverlayOutletDirective, NoOpScrollStrategy, VerticalAlignment } from 'igniteui-angular';
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
    public themesClass = 'light';

    public overlaySettings = {
        positionStrategy: new ConnectedPositioningStrategy({
            horizontalDirection: HorizontalAlignment.Left,
            horizontalStartPoint: HorizontalAlignment.Right,
            verticalStartPoint: VerticalAlignment.Bottom
        }),
        scrollStrategy: new NoOpScrollStrategy()
    };

    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;

    private _dialogOverlaySettings2;

    constructor(private _formBuilder: FormBuilder,
        private overlayContainer: OverlayContainer) {
    }

    public lightTheme() {
        this.themesClass = 'light';
        this.overlayContainer.getContainerElement().classList.remove('dark');
    }

    public darkTheme() {
        this.themesClass = 'dark';
        this.overlayContainer.getContainerElement().classList.add('dark');
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
