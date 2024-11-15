import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IButtonGroupEventArgs, IChangeCheckboxEventArgs, IgxButtonGroupComponent, IgxSliderComponent, IgxToastComponent, ISliderValueChangeEventArgs, VerticalAlignment, IgxSwitchComponent }
from 'igniteui-angular';
import { Observable, Subscription, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-finjs-controllers',
    styleUrls: ['./controllers.component.scss'],
    templateUrl: './controllers.component.html',
    imports: [NgIf, IgxSwitchComponent, FormsModule, IgxSliderComponent, IgxButtonGroupComponent, IgxToastComponent]
})
export class ControllerComponent implements OnInit, OnDestroy {
    @ViewChild('buttonGroup1', { static: true }) public playButtons: IgxButtonGroupComponent;
    @ViewChild('slider1', { static: true }) public volumeSlider: IgxSliderComponent;
    @ViewChild('slider2', { static: true }) public intervalSlider: IgxSliderComponent;
    @ViewChild('toast', { static: true }) public toast: IgxToastComponent;

    @Output() public switchChanged = new EventEmitter<{ action: string; value: boolean }>();
    @Output() public volumeChanged = new EventEmitter<number>();
    @Output() public frequencyChanged = new EventEmitter<number>();
    @Output() public playAction = new EventEmitter<{ action: string }>();

    public volume = 1000;
    public theme = false;
    public isThemeSwitchVisible = true;
    public frequency = 500;
    public controls = [
        {
            disabled: false,
            icon: 'update',
            label: 'LIVE ALL PRICES',
            selected: false
        },
        {
            disabled: true,
            icon: 'stop',
            label: 'Stop',
            selected: false
        },
        {
            disabled: false,
            icon: 'insert_chart_outlined',
            label: 'Chart',
            selected: false
        }
    ];

    private selectedButton: number;
    private volumeChanged$: Observable<ISliderValueChangeEventArgs>;
    private volumeChangedSubscription: Subscription;
    private frequencyChanged$: Observable<ISliderValueChangeEventArgs>;
    private frequencyChangedSubscription: Subscription;

    constructor(private router: ActivatedRoute) {}

    public ngOnInit(): void {
        this.volumeChanged$ = this.volumeSlider.valueChange.pipe(debounce(() => timer(200)));
        this.volumeChangedSubscription = this.volumeChanged$.subscribe(x => this.volumeChanged.emit(this.volumeSlider.value as number));

        this.frequencyChanged$ = this.intervalSlider.valueChange.pipe(debounce(() => timer(200)));
        this.frequencyChangedSubscription = this.frequencyChanged$
            .subscribe(() => this.frequencyChanged.emit(this.intervalSlider.value as number));
        
        this.toast.positionSettings.verticalDirection = VerticalAlignment.Middle;

        // Hide theme switcher
        if (this.router.snapshot.queryParamMap.get('theme-switch') === 'false') {
            this.isThemeSwitchVisible = false;
        }
    }

    public ngOnDestroy(): void {
        this.volumeChangedSubscription.unsubscribe();
        this.frequencyChangedSubscription.unsubscribe();
    }

    public onButtonSelected(event: IButtonGroupEventArgs): void {
        switch (event.index) {
            case 0: {
                this.disableOtherButtons(event.index, true);
                this.playAction.emit({ action: 'playAll'});
                break;
            }
            case 1: {
                this.disableOtherButtons(event.index, false);
                this.playAction.emit({ action: 'stop'});
                break;
            }
            case 2: {
                this.playAction.emit({ action: 'chart'});
                break;
            }
            default: break;
        }
    }

    public handleHidden(): void {
        this.playButtons.deselectButton(2);
    }

    public onChange(action: string, event: IChangeCheckboxEventArgs): void {
        this.switchChanged.emit({action, value: event.checked });
    }

    private disableOtherButtons(ind: number, disableButtons: boolean): void {
        this.volumeSlider.disabled = disableButtons;
        this.intervalSlider.disabled = disableButtons;
        this.selectedButton = ind;
        this.playButtons.buttons.forEach((button, index) => {
            if (index === 1) { button.disabled = !disableButtons; } else {
                this.playButtons.buttons[0].disabled = disableButtons;
                this.playButtons.buttons[2].disabled = disableButtons;
            }
        });
    }

    get buttonSelected(): number {
        return this.selectedButton || this.selectedButton === 0 ? this.selectedButton : -1;
    }
}
