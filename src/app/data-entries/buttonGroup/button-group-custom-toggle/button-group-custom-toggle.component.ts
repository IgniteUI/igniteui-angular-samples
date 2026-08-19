import { Component, OnInit } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';

interface IButton {
    ripple?: string;
    label?: string;
    disabled?: boolean;
    togglable?: boolean;
    selected?: boolean;
    color?: string;
    icon?: string;
}

class CustomToggle {
    private ripple: string;
    private label: string;
    private disabled: boolean;
    private togglable: boolean;
    private selected: boolean;
    private color: string;
    private icon: string;

    constructor(obj?: IButton) {
        this.ripple = obj.ripple || 'gray';
        this.label = obj.label;
        this.selected = obj.selected || false;
        this.togglable = obj.togglable || true;
        this.disabled = obj.disabled || false;
        this.color = obj.color;
        this.icon = obj.icon;
    }
}

@Component({
    selector: 'app-button-group-custom-toggle',
    styleUrls: ['./button-group-custom-toggle.component.scss'],
    templateUrl: './button-group-custom-toggle.component.html',
    imports: [IgxButtonGroupComponent]
})
export class ButtonGroupCustomToggleComponent implements OnInit {
    public bordersButtons: CustomToggle[];

    public ngOnInit() {
        this.bordersButtons = [
            new CustomToggle({ icon: 'border_top', selected: true }),
            new CustomToggle({ icon: 'border_right', selected: false }),
            new CustomToggle({ icon: 'border_bottom', selected: false }),
            new CustomToggle({ icon: 'border_left', selected: false })
        ];
    }
}
