import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ButtonGroupAlignment } from "igniteui-angular";

interface IButton {
    ripple?: string;
    label?: string;
    togglable?: boolean;
    selected?: boolean;
    icon?: string;
}

class ToggleButton {
    private ripple: string;
    private label: string;
    private togglable: boolean;
    private selected: boolean;
    private icon: string;

    constructor(obj?: IButton) {
        this.ripple = obj.ripple || "gray";
        this.label = obj.label;
        this.selected = obj.selected || false;
        this.togglable = obj.togglable || true;
        this.icon = obj.icon;
    }
}

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-button-group-sample-1",
    styleUrls: ["./button-group-sample-1.component.scss"],
    templateUrl: "./button-group-sample-1.component.html"
})

export class ButtonGroupSample1Component implements OnInit {
    public alignment = ButtonGroupAlignment.vertical;
    public rippleColor = "grey";
    public bordersButtons: ToggleButton[];
    public fontOptionsButtons: ToggleButton[];

    public ngOnInit() {
        this.bordersButtons = [
            new ToggleButton({
                icon: "border_top",
                selected: true
            }),
            new ToggleButton({
                icon: "border_right",
                selected: false
            }),
            new ToggleButton({
                icon: "border_bottom",
                selected: false
            }),
            new ToggleButton({
                icon: "border_left",
                selected: false
            })
        ];

        this.fontOptionsButtons = [
            new ToggleButton({
                icon: "format_bold",
                selected: false
            }),
            new ToggleButton({
                icon: "format_italic",
                selected: true
            }),
            new ToggleButton({
                icon: "format_underlined",
                selected: false
            })
        ];
    }
}
