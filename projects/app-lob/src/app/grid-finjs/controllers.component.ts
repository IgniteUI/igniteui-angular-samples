import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { IgxButtonGroupComponent, IgxSliderComponent, IgxToastComponent
} from 'igniteui-angular';
import { timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
    selector: 'app-finjs-controllers',
    styleUrls: ['./controllers.component.scss'],
    templateUrl: './controllers.component.html'
})
export class ControllerComponent implements OnInit, OnDestroy {
    @ViewChild('buttonGroup1', { static: true }) public playButtons: IgxButtonGroupComponent;
    @ViewChild('slider1', { static: true }) public volumeSlider: IgxSliderComponent;
    @ViewChild('slider2', { static: true }) public intervalSlider: IgxSliderComponent;
    @ViewChild('toast', { static: true }) public toast: IgxToastComponent;

    @Output() public switchChanged = new EventEmitter<any>();
    @Output() public volumeChanged = new EventEmitter<any>();
    @Output() public frequencyChanged = new EventEmitter<any>();
    @Output() public playAction = new EventEmitter<any>();

    public volume = 1000;
    public theme = false;
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

    private subscription;
    private selectedButton;
    private volumeChanged$;
    private frequencyChanged$;

    constructor() {
    }
    public ngOnInit() {
        this.volumeChanged$ = this.volumeSlider.valueChange.pipe(debounce(() => timer(200)));
        this.volumeChanged$.subscribe(x => this.volumeChanged.emit(this.volumeSlider.value));

        this.frequencyChanged$ = this.intervalSlider.valueChange.pipe(debounce(() => timer(200)));
        this.frequencyChanged$.subscribe(x => this.frequencyChanged.emit(this.intervalSlider.value));
    }

    public ngOnDestroy() {
        this.volumeChanged$.unsubscribe();
        this.frequencyChanged$.unsubscribe();
    }

    public onButtonSelected(event: any) {
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

    public handleHidden(evt){
        this.playButtons.deselectButton(2);
    }

    public onChange(action: string, event: any) {
        this.switchChanged.emit({action, value: event.checked });
    }

    private disableOtherButtons(ind: number, disableButtons: boolean) {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
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
