import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IgxButtonGroupComponent, IgxSliderComponent
} from 'igniteui-angular';

@Component({
    selector: 'app-finjs-grid-controller',
    styleUrls: ['./finjs-controller.component.scss'],
    templateUrl: './finjs-controller.component.html'
})
export class FinJsControllerComponent {
    @ViewChild('buttonGroup1', { static: true }) public playButtons: IgxButtonGroupComponent;
    @ViewChild('slider1', { static: true }) public volumeSlider: IgxSliderComponent;
    @ViewChild('slider2', { static: true }) public intervalSlider: IgxSliderComponent;

    @Input()
    public volume = 1000;

    @Input()
    public theme = false;

    @Input()
    public frequency = 500;

    @Output() public switchChanged = new EventEmitter<any>();
    @Output() public volumeChanged = new EventEmitter<any>();
    @Output() public frequencyChanged = new EventEmitter<any>();
    @Output() public playAction = new EventEmitter<any>();

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
            icon: "insert_chart_outlined",
            label: "Chart",
            selected: false
        }
    ];
    private selectedButton;
    constructor() { }

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
                this.playButtons.deselectButton(3);
                break;
            }
            default: break;
        }
    }

    public onChange(action: string, event: any) {
        this.switchChanged.emit({action, value: event.checked });
    }

    public updateFrequency() {
        this.frequencyChanged.emit(this.intervalSlider.value);
    }

    public updateVolume() {
        this.volumeChanged.emit(this.volumeSlider.value);
    }

    private disableOtherButtons(ind: number, disableButtons: boolean) {
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
