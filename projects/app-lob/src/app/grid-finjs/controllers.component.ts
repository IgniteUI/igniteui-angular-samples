import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { IgxButtonGroupComponent, IgxSliderComponent
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

    @Output() public switchChanged = new EventEmitter<any>();
    @Output() public volumeChanged = new EventEmitter<any>();
    @Output() public playAction = new EventEmitter<any>();

    public selectionMode = 'multiple';
    public volume = 1000;
    public theme = false;
    public frequency = 500;
    public controls = [
        {
            disabled: false,
            icon: 'update',
            label: 'LIVE PRICES',
            selected: false
        },
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

    private subscription;
    private selectedButton;
    private volumeChanged$;

    public ngOnInit() {
        this.volumeChanged$ = this.volumeSlider.onValueChange.pipe(debounce(() => timer(200)));
        this.volumeChanged$.subscribe(x => this.volumeChanged.emit(this.volumeSlider.value));
    }

    public onButtonSelected(event: any) {
        switch (event.index) {
            case 0: {
                this.disableOtherButtons(event.index, true);
                this.playAction.emit({ action: 'playRandom'});
                break;
            }
            case 1: {
                this.disableOtherButtons(event.index, true);
                this.playAction.emit({ action: 'playAll'});
                break;
            }
            case 2: {
                this.disableOtherButtons(event.index, false);
                this.playAction.emit({ action: 'stop'});
                break;
            }
            case 3: {
                this.playAction.emit({ action: 'chart'});
                this.playButtons.deselectButton(3);
                break;
            }
            default:
                {
                    break;
                }
        }
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
            if (index === 2) { button.disabled = !disableButtons; } else {
                this.playButtons.buttons[0].disabled = disableButtons;
                this.playButtons.buttons[1].disabled = disableButtons;
            }
        });
    }

    get buttonSelected(): number {
        return this.selectedButton || this.selectedButton === 0 ? this.selectedButton : -1;
    }

    public ngOnDestroy() {
        this.volumeChanged$.unsubscribe();
    }
}
